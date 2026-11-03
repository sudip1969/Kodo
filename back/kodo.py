import os
import time
import asyncio
from openai import AsyncOpenAI
from dotenv import load_dotenv
from llm_config import get_model_config

load_dotenv()
client = AsyncOpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=os.getenv("OPEN_API_KEY"),
)

async def kodo(role, model, prompt):
    start = time.perf_counter()
    try:
        response = await client.chat.completions.create(
            model=model,
            messages=[{"role": "user", "content": prompt}],
            max_tokens=20,
            timeout=30.0,
        )
        answer = (response.choices[0].message.content or "").strip()
        return {
            "role": role, "model": model, "ok": True,
            "latency_ms": round((time.perf_counter() - start) * 1000),
            "answer": answer,
        }
    except Exception as e:
        return {
            "role": role, "model": model, "ok": False,
            "latency_ms": round((time.perf_counter() - start) * 1000),
            "error": str(e),
        }

async def run_all_checks(prompt="hi"):
    config = get_model_config()
    tasks = [kodo(r, m, prompt) for r, m in config.items() if m]
    return await asyncio.gather(*tasks)
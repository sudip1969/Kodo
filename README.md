# 索 Kodo

**LLMs Heartbeat Dashboard.**

```
  ╔══════════════════════════════════════════════╗
  ║     _  _     _  __               _           ║
  ║   _| || |_  | |/ /              | |          ║
  ║  |_  __  _| | ' /    ___     __| |   ___     ║
  ║   _| || |_  |  <    / _ \   / _` |  / _ \    ║
  ║  |_  __  _| | . \  | (_) | | (_| | | (_) |   ║
  ║    |_||_|   |_|\_\  \___/   \__,_|  \___/    ║
  ╚══════════════════════════════════════════════╝
  索 Kodo v2.0.0  — LLMs Heartbeat Dashboard
```

A small dashboard that pings multiple LLMs through OpenRouter and shows whether each one is up, how fast it responds, and how reliable it is.

## Stack

- **Frontend:** React, Vite, Tailwind, Recharts
- **Backend:** Flask, OpenAI SDK (pointed at OpenRouter)

## Setup

**Backend**

```bash
pip install flask asgiref openai python-dotenv
```

Create a `.env` file:

```
OPEN_API_KEY=your_openrouter_key
```

**Frontend**

```bash
npm install
```

## Run

```bash
# terminal 1: backend (port 5000)
python app.py

# terminal 2: frontend
npm run dev
```

Open the Vite URL and click **RUN DIAGNOSTICS**.

## API

`GET /api/status` runs a quick prompt against every model in `back/llm_config.py` and returns:

```json
{
  "status": "success",
  "data": [
    { "role": "frontend_model", "model": "...", "ok": true, "latency_ms": 142, "answer": "..." }
  ]
}
```

## Configuration

Edit the models to check in `back/llm_config.py`.

## Notes

- Free OpenRouter models rate-limit often, so a "Down" result may just be a 429.
- The charts currently use mock data.

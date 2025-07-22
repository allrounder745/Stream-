# Webpage to RTMP Streamer (Render + GitHub)

## How it works
This container uses Puppeteer to open your webpage in 1280x720, and streams it live to your Onestream RTMP URL using FFmpeg.

## URL: https://allrounder745.github.io/Scoreboard-/
## RTMP: rtmps://mumbai.onestream.studio:19350/live/live_4139402_c9b3iiagb?auth=p_auth_4139402_vm684gnat

## Deploy Instructions
1. Push this repo to GitHub.
2. Connect it to Render as a **Web Service** (Docker).
3. Leave build and start command empty.
4. That's it! It'll stream automatically.

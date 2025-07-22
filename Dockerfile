FROM node:18-slim

RUN apt-get update && apt-get install -y \
  ffmpeg \
  xvfb \
  x11-utils \
  wget \
  ca-certificates \
  fonts-liberation \
  libappindicator3-1 \
  libasound2 \
  libatk-bridge2.0-0 \
  libatk1.0-0 \
  libcups2 \
  libdbus-1-3 \
  libgdk-pixbuf2.0-0 \
  libnspr4 \
  libnss3 \
  libx11-xcb1 \
  libxcomposite1 \
  libxdamage1 \
  libxrandr2 \
  xdg-utils \
  && rm -rf /var/lib/apt/lists/*

RUN npm install puppeteer

WORKDIR /app
COPY . .

CMD ["xvfb-run", "--server-args=-screen 0 1280x720x24", "node", "server.js"]

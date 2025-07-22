const puppeteer = require("puppeteer");
const { spawn } = require("child_process");

(async () => {
  const YOUTUBE_STREAM_URL = "rtmps://mumbai.onestream.studio:19350/live/live_4139402_c9b3iiagb?auth=p_auth_4139402_vm684gnat";

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--window-size=1280,720"
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  await page.goto("https://allrounder745.github.io/Scoreboard-/", { waitUntil: "networkidle2" });

  const ffmpeg = spawn("ffmpeg", [
    "-f", "x11grab",
    "-draw_mouse", "0",
    "-r", "30",
    "-s", "1280x720",
    "-i", ":99.0",
    "-vcodec", "libx264",
    "-preset", "veryfast",
    "-maxrate", "3000k",
    "-bufsize", "6000k",
    "-pix_fmt", "yuv420p",
    "-g", "50",
    "-f", "flv",
    YOUTUBE_STREAM_URL
  ]);

  ffmpeg.stderr.on("data", (data) => console.error(`FFmpeg: ${data}`));
  ffmpeg.on("close", (code) => {
    console.log(`FFmpeg exited with code ${code}`);
    browser.close();
  });
})();

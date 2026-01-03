function generateVideo() {
  const prompt = document.getElementById("prompt").value;
  const status = document.getElementById("status");
  const video = document.getElementById("video");

  if (prompt === "") {
    status.innerText = "❌ اكتب وصف الفيديو أولًا";
    return;
  }

  status.innerText = "⏳ يتم إنشاء الفيديو...";

  setTimeout(() => {
    status.innerText = "✅ تم إنشاء الفيديو (تجريبي)";
    video.src = "https://www.w3schools.com/html/mov_bbb.mp4";
  }, 2000);
}

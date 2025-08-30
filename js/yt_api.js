const apiKey = "AIzaSyDNBk6jiupYG6yhOy1YtPUbxncvF1mtaq0";
const videoIds = [
  "TlEv4tpEaKU",
  "1T2tZxfKu8c",
  "Imzt3wPKois",
  "e61ClhYnxC8",
  "6NDcvu0196o",
  "_hwZCKAV6xw",
  "_N68XHKYCBc",
  "GrCHZ-FaEhM",
  "HWwMGIHfWtQ",
  "dlvvuYu9TFA"
];

async function loadVideoStats() {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds.join(",")}&key=${apiKey}`
    );
    const data = await response.json();
    console.log("API result:", data); // Debug: cek hasil

    data.items.forEach((video, index) => {
        const views = video.statistics.viewCount;
        const likes = video.statistics.likeCount;

        const statsDiv = document.createElement("div");
        statsDiv.className = "video-stats";
        statsDiv.innerHTML = `
        <span><i class="ph ph-eye"></i> ${Number(views).toLocaleString()}</span>
        <span><i class="ph ph-thumbs-up"></i> ${Number(likes).toLocaleString()}</span>`;

      // cari kontainer video
      const videoContainer = document.querySelector(`.video${index+1} a`);
      const titleDiv = videoContainer?.querySelector(".video-title");

      if (videoContainer && titleDiv) {
        // cek kalau belum ada wrapper
        let infoWrapper = videoContainer.querySelector(".video-info");
        if (!infoWrapper) {
          infoWrapper = document.createElement("div");
          infoWrapper.className = "video-info";
          videoContainer.appendChild(infoWrapper);
          infoWrapper.appendChild(titleDiv); // pindahin title ke dalam wrapper
        }

        // tambahkan stats sebelum title
        infoWrapper.insertBefore(statsDiv, titleDiv);
        console.log(`Stats ditambahkan ke video${index+1}`);
      } else {
        console.warn("Tidak menemukan title di video:", index+1);
      }
    });
  } catch (err) {
    console.error("Gagal load YouTube API:", err);
  }
}

loadVideoStats();

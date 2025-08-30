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
      `https://arselady-youtube-key.egaadyatmapuspito.workers.dev/?ids=${videoIds.join(",")}`
    );
    const data = await response.json();
    console.log("API result:", data);

    data.items.forEach((video, index) => {
      const views = video.statistics.viewCount;
      const likes = video.statistics.likeCount;

      const statsDiv = document.createElement("div");
      statsDiv.className = "video-stats";
      statsDiv.innerHTML = `
        <span><i class="ph ph-eye"></i> ${Number(views).toLocaleString()}</span>
        <span><i class="ph ph-thumbs-up"></i> ${Number(likes).toLocaleString()}</span>`;

      const videoContainer = document.querySelector(`.video${index + 1} a`);
      const titleDiv = videoContainer?.querySelector(".video-title");

      if (videoContainer && titleDiv) {
        let infoWrapper = videoContainer.querySelector(".video-info");
        if (!infoWrapper) {
          infoWrapper = document.createElement("div");
          infoWrapper.className = "video-info";
          videoContainer.appendChild(infoWrapper);
          infoWrapper.appendChild(titleDiv);
        }
        infoWrapper.insertBefore(statsDiv, titleDiv);
      }
    });
  } catch (err) {
    console.error("Gagal load dari Worker:", err);
  }
}

loadVideoStats();

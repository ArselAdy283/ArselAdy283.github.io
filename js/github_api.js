const username = "ArselAdy283";
const url = `https://api.github.com/users/${username}/repos?sort=updated&per_page=4`;

fetch(url)
  .then(response => response.json())
  .then(repos => {
    repos.forEach((repo, index) => {
      const div = document.getElementById(`repo${index + 1}`);
      if (div) {
        const updatedDate = new Date(repo.updated_at).toLocaleDateString("en-US"); 
        div.innerHTML = `
          <div class="repo-card">
            <div class="repo-content">
              <h2><a href="${repo.html_url}" target="_blank">${repo.name}</a></h2>
              <p class="desc">${repo.description || "Tidak ada deskripsi"}</p>
              <span class="badge">${repo.language || "Unknown"}</span>
            </div>

            <div class="repo-footer">
              <div class="stats">
                ⭐ ${repo.stargazers_count} • Updated ${updatedDate}
              </div>
              <a href="${repo.html_url}" target="_blank" class="button">💻 View Repository →</a>
            </div>
          </div>
        `;
      }
    });
  })
  .catch(error => console.error("Error:", error));

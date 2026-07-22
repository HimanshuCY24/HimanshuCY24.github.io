const username = "HimanshuCY24";

async function loadGitHubProjects() {

    const container = document.querySelector(".project-grid");

    if (!container) return;

    try {

        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);

        const repos = await response.json();

        container.innerHTML = "";

        repos.slice(0, 6).forEach(repo => {

            container.innerHTML += `

            <div class="project-card glass">

                <div class="project-content">

                    <h3>${repo.name}</h3>

                    <p>${repo.description || "No description available."}</p>

                    <div class="project-tags">

                        <span>${repo.language || "Unknown"}</span>

                        <span>⭐ ${repo.stargazers_count}</span>

                    </div>

                    <div class="project-buttons">

                        <a href="${repo.html_url}"
                           target="_blank"
                           class="btn">

                           View Repository

                        </a>

                    </div>

                </div>

            </div>

            `;

        });

    }

    catch(error){

        console.log(error);

    }

}

loadGitHubProjects();
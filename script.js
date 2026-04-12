const container = document.getElementById("anime-container");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");
const genreSelect = document.getElementById("genre");
const toggleBtn = document.getElementById("theme-toggle");

let allAnime = [];


async function fetchAnime() {
  try {
    container.innerHTML = "<p>Loading...</p>";

    const res = await fetch("https://api.jikan.moe/v4/top/anime");
    const data = await res.json();

    allAnime = data.data;
    displayAnime(allAnime);

  } catch (error) {
    container.innerHTML = "<p>Error loading data</p>";
  }
}

function displayAnime(list) {
  container.innerHTML = "";

  list.map(anime => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${anime.images.jpg.image_url}" />
      <h3>${anime.title}</h3>
      <p>⭐ ${anime.score}</p>
      <button onclick="addToFav('${anime.title}')">❤️ Favorite</button>
    `;

    container.appendChild(card);
  });
}

function applyFilters() {
  let result = [...allAnime];

  const searchValue = searchInput.value.toLowerCase();
  const genreValue = genreSelect.value;
  const sortValue = sortSelect.value;

  result = result.filter(a =>
    a.title.toLowerCase().includes(searchValue)
  );

  if (genreValue) {
    result = result.filter(a =>
      a.genres.some(g => g.name === genreValue)
    );
  }

  if (sortValue === "high") {
    result.sort((a, b) => b.score - a.score);
  } else if (sortValue === "low") {
    result.sort((a, b) => a.score - b.score);
  }

  displayAnime(result);
}

async function fetchGenres() {
  const res = await fetch("https://api.jikan.moe/v4/genres/anime");
  const data = await res.json();

  data.data.map(g => {
    const option = document.createElement("option");
    option.value = g.name;
    option.textContent = g.name;
    genreSelect.appendChild(option);
  });
}

function addToFav(title) {
  let favs = JSON.parse(localStorage.getItem("favorites")) || [];

  if (!favs.includes(title)) {
    favs.push(title);
    localStorage.setItem("favorites", JSON.stringify(favs));
    alert("Added to favorites!");
  }
}

let currentTheme = localStorage.getItem("theme") || "dark";
document.body.classList.add(currentTheme);

function updateButtonText() {
  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
}

updateButtonText();

toggleBtn.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.replace("dark", "light");
  } else {
    document.body.classList.replace("light", "dark");
  }

  localStorage.setItem("theme", document.body.className);
  updateButtonText();
});

searchInput.addEventListener("input", applyFilters);
genreSelect.addEventListener("change", applyFilters);
sortSelect.addEventListener("change", applyFilters);

fetchAnime();
fetchGenres();
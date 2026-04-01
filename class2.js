fetch("https://api.jikan.moe/v4/anime")
  .then(res => res.json())
  .then(data => {
    console.log(data.data);
  });
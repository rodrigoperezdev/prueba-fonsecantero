const url = "https://newsapi.org/v2/everything?q=";
const apiKey = "eb380e88f4db462c8f3c9d952695d563";
const form = document.querySelector(".news__form");
const input = document.querySelector(".form__input");
const newsContainer = document.querySelector(".news__container");

const newsApi = async (searchTerm) => {
  try {
    const resp = await fetch(`${url}${searchTerm}&apiKey=${apiKey}`);
    const data = await resp.json();

    return data.articles.slice(4, 8);
  } catch (error) {
    console.log(error);
  }
};

const news = async (searchTerm) => {
  const news = await newsApi(searchTerm);

  while (newsContainer.firstChild) {
    newsContainer.removeChild(newsContainer.firstChild);
  }

  news.forEach((news) => {
    const newsCard = document.createElement("div");
    newsCard.classList.add("news__card");

    const img = document.createElement("img");

    img.src = news.urlToImage;
    img.alt = news.title;

    const textContainer = document.createElement("div");

    const title = document.createElement("h3");
    title.textContent = news.title;

    const author = document.createElement("p");
    author.textContent = news.author;

    textContainer.appendChild(title);
    textContainer.appendChild(author);
    newsCard.appendChild(img);
    newsCard.appendChild(textContainer);

    newsContainer.appendChild(newsCard);
  });
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const searchTerm = input.value;

  news(searchTerm);
});

document.addEventListener("DOMContentLoaded", () => {
  news("apple");
});

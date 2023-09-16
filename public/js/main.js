const url = "https://newsdata.io/api/1/news?apikey=";

const apiKey = "pub_29537744467bca166d371e800d418a83eacae";
const form = document.querySelector(".news__form");
const input = document.querySelector(".form__input");
const newsContainer = document.querySelector(".news__container");

const newsApi = async (searchTerm) => {
  try {
    const resp = await fetch(`${url}${apiKey}&q=${searchTerm}`);
    const data = await resp.json();
    const { results } = data;

    console.log(results);

    if (results && Array.isArray(results)) {
      return results.slice(0, 4);
    } else {
      return results;
    }
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

    if (news.image_url == null) {
      img.src = "../public/img/blogs/work.webp";
      img.alt = news.title;
    } else {
      img.src = news.image_url;
      img.alt = news.title;
    }

    const textContainer = document.createElement("div");

    const title = document.createElement("h3");
    if (news.title.length > 100) {
      title.textContent = `${news.title.slice(0, 100)}...`;
    } else {
      title.textContent = news.title;
    }

    const author = document.createElement("p");
    author.textContent = `By: ${news.creator}`;

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

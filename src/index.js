import { advantages, featured } from "./data.js";
import { validate } from "./validation.js";

const btn = document.querySelector(".header-btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close");
const close2 = document.querySelector(".modal__btn_close");
const body = document.querySelector("body");
const submit = document.querySelector(".modal__btn_colored");
const name = document.querySelector('[type="name"]');
const tel = document.querySelector('[type="tel"]');
const error = document.querySelector(".modal__error");

document.querySelector(".featured__select").addEventListener("change", (e) => {
  featured.sort((a, b) => {
    if (e.target.value === "price") {
      return (
        a.price.slice(4, a.price.length) - b.price.slice(4, b.price.length)
      );
    }
    if (e.target.value === "name") {
      return a.title.split(" ")[0].localeCompare(b.title.split(" ")[0]);
    }
  });
  featuredSection(featured);
  featuredSectionRemove();
});

const featuredSectionRemove = () => {
  const container = document.querySelector(".featured__flowers");
  container.remove();
};

const advantagesSection = (advantages) => {
  const container = document.querySelector(".advantages__cards");
  advantages.map((advantage) => {
    const div = document.createElement("div");
    div.className = "advantages__card";

    const titleContainer = document.createElement("div");
    titleContainer.className = "advantages__titleContainer";

    const img = document.createElement("img");
    img.src = advantage.img;

    const title = document.createElement("div");
    title.innerHTML = advantage.title;
    title.className = "advantages__title-text";

    const text = document.createElement("div");
    text.innerHTML = advantage.description;
    text.className = "advantages__text";

    div.append(titleContainer);
    titleContainer.append(img);
    titleContainer.append(title);
    div.append(text);
    container.append(div);
  });
};
advantagesSection(advantages);

const featuredSection = (featured) => {
  const featuredContainer = document.querySelector(".featured ");
  const container = document.createElement("div");
  container.className = "featured__flowers";
  featured.map((feature) => {
    const div = document.createElement("div");
    div.className = "featured__flower";

    const img = document.createElement("img");
    img.src = feature.img;

    const title = document.createElement("div");
    title.innerHTML = feature.title;
    title.className = "featured__flowers-title";
    const price = document.createElement("div");
    price.innerHTML = feature.price;

    div.append(img);
    div.append(title);
    div.append(price);
    container.append(div);
    featuredContainer.append(container);
  });
};
featuredSection(featured);

const removeForm = () => {
  name.value = "";
  tel.value = "";
  error.classList.remove("active");
};

document.addEventListener("click", (event) => {
  event.stopPropagation();
  if (
    !modal.contains(event.target) &&
    modal.classList.contains("active") &&
    event.target !== btn
  ) {
    modal.classList.toggle("active");
    overlay.classList.toggle("active");
    body.classList.toggle("hidden");
    removeForm();
  }
});

btn.addEventListener("click", (event) => {
  event.preventDefault();
  modal.classList.toggle("active");
  overlay.classList.toggle("active");
  body.classList.toggle("hidden");
});

[close, close2].forEach((el) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();
    modal.classList.toggle("active");
    overlay.classList.toggle("active");
    body.classList.toggle("hidden");
    removeForm();
  });
});

submit.addEventListener("click", (event) => {
  event.preventDefault();
  const result = validate(name, tel);
  if (result !== true) {
    error.classList.add("active");
    if (result[1] === "name") {
      error.style.top = `${name.offsetTop + 15}px`;
    }
    if (result[1] === "tel") {
      error.style.top = `${tel.offsetTop + 15}px`;
    }
  } else {
    const loader = () => {
      const preloader = document.querySelector(".preloader");
      preloader.classList.remove("modal");
      window.setTimeout(function () {
        preloader.classList.add("modal");
      }, 500);
    };
    loader();
    const getDevices = async () => {
      const modalContainer = document.querySelector(".modal__container");
      const table = document.querySelector(".modal__table");
      let data;
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos`
      );
      data = await response.json();
      if (!modalContainer) return false;
      modalContainer.remove();
      table.classList.add("active");
      const result = data.filter((el) => {
        if (el.userId === 5 && el.completed === false) return true;
        else {
          return false;
        }
      });
      result.forEach((el) => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        td1.textContent = el.userId;
        td2.textContent = el.id;
        td3.textContent = el.title;
        td4.textContent = el.completed;
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        table.append(tr);
      });
    };
    window.setTimeout(() => getDevices(), 500);
  }
});

[(name, tel)].forEach((el) => {
  el.addEventListener("focus", (event) => {
    error.classList.remove("active");
  });
});

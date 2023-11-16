// Возвращает шапку
const app = document.getElementById("app")

function getHeader () {
   const header = document.createElement("header");

   header.classList.add("header");

   const container = document.createElement("div");
   container.classList.add("container", "header__container");

   header.append(container)

   return header
}

const header = getHeader();
app.append(header)

import { renderResult, searchForm } from "./render/render.js";
import { getUservalue } from "./search.js";

searchForm();

const indexForm = document.getElementById("search_champion");

indexForm.addEventListener("submit", (form) => {
  form.preventDefault();
  const nickname = document.getElementById("userName").value;
  getUservalue(nickname).then((result) => {
    renderResult(result);
  });
});

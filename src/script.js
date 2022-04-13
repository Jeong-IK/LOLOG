import { renderResult, searchForm } from "./render/render.js";
import { championValue } from "./search.js";

searchForm();

const indexForm = document.getElementById("search_champion");

indexForm.addEventListener("submit", (form) => {
  form.preventDefault();
  const nickname = document.getElementById("userName").value;
  championValue(nickname).then((result) => renderResult(result));
});

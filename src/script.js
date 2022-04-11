import { render_result, search_form } from "./render/render.js";
import { MChampion, Whoareyou } from "./search.js";

search_form();

const search_submit = document.getElementById("search_champion");

search_submit.addEventListener("submit", (form) => {
  form.preventDefault();
  const nickname = document.getElementById("userName").value;
  MChampion(nickname).then((result) => render_result(result));
});

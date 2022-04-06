import { render_result, search_form } from "./render/render.js";

const apikey = "RGAPI-a60c9f12-8e05-4c43-afc8-7852fef7e305";

search_form();

//SUMMONER By userNickName
function Whoareyou() {
  const response = fetch(GetID_url);
  return response.then((res) => res.json());
}

//챔피언 목록 요청
async function MChampion() {
  const nickname = document.getElementById("userName").value;
  try {
    const userID = await Whoareyou(nickname);
    console.log(userID);
    const GETMC_url = `https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${userID.id}?api_key=${apikey}`;
    const champion = fetch(GETMC_url).then((res) => res.json());
    console.log(champion);
    rander(champion);
  } catch (e) {
    console.log(e);
  }
}

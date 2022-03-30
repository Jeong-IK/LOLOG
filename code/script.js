const apikey = "RGAPI-a60c9f12-8e05-4c43-afc8-7852fef7e305";
const nickname = "쌕주랜드";
const GetID_url = `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickname}?api_key=${apikey}`;
const ID = { id: "" };
const MC = {};
//SUMMONER By userNickName
function Whoareyou() {
  console.log("whoareyou시작");
  fetch(GetID_url)
    .then((res) => res.json())
    .then((data) => {
      ID.id = data.id;
      console.log("whoareyou fetch than", data.id);
    });
}

function MChampion() {
  const GETMC_url = `https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${ID.id}?api_key=${apikey}`;
  console.log(GETMC_url);
  fetch(GETMC_url)
    .then((res) => res.json())
    .then((data) => (MC = data));
}

console.log("전역 시작");
Whoareyou();
console.log(ID);
MChampion();
console.log(MC);
console.log("전역 끝");

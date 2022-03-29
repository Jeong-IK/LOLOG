const userName = "쌕주랜드";
const api_key = "RGAPI-a60c9f12-8e05-4c43-afc8-7852fef7e305";
const Get_summonerID = `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${userName}?api_key=${api_key}`;
const SummonerID_value = {
  puuid: "",
};
const Get_champion = `https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${SummonerID_value.puuid}`;
const Champion_value = {};
function get_puuid() {
  fetch(Get_summonerID)
    .then((res) => res.json())
    .then((data) => (SummonerID_value.puuid = data.puuid));
}

function getchampiondata() {
  fetch(Get_champion)
    .then((res) => res.json())
    .then((data) => (Champion_value = data));
}
get_puuid();
console.log(SummonerID_value.puuid);
getchampiondata();
console.log(Champion_value);

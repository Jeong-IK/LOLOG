const apikey = "RGAPI-a60c9f12-8e05-4c43-afc8-7852fef7e305";
const nickname = "쌕주랜드";
const GetID_url = `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickname}?api_key=${apikey}`;
const ID = Whoareyou();
const MC = {};
//SUMMONER By userNickName
function Whoareyou() {
  const response = fetch(GetID_url);
  return response.then((res) => res.json());
}

//챔피언 목록 요청
async function MChampion() {
  try {
    const userID = await Whoareyou();
    const GETMC_url = `https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${userID.id}?api_key=${apikey}`;
    const champion = fetch(GETMC_url).then((res) => res.json());
    console.log(champion);
  } catch (e) {
    console.log(e);
  }
}

console.log("전역 시작");
MChampion();
console.log("전역 끝");

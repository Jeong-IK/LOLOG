//apikey 저장 위치
const apikey = "RGAPI-a60c9f12-8e05-4c43-afc8-7852fef7e305";
//SUMMONER By userNickName

const Whoareyou = (nickname) => {
  const GetID_url = `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickname}?api_key=${apikey}`;
  const response = fetch(GetID_url);
  return response.then((res) => res.json());
};

const MChampion = async (nickname) => {
  try {
    const userID = await Whoareyou(nickname);
    console.log(userID);
    const GETMC_url = `https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${userID.id}?api_key=${apikey}`;
    const champion = fetch(GETMC_url).then((res) => res.json());
    console.log(champion);
    //rander(champion);
  } catch (e) {
    console.log(e);
  }
};

export { MChampion, Whoareyou };

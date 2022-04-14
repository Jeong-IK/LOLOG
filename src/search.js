//apikey 저장 위치
const apikey = "RGAPI-a60c9f12-8e05-4c43-afc8-7852fef7e305";

//SUMMONER By userNickName
const getUserId = (nickname) => {
  const GetID_url = `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickname}?api_key=${apikey}`;
  const response = fetch(GetID_url);
  return response.then((res) => res.json());
};
const getRanked = (userID) => {
  const getRankUrl = `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${userID}?api_key=${apikey}`;
  const response = fetch(getRankUrl);
  return response.then((res) => res.json());
};
const getChampionValue = async (nickname) => {
  try {
    const userID = await getUserId(nickname);
    const userRank = await getRanked(userID.id);
    console.log(userRank);
    const GETMC_url = `https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${userID.id}?api_key=${apikey}`;
    const champion = await fetch(GETMC_url).then((res) => res.json());
    console.log(userID);
    console.log(champion);
    return [userID, champion];
  } catch (e) {
    console.log(e);
  }
};

export { getChampionValue, getUserId };

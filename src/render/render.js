const renderResult = (resultValue) => {
  const championPath = "../../img/champion/";
  const userPath = "../../img/User/";
  const userValue = resultValue[0];
  const championValue = resultValue[1];
  const rankValue = resultValue[2];

  const resultForm = `
  <div class="flex justify-center h-full bg-blue-400">
  <!-- 메뉴 바 -->
    <div id="menuBar" class="absolute top-0 w-screen h-20 bg-indigo-900 flex flex-row box-content h-18">
      <img class="justify-self-center my-2 mx-5" src="../../img/Logo/Logo_1.png" style="width:62px; height:62px;">
    </div>
    <!--결과 출력 폼-->
    <div id="resultForm" class="flex flex-col space-y-10 bg-blue-400 mb-10" style="margin-top:100px">
      <!-- 이용자 검색 결과 출력 -->
      <div id="userForm" class="container w-screen bg-white flex flex-row rounded-lg shadow-xlg">
        <div id="profile" class="text-center w-1/6">
          <img src="${userPath}/userProfile/nonPlayer.jpeg" class="pl-5 pt-5" style="width:150px; height:150px;">
          <span style="background-image: url('${userPath}/userProfile/Level.png'); background-size:100%; font-size:14px; color:rgb(234, 189, 86); position:absolute; width:44px; height:20px; box-sizing:border-box; text-align:center; margin-top:-10px; margin-left:-60px;">${userValue.summonerLevel}</span><br>
          <span class="mx-6 text-xl" style="margin-left:-60px;"><strong>${userValue.name}</strong></span>
        </div>

        <div id="rankValue" class="flex flex-rows place-content-end w-5/6">
          <div id="soloRank" class="flex flex-col mx-6 text-center">
            <span class="mt-1"><strong>${rankValue[0].queueType}</strong></span>
            <img src="${userPath}userRank/${rankValue[0].tier}.png" style="width:150px; height:150px;">
            <spanclass="mb-1"><strong>${rankValue[0].tier} ${rankValue[0].rank}</strong></spanclass=>
          </div>
          <div id="flexRank" class="flex flex-col mx-6 text-center">
            <span class="mt-1"><strong>${rankValue[1].queueType}</strong></span>
            <img src="${userPath}userRank/${rankValue[1].tier}.png" style="width:150px; height:150px;"">
            <span class="mb-1"><strong>${rankValue[1].tier} ${rankValue[1].rank}</strong></span>
          </div>
        </div>
    </div>
        <!-- 챔피언 검색 결과 출력 -->
        <div id="championValue" class="bg-white rounded-xl shadow-xlg p-3">
        <div class="flex flex-row self-center">
            <div class="p-3"><img class="rounded-full" src="${championPath}championProfile/championId_${championValue[0].championId}.png" style="width:100px;height:100px"></div>
            <div class="p-3"><img src="${championPath}championLevel/${championValue[0].championLevel}.png"></div>
          </div>

          <div class="flex flex-row self-center">
            <div class="p-3"><img class="rounded-full" src="${championPath}championProfile/championId_${championValue[1].championId}.png" style="width:100px;height:100px"></div>
            <div class="p-3"><img src="${championPath}championLevel/${championValue[1].championLevel}.png"></div>
          </div>

          <div class="flex flex-row self-center">
            <div class="p-3"><img class="rounded-full" src="${championPath}championProfile/championId_${championValue[2].championId}.png" style="width:100px;height:100px"></div>
            <div class="p-3"><img src="${championPath}championLevel/${championValue[2].championLevel}.png"></div>
          </div>

          <div class="flex flex-row self-center">
            <div class="p-3"><img class="rounded-full" src="${championPath}championProfile/championId_${championValue[3].championId}.png" style="width:100px;height:100px"></div>
            <div class="p-3"><img src="${championPath}championLevel/${championValue[3].championLevel}.png"></div>
          </div>

          <div class="flex flex-row self-center">
            <div class="p-3"><img class="rounded-full" src="${championPath}championProfile/championId_${championValue[4].championId}.png" style="width:100px;height:100px"></div>
            <div class="p-3"><img src="${championPath}championLevel/${championValue[4].championLevel}.png"></div>
          </div>
        </div>
      </div>
    </div>
    `;
  root.innerHTML = resultForm;
};

//자바스크립트 컨벤션

//let키워드 사용을 지양해야 하는 이유
// 변수 초기화 시점부터 값 할당 이전 까지를 일시적 사각지대(TDZ)라 하며 이의 존재 여부가 var 키워드와 let/const키워드의 차이점이며 var키워드를 사용하면 안되는 이유이기도 하다. 또한 let/const의 차이점은  값의 재할당 가능 여부이다. 재할당이 필요한 변수인 경우에만 한하여 let키워드를 사용하며 이를 제외한 경우에는 const 키워드를 사용하여 의도치 않은 재할당을 방지하여야 한다.
const searchForm = () => {
  const root = document.getElementById("root");
  const search_temp = `<div class="flex justify-center h-screen bg-blue-400">
    <!-- 메뉴바 -->
    <div class="absolute top-0 w-screen h-20 bg-indigo-900 flex flex-row box-content h-18" id="menuBar">
      <img class="justify-self-center my-2 mx-5" src="../../img/Logo/Logo_1.png" style="width:62px; height:62px;">
    </div> 
    <!-- 이용자검색폼 -->
    <div class=" box-content h-1/3 w-1/5 fixed bg-white absolute inset-y-1/4 rounded-lg shadow-xlg" id="writeNickname">
      <div class=" box-content h-2/3 w-full grid justify-items-center">
        <img class="justify-self-center m-8" src="../../img/Logo/Logo.jpg" style="width:200px; height:200px;">
      </div>
      <div>
        <form id="search_champion">
          <input type="text" class="rounded border-2 border-black" id="userName" name="userName">
          <input type="submit" value="검색">
        </form>
      </div>

    </div>
  </div>`;
  root.innerHTML = search_temp;
};

export { renderResult, searchForm };

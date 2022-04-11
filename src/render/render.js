const render_result = (champion) => {
  let result_form = `
  <div><p>${champion}}</p></div>
  `;

  root.innerHTML = result_form;
};
//자바스크립트 컨벤션

//let 사용하면 안되는 이유
// 변수 초기화 시점부터 값 할당 이전 까지를 일시적 사각지대(TDZ)라 하며 이의 존재 여부가 var 키워드와 let/const키워드의 차이점이며 var키워드를 사용하면 안되는 이유이기도 하다. 또한 let/const의 차이점은  값의 재할당 가능 여부이다. 재할당이 필요한 변수인 경우에만 한하여 let키워드를 사용하며 이를 제외한 경우에는 const 키워드를 사용하여 의도치 않은 재할당을 방지하여야 한다.
const search_form = () => {
  const root = document.getElementById("root");
  const search_temp = `<div class="flex justify-center h-screen bg-blue-400">
    <div class=" box-content h-1/2 w-1/4 fixed bg-white absolute inset-y-1/4 rounded-lg shadow-xlg">
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

export { render_result, search_form };

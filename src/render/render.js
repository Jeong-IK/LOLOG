const render_result = (champion) => {
  let result_form = `
  <div><p>${champion[0]}}</p></div>
  `;

  root.innerHTML = result_form;
};
//자바스크립트 컨벤션
//let 사용하면 안되는 이유
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

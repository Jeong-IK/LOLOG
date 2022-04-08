const render_result = (userID, champion) => {
  let result_form = `
  <div><p>${userID}</p></div>
  `;

  root.innerHTML = result_form;
};
const search_form = () => {
  //const img_path = require("../../img/Logo/Logo.PNG");

  let search_temp = `<div class="flex justify-center h-screen bg-blue-400">
    <div class=" box-content h-1/2 w-1/4 fixed bg-white absolute inset-y-1/4 rounded-lg shadow-xlg">
      <div class=" box-content h-2/3 w-full grid justify-items-center">
        <img class=" justify-self-center" src="../../img/Logo/Logo.jpg" style="width:200px; height:200px;">
      </div>
      <div class="">
        <input type="text" class="rounded border-2 border-black">
        <button class="border-2 bg-blue-400 rounded-lg"><font> 검 색 </font></button>
      </div>
    </div>
  </div>`;
  root.innerHTML = search_temp;
};
export { render_result, search_form };

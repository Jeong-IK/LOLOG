const render_result = (userID, champion) => {};
const search_form = () => {
  //const img_path = require("../../img/Logo/Logo.PNG");

  let search_temp = `<div class="flex justify-center h-screen justify-center bg-blue-400">
    <div class="box-content h-1/2 w-1/3 fixed bg-white absolute inset-y-1/4 rounded-lg shadow-lg">
        <div>
            <div class="box-content h-2/3 w-full justify-center">
              <img class="object-contain h-min w-min" src="../../img/Logo/Logo.jpg">
            </div>
            <div class="">
              <input type="text" class="rounded border-2 border-black">
              <button class="border-2 bg-gray-300  ">검색</button>
            </div>
        </div>
    </div>
  </div>`;
  root.innerHTML = search_temp;
};
export { render_result, search_form };

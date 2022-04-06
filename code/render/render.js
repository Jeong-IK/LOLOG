const render_result = (userID, champion) => {};
const search_form = () => {
  let search_temp = `<div class="flex justify-center h-screen justify-center bg-blue-400">
    <div class="box-content h-1/2 w-1/3 fixed bg-white absolute inset-y-1/4 rounded-lg shadow-lg">
        <div>
            <div class="box-content h-2/3 w-full justify-center">
            <h1>asd</h1>
            </div>
            <div>
            <input type="text" class=" rounded border-2 border-blue-500">
            <button class="border-4 "></button>
            </div>
        </div>
    </div>
  </div>`;
  root.innerHTML = search_temp;
};
export { render_result, search_form };

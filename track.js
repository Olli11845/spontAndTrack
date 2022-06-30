const testButton = document.querySelector("#testButton");

testButton.addEventListener("click", function test2() {
  console.log("test3");
  loadTodos();
  console.log("test17");
});

function loadTodos() {
  fetch("https://opensky-network.org/api")
    .then((res) => res.json())
    .then((todosFromApi) => {
      todos = todosFromApi;
      console.log(todosFromApi + "test 731");
    });
}

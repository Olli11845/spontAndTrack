loadTodos();

function loadTodos() {
  fetch("https://opensky-network.org/api")
    .then((res) => res.json())
    .then((todosFromApi) => {
      todos = todosFromApi;
      console.log(todosFromApi + "test 731");
    });
}

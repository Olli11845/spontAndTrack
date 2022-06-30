const express = require("express");
const app = express();
const port = 3000;

// app.get /
//   ("/",
//   (req, res) => {
//     res.send('{message: "Hello World" }');
//   });

app.listen(port, () => {
  //console.log("go to http://localhost:3000/");
});

console.log("test222");

/* loadTodos();

function loadTodos() {
  fetch("https://opensky-network.org/api")
    .then((res) => res.json())
    .then((todosFromApi) => {
      todos = todosFromApi;
      console.log(todosFromApi + "test 731");
    });
}
*/

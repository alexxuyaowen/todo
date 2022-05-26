fetch("https://jsonplaceholder.typicode.com/todos/")
.then(res => res.json())
.then(json => {
  const items = document.getElementById("items");

  json.forEach(e => items.innerHTML += e.completed ? `<p><s> ${e.id} ${e.title} </s></p>` : `<p> ${e.id} ${e.title} </p>`);
})

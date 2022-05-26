const items = document.getElementById("items");

fetch("https://jsonplaceholder.typicode.com/todos/")
.then(res => res.json())
.then(json =>json.forEach(e => items.innerHTML += (e.completed ? `<p><span><s>${e.id} ${e.title}</s></span>` : `<p><span>${e.id} ${e.title}</span>`) + `&nbsp;<strong>[User: ${e.userId}]</strong></p>`));

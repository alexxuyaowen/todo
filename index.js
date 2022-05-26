fetch("https://jsonplaceholder.typicode.com/todos/")
.then(res => res.json())
.then(json => {
  const items = document.getElementById("items");

  json.forEach(e => {
    if (!e.completed) items.innerHTML += '<p>' + e.id + "&nbsp" + e.title + '</p>';
    else items.innerHTML += '<p><s>' + e.id + "&nbsp" + e.title + '</s></p>';
  })
})

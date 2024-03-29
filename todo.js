const list = document.querySelector("#list")
const input = document.querySelector("#input")
const form = document.querySelector("#form")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const li = document.createElement("li")

  li.innerHTML = input.value
  li.id = "item-" + list.children.length
  li.dataset.checked = false

  li.style.cursor = "pointer"

  li.addEventListener("click", (e) => {
    e.preventDefault()
    if (li.dataset.checked === "false") {
      li.dataset.checked = true
      e.target.style.color = "red"
      e.target.style.textDecoration = "line-through"
    } else {
      li.dataset.checked = false
      e.target.style.color = "black"
      e.target.style.textDecoration = ""
    }
  })
  list.appendChild(li)
})

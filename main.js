const elForm = document.querySelector(".js-form");
const elInput = document.querySelector(".js-input");
const elList = document.querySelector(".list");



elForm.addEventListener("submit", (evt) => {
  evt.preventDefault()
  let inputVal = Number(elInput.value.trim());

  const item = document.createElement("li");
  item.classList.add("item")
  elList.append(item);
  if (inputVal <= 0) {
    alert("0 dan katta raqam kiriting!")
    item.setAttribute("style", "display:none;")

  } if (isNaN(elInput.value)) {
    alert("Raqam kiriting!")
    item.setAttribute("style", "display:none;")

  }

  if (inputVal > 0) {
    let setNumberId = setInterval(() => {
      inputVal--;
      item.textContent = inputVal;
      if (inputVal == 0) {
        clearInterval(setNumberId);
      }
      if (item.textContent == 0) {
        item.setAttribute("style", "display:none;")
      }

    }, 1000)
  }
})




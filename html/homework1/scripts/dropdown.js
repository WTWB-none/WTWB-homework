var dropDownBtn = document.querySelector(".dropdown-btn");
var dropDownMenu = document.querySelector(".dropdown-content");
var items = document.querySelectorAll(".item");
var selectedItem = document.getElementById("selected-item");

items.forEach((item) => item.addEventListener("click", changeSort));

dropDownBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  dropDownMenu.classList.toggle("open");
}

function closeMenu() {
  dropDownMenu.classList.remove("open");
}

function changeSort(e) {
  var res = selectedItem.innerText;
  selectedItem.innerText = e.target.innerText;
  e.target.innerText = res;
  closeMenu();
}

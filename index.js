const addButton = document.querySelector("#addBtn");
const addModal = document.querySelector("[data-add-modal]");
const close = document.querySelectorAll("#close");
const addClientModal = document.querySelector(".addClientModal");
const updateClientModal = document.querySelector(".updateClientModal");
const updateBtns = document.querySelectorAll("#updateBtn");
const deleteBtns = document.querySelectorAll("#deleteBtn");

console.log(updateBtns);

addButton.addEventListener("click", () => {
  addClientModal.classList.add("active");
});

close.forEach((btn) => {
  btn.addEventListener("click", () => {
    addClientModal.classList.remove("active");
    updateClientModal.classList.remove("active");
  });
});

updateBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    updateClientModal.classList.add("active");
  });
});

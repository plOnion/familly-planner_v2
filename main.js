const monthHeader = [...document.querySelectorAll(".header__month")];
const date = new Date();
const months = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"];
const days = ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"];
let day = date.getDay();
let dayNumb = date.getDate();
let month = date.getMonth();

monthHeader.forEach(item =>{
    item.innerText = `Mamy miesiąc: ${months[month].toUpperCase()}`;
})
// ****************************** MODAL
const dayTasks = [...document.querySelectorAll(".day__task")];
const members = [...document.querySelectorAll(".member")];
const modal = document.querySelector(".modal");
const modalBtn = document.querySelector(".modal input[type=submit");
const modalInput = document.querySelector(".modal input[name=newtask");

const newTask = () =>{
    let active = document.querySelector(".active");
        active.textContent += " " + modalInput.value;
        closeModal();
}

const closeModal = () =>{
    modalInput.value = "";
    modal.style.visibility = "hidden";
}

modalInput.addEventListener("change", newTask);
modalBtn.addEventListener("click", closeModal);

members.forEach((item) =>{
    item.addEventListener("click", (e)=>{
        e.target.classList.add("active");
        e.preventDefault;
        modal.style.visibility = "visible";
    })
    
})
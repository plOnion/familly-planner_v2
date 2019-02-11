const monthHeader = [...document.querySelectorAll(".header__month")];
const daysTable = [...document.querySelectorAll("#month .day")];
const date = new Date();
const months = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"];
const days = ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"];
let day = date.getDay();
let dayNumb = date.getDate();
let month = date.getMonth();


// ******* number of days in actual month
const daysInMonth = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();

// *****************first day of the month
let firstMonthDay = (new Date(date.getFullYear(), date.getMonth(), 1)).getDay();

// ************ ACTUAL MONTH
const actualMonth = () =>{
    monthHeader.forEach(item =>{
        item.innerText = `Mamy miesiąc: ${months[month].toUpperCase()}`;
    })
}

actualMonth();
// ************* TODAY
const today = () =>{
    const weekDays = [...document.querySelectorAll(".week .day")];
    if (day === 0) {day = 7}
        weekDays[day-1].classList.add("today");
        daysTable[dayNumb+firstMonthDay-2].classList.add("today");
}

today();

// ****************************** MODAL
// const dayTasks = [...document.querySelectorAll(".day__task")];

const members = [...document.querySelectorAll(".member")];
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal input[type=reset");
const modalInput = document.querySelector(".modal input[name=newtask");

const newTask = () =>{
    let active = document.querySelector(".active");
        active.textContent = modalInput.value;
        closeModal();
    }

const closeModal = () =>{
    modalInput.value = "";
    modal.style.visibility = "hidden";
    let active = document.querySelector(".active");
        active.classList.remove("active");
}

modalInput.addEventListener("change", newTask);
modalClose.addEventListener("click", closeModal);

members.forEach((item) =>{
    item.addEventListener("click", (e)=>{
        e.target.classList.add("active");
        e.preventDefault;
        modal.style.visibility = "visible";
    })
})

// ****************

let number = 1;
for (let i=firstMonthDay-1; i<daysInMonth+firstMonthDay-1; i++){
    daysTable[i].dataset.number = number++;
    daysTable[i].innerHTML = `XXX<div class="square">${daysTable[i].dataset.number}<div>`;
    daysTable[i].classList.contains("square") ? daysTable[i].innerHTML = `<div class='xxx'>z</div>` : number;
}

// ********************kopiowanie zdarzeń

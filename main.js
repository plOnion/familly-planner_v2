const monthHeader = [...document.querySelectorAll(".header__month")];
const daysTable = [...document.querySelectorAll("#month .day")];
const firstRow = [...document.querySelectorAll('#month [data-row="first"]')];
const secondRow = [...document.querySelectorAll('#month [data-row="second"]')];
const thirdRow = [...document.querySelectorAll('#month [data-row="third"]')];
const fourthRow = [...document.querySelectorAll('#month [data-row="fourth"]')];
const fifthRow = [...document.querySelectorAll('#month [data-row="fifth"]')];
const sixthRow = [...document.querySelectorAll('#month [data-row="sixth"]')];

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
const modalClose = document.querySelector(".modal input[type=reset]");
const modalInput = document.querySelector(".modal input[name=newtask]");

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
        updatePlaner();
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

// ****************numerowanie dni miesiaca

let number = 1;
for (let i=firstMonthDay-1; i<daysInMonth+firstMonthDay-1; i++){
    daysTable[i].dataset.number = number++;
    daysTable[i].innerHTML = `<div class="square">${daysTable[i].dataset.number}<div>`;
    daysTable[i].classList.contains("square") ? daysTable[i].innerHTML = `<div class='xxx'>z</div>` : number;
}

// ********************kopiowanie zdarzeń
const todayTasks = document.querySelector(".today .day__task").innerHTML;
const weekTask = [...document.querySelectorAll(".day__task")];
// const xxxxx = document.querySelector(".day__task");
// [...document.querySelectorAll(".today")][1].innerHTML +=todayTasks;

let actualWeek = ([...document.querySelectorAll(".today")][1].dataset.row);
let actualWeekRow = [...document.querySelectorAll('#month [data-row="'+actualWeek+'"]')];

// console.log(daysTable);
// console.log(actualWeekRow);
// console.log(weekTask);
// console.log(actualWeek);

const updatePlaner = () =>{ 
    actualWeekRow.forEach((item, index) =>{
    item.innerHTML = weekTask[index].innerHTML;
})
}

updatePlaner();

// // const weekCreation = () =>{
//     // number = 1;
//     // let weeks = [];
//     // for (let i=0; i<52; i++){
//     //     [week+i]= [];
//     // }
//     let weeks = [];
//     for (var i = 0; i < 6; ++i) {
//     weeks[i] = [];
// }

// weeks[3] = weekTask;
// // console.log(weeks[actualWeek]);
// // }



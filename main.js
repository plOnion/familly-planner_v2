const monthHeader = [...document.querySelectorAll(".header__month")];

monthHeader.forEach(item =>{
    let date = new Date();
    let month = date.getMonth();

    switch (month){
        case 0:
        month = "Styczeń";
        break;
        case 1:
        month = "Luty";
        break;
        case 2:
        month = "Marzec";
        break;
        case 3:
        month = "Kwiecień";
        break;
        case 4:
        month = "Maj";
        break;
        case 5:
        month = "Czerwiec";
        break;
        case 6:
        month = "Lipiec";
        break;
        case 7:
        month = "Sierpień";
        break;
        case 8:
        month = "Wrzesień";
        break;
        case 9:
        month = "Październik";
        break;
        case 10:
        month = "Listopad";
        break;
        case 11:
        month = "Grudzień";
        break;

    }
    item.innerText = `Mamy miesiąc: ${month}`
})

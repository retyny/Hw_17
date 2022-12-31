const database = [];
let temp = '';

function saveTravel(){
    const customer = {
        fromCity:document.getElementById("city_1").value,
        toCity:document.getElementById("city_2").value,
        budget:document.getElementById("budget_").value,
        dateStart:document.getElementById("date_start").value,
        dateEnd:document.getElementById("date_end").value,
        persons:document.getElementById("persons_").value,
        methodTravel:document.getElementById("method_travel").value,
    };

    // Создание ключа из Покупателя (String)
    temp = JSON.stringify(customer);
    // Запушивание строки в Базу Данных
    database.push(temp);
    // Сохранение всех билетов в localStorage
    localStorage.setItem('customers', JSON.stringify(database));
  let customersLocal = localStorage.getItem('customers');
    // Перевод строки в массив
    const raw = JSON.parse(customersLocal)

 if (raw.fromCity === "" || raw.toCity === ""
   || raw.fromCity === " " || raw.toCity === " "
   || raw.fromCity === "  " || raw.toCity === "  ") {
   alert("Важные поля не заполнены!");
 } else {
     // Родительский элемент
     const rightUl = document.getElementById("right_ul");
     const firstLi = rightUl.getElementsByTagName('LI')[0];
     // Новый элемент
     const newRightUlElement = document.createElement('LI')
     newRightUlElement.className = 'elementHistory';
     //Вставляем элемент
     newRightUlElement.innerHTML = `
<h3>From ${raw.fromCity} to ${raw.toCity}</h3> <h4>Expected budget:${raw.budget} ILS</h4>
<h4>${raw.dateStart} - ${raw.dateEnd} | ${raw.persons} Persons |${raw.methodTravel} </h4>
`
     rightUl.insertBefore(newRightUlElement, firstLi);
 }
}



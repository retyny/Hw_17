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

    if (customer.fromCity === "" || customer.toCity === ""
        || customer.fromCity === " " || customer.toCity === " "
        || customer.fromCity === "  " || customer.toCity === "  ") {
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
<h3>From ${customer.fromCity} to ${customer.toCity}</h3> <h4>Expected budget:${customer.budget} ILS</h4>
<h4>${customer.dateStart} - ${customer.dateEnd} | ${customer.persons} Persons |${customer.methodTravel} </h4>
`
        rightUl.insertBefore(newRightUlElement, firstLi);
    }


    function storage() {
        // Создание ключа из Покупателя (String)
        temp = JSON.stringify(customer);
        // Запушивание строки в Базу Данных
        database.push(temp);
        // Сохранение всех билетов в localStorage
        localStorage.setItem('customers', JSON.stringify(database));
        console.log(database);
        for (let i = 0; i < database.length; i++){
            const raw = JSON.parse(database[i]);
            console.log(raw);
        }

    }
    storage();
}




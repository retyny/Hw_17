
const storageVal = localStorage.getItem("customers");
const database = storageVal?JSON.parse(storageVal):[];

    for (let i = 0; i < database.length; i++) {
        if(database.length >= 0) {
            console.log(database);
            JSON.parse(database[i]);
            const rightUl = document.getElementById("right_ul");
            const firstLi = rightUl.getElementsByTagName('LI')[0];
            // Новый элемент
            const newRightUlElement = document.createElement('LI')
            newRightUlElement.className = 'elementHistory';
            //Вставляем элемент
            newRightUlElement.innerHTML = `
<h3>From ${JSON.parse(database[i]).fromCity} to ${JSON.parse(database[i]).toCity}</h3> <h4>Expected budget:${JSON.parse(database[i]).budget} ILS</h4>
<h4>${JSON.parse(database[i]).dateStart} - ${JSON.parse(database[i]).dateEnd} | ${JSON.parse(database[i]).persons} Persons |${JSON.parse(database[i]).methodTravel} </h4>
`
            rightUl.insertBefore(newRightUlElement, firstLi);
            console.log(database[i]);
        }
    }


    function customerCreate() {
    const customer = {
        fromCity:document.getElementById("city_1").value,
        toCity:document.getElementById("city_2").value,
        budget:document.getElementById("budget_").value,
        dateStart:document.getElementById("date_start").value,
        dateEnd:document.getElementById("date_end").value,
        persons:document.getElementById("persons_").value,
        methodTravel:document.getElementById("method_travel").value,
    };
    return customer;
}


function divCreate() {
        customer = customerCreate();
        if (customer.fromCity === "" || customer.toCity === ""
            || customer.fromCity === " " || customer.toCity === " "
            || customer.fromCity === "  " || customer.toCity === "  "
            || customer.fromCity === "   " || customer.toCity === "   ") {
            alert('Заполните важные поля!');
            return 0;
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

}

function saveTravel() {
    if (divCreate() === 0){
        return 0;
        } else {
        // Перевод customer в стринг и пуш в базу данных
        database.push(JSON.stringify(customer = customerCreate()));
        // Сохранение всех билетов в localStorage
        localStorage.setItem('customers', JSON.stringify(database));
        }
    }





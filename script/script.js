
const storageVal = localStorage.getItem("customers");
const database = storageVal?JSON.parse(storageVal):[]

        saveTravel = () => {
            location.reload();
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
                    || customer.fromCity === "  " || customer.toCity === "  "
                    || customer.fromCity === "   " || customer.toCity === "   ") {
                    alert('Заполните важные поля!');
                    return 0;
                } else {
                    // Перевод customer в стринг и пуш в базу данных
                    database.push(JSON.stringify(customer));
                    // Сохранение всех билетов в localStorage
                    localStorage.setItem('customers', JSON.stringify(database));
                    render();
                }
        }


        render = () => {
            database.map((value, index) => {
            if(value) {
            const rightUl = document.getElementById("right_ul");
            const firstLi = rightUl.getElementsByTagName('LI')[0];
            // Новый элемент
            const newRightElement = document.createElement('LI')
            newRightElement.className = 'elementHistory';
            //Вставляем элемент
            newRightElement.innerHTML =
                `
                <div class="item2">
            <h3>From ${JSON.parse(value).fromCity} to ${JSON.parse(value).toCity}</h3> <h4>Expected budget:${JSON.parse(value).budget} ILS</h4>
            <h4>${JSON.parse(value).dateStart} - ${JSON.parse(value).dateEnd} | ${JSON.parse(value).persons} Persons |${JSON.parse(value).methodTravel} </h4>
                </div>    
                <li class="item1" id="${index}">
                    <button class="delete" id="${index}">del</button>
                    <button class="edit" id="${index}">2</button>
                    <button class="details" id="${index}">3</button>
                </li>    
                `
            rightUl.insertBefore(newRightElement, firstLi);
            setUpIcons();
        }
    });
}



    const setUpIcons = () => {
    document.querySelectorAll('.delete').forEach(value => {
        value.addEventListener('click', deleteTravel);
    });
    document.querySelectorAll('.edit').forEach(value => {
        value.addEventListener('click', editTravel);
    });
    document.querySelectorAll('.details').forEach(value => {
        value.addEventListener('click', showTravelDetails);
    })
}
    const deleteTravel = value => {
    const id = Number(value.target.getAttribute('id'));
        database.splice(id, 1);
        localStorage.setItem('customers', JSON.stringify(database));
        location.reload();
}
    const editTravel = value =>  {
    const id = Number(value.target.getAttribute('id'));
    console.log("edit - "+id);
}
    const showTravelDetails = value => {
    const id = Number(value.target.getAttribute('id'));
    console.log("details - "+id);
}

render();
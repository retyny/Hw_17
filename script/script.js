
const storageVal = localStorage.getItem("customers");
const database = storageVal?JSON.parse(storageVal):[]

        saveTravelModal = () => {
            const customer_modal = {
                fromCity:document.getElementById("city_1_modal").value,
                toCity:document.getElementById("city_2_modal").value,
                budget:document.getElementById("budget_modal").value,
                dateStart:document.getElementById("date_start").value,
                dateEnd:document.getElementById("date_end_modal").value,
                persons:document.getElementById("persons_modal").value,
                methodTravel:document.getElementById("method_travel_modal").value,
            };
                // Перевод customer в стринг и пуш в базу данных
                database.push(JSON.stringify(customer_modal));
                // Сохранение всех билетов в localStorage
                localStorage.setItem('customers', JSON.stringify(database));
            location.reload();
        }

        saveNewModal = () => {
        const modal = document.createElement('div');
        modal.classList.add('wrapper_modal');
        modal.insertAdjacentHTML('afterbegin',`
            <div class="modal">
            <span class="modal_close">&times;</span>
            <h1> Edit:</h1>
            <input type="text" maxlength="16" class="place_modal"  id="city_1_modal" placeholder="from City"> <br>
            <input type="text" maxlength="16" class="place_modal" id="city_2_modal" placeholder="to City"> <br>
            <input type="text" maxlength="16" class="place_modal" id="budget_modal" placeholder="Budget">
            <h3>Date start:</h3>
            <input  type="date" class="place_modal" id="date_start_modal">
            <h3>Date end:</h3>
            <input  type="date" class="place_modal" id="date_end_modal">
            <h3>Persons:</h3>
            <input type="number" max="12" class="place_modal" id="persons_modal">
            <h3>Maint transfer type</h3>
            <select id="method_travel_modal" class="place_modal">
                <option>--</option>
                <option>Private car</option>
                <option>Railway</option>
                <option>Fly</option>
                <option>Rent car</option>
                <option>Taxi</option>
                <option>Bus</option>
            </select> <br>
            <button id="save_travel_modal" class="btn_modal" onclick="saveTravelModal()">Save Travel</button>
        </div>
`)
            document.body.appendChild(modal);
            return modal;
        }

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
                    <button class="edit" id="${index}">edit</button>
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
    saveNewModal();
    console.log(saveNewModal());
}
    const showTravelDetails = value => {
    const id = Number(value.target.getAttribute('id'));
    console.log("details - "+id);
}

render();


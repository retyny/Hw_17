
function saveTravel(){
    const database = {
        fromCity:document.getElementById("city_1").value,
        toCity:document.getElementById("city_2").value,
        budget:document.getElementById("budget_").value,
        dateStart:document.getElementById("date_start").value,
        dateEnd:document.getElementById("date_end").value,
        persons:document.getElementById("persons_").value,
        methodTravel:document.getElementById("method_travel").value,
    };

    console.log(database.fromCity);

 if (database.fromCity === "" || database.toCity === ""
     || database.fromCity === " " || database.toCity === " "
     || database.fromCity === "  " || database.toCity === "  ") {
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
<h3>From ${database.fromCity} to ${database.toCity}</h3> <h4>Expected budget:${database.budget} ILS</h4>
<h4>${database.dateStart} - ${database.dateEnd} | ${database.persons} Persons |${database.methodTravel} </h4>
`
     rightUl.insertBefore(newRightUlElement, firstLi)
 }
}


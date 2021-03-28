// Assign data.js to a variable, and select the button and form
let ufoData = data,
    button = d3.select("#filter-btn"),
    form = d3.select(".filters");

const tbody = d3.select("tbody");

// Event handler function for the form
const runEnter = () => {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    //Clear tbody html in index.html
    tbody.html("");

    //Grab all elements and values from the form
    let dateElement = d3.select("#datetime"),
        dateValue = dateElement.property("value");

    console.log(dateValue);

    let cityElement = d3.select("#city"),
        cityValue = cityElement.property("value");

    console.log(cityValue);

    let stateElement = d3.select("#state"),
        stateValue = stateElement.property("value");

    console.log(stateValue);

    let countryElement = d3.select("#country"),
        countryValue = countryElement.property("value");

    console.log(countryValue);

    let shapeElement = d3.select("#shape"),
        shapeValue = shapeElement.property("value");

    console.log(shapeValue)

    //filter date down to user specified metrics
    if (dateValue !== "") {
        ufoData = ufoData.filter(sighting => sighting.datetime === dateValue);
    }

    if (cityValue !== "") {
        ufoData = ufoData.filter(sighting => sighting.city === cityValue);
    }

    if (stateValue !== "") {
        ufoData = ufoData.filter(sighting => sighting.state === stateValue);
    }

    if (countryValue !== "") {
        ufoData = ufoData.filter(sighting => sighting.country === countryValue);
    }

    if (shapeValue !== "") {
        ufoData = ufoData.filter(sighting => sighting.shape === shapeValue);
    }

    console.log(ufoData);

    //Append filtered data to table in the html code
    ufoData.forEach((sighting) => {
        let row = tbody.append("tr");
        Object.values(sighting).forEach(value => {
            let cell = row.append("td");
            cell.text(value); 
        });
     });
     
    //Reset ufoData back to original data set for next search
    ufoData = data
};

button.on("click", runEnter);
form.on("submit",runEnter);
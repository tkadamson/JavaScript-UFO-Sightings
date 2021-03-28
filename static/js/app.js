// Assign data.js to a variable, and select the button and form
let ufoData = data,
    button = d3.select("#filter-btn"),
    form = d3.select(".filters");

// Event handler function for the form
const runEnter = () => {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    //Grab date from the form
    let dateElement = d3.select("#datetime"),
        dateValue = dateElement.property("value");

    console.log(dateValue)

    let filteredData = ufoData.filter(sighting => sighting.datetime === dateValue);

    console.log(filteredData);

}

button.on("click", runEnter);
form.on("submit",runEnter);
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
    
    //Grab date from the form
    let dateElement = d3.select("#datetime"),
        dateValue = dateElement.property("value");

    console.log(dateValue)

    //filter date down to user specified date
    let filteredData = ufoData.filter(sighting => sighting.datetime === dateValue);

    console.log(filteredData);

    //Append filtered data to table in the html code
    filteredData.forEach((sighting) => {
        let row = tbody.append("tr");
        Object.values(sighting).forEach(value => {
            let cell = row.append("td");
            cell.text(value); 
        });
     });
};

button.on("click", runEnter);
form.on("submit",runEnter);
var $tbody = document.querySelector("tbody");
var $datetimeinput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#search");


//d3.event.preventDefault();
var filteredAddresses = data

// renderTable renders the filteredAddresses to the tbody
function renderTable() {
      $tbody.innerHTML = "";
    for (var i = 0; i < filteredAddresses.length; i++) {
      // Get the current address object and its fields
      var address = filteredAddresses[i];
      var fields = Object.keys(address);
      // Create a new row in the tbody, set the index to be i + startingIndex
      var $row = $tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        // For every field in the address object, create a new cell and set its inner text to be the current value at the current address's field
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = address[field];
      }
    }
}
function handleSearchButtonClick() {
  d3.event.preventDefault();
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    //var filterState = $stateInput.value.trim().toLowerCase();
   // var filterCity = $cityInput.value.trim().toLowerCase();
    var filterdatetime = $datetimeinput.value.trim().toLowerCase();
   // var filterCity = $cityInput.value.trim().toLowerCase();
    // Set filteredAddresses to an array of all addresses who's "state" matches the filter
    filteredAddresses = data.filter(function(address) {
     // var addressState = address.state.substring(0, filterState.length).toLowerCase();
        var filterdatetimeinput = address.datetime.substring(0, filterdatetime.length).toLowerCase();
      //if (filterdatetime === filterState && addressCity === filterCity) {
      //  return true;
     
          // return false;
        return filterdatetimeinput === filterdatetime
    });
    renderTable();
}
// Add an event listener to the $searchButton, call handleSearchButtonClick when clicked
d3.selectAll("#search").on("click", handleSearchButtonClick);

renderTable();


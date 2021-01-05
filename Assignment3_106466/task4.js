var cityNames = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCitiesList =[];
document.write("Cities List </br>")
document.write(cityNames + "</br>");
document.write("Selected Cities List </br>")
selectedCitiesList = cityNames.slice(2,4);
document.write(selectedCitiesList);
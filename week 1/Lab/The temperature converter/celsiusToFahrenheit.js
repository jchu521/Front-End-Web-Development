function celsiusToFahrenheit() {
    var celsius = prompt("Enter celsius temperature");
    var fahrenheit = celsius * 9 / 5 + 32;
    document.write(celsius+" C is F" + fahrenheit);
}
function fahrenheitToCelsius() {
    var fahrenheit = prompt("Enter fahrenheit temperature");
    var celsius = (fahrenheit-32)/1.8;
    document.write(fahrenheit + " F is C" + celsius);
}

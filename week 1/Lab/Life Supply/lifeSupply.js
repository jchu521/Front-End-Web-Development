var maxAge = 99;
var perDay = 3;
function total() {
    var age = prompt("Enter your age");
    var total = (maxAge - age) * perDay * 365;
    document.write(("You will need " + total + " to last you until the ripe old age of " + maxAge));
    //alert("You will need "+total+ " to last you until the ripe old age of " + maxAge);
}
window.onload = total;
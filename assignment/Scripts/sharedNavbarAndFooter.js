window.onload = function () {
    var xml;
    //navbar
    var oe = document.getElementById("navbar");

    xml = new XMLHttpRequest();
    //why not ..//html/shared/navbar.html
    xml.open("GET", "/html/shared/navbar.html", false);
    xml.send();
    oe.innerHTML = xml.responseText;
    //footer
    oe = document.getElementById("footer");
    xml.open("GET", "/html/shared/footer.html", false);
    xml.send();
    oe.innerHTML = xml.responseText;
    /*navbar active*/ 
    //get the name of the html page
    var path = window.location.pathname;
    //var page = path.split("/").pop();

    //type obj ->str
    var pageName = path.split("/").pop().split(".html").slice(0, 1);

    /*navbar active*/

    $("#" + pageName).addClass("active");



}
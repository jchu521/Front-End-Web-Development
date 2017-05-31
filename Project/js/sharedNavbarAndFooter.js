window.onload = function () {
    var xml;
    //navbar
    var oe = document.getElementById("navbar");

    xml = new XMLHttpRequest();
    xml.open("GET", "../html/shared/navbar.html", false);
    xml.send();
    oe.innerHTML = xml.responseText;
    //footer
    oe = document.getElementById("footer");
    xml.open("GET", "../html/shared/footer.html", false);
    xml.send();
    oe.innerHTML = xml.responseText;
    /*navbar active*/ 
    //get the name of the html page
    var path = window.location.pathname;
    alert(path);
    var page = path.split("/").pop();
    //alert(page);
    if (page == "index.html") {
        $("#home").addClass("active");
    }else if(page == "tourism.html"){
        $("#tourism").addClass("active");
    } else if (page == "cuisine.html") {
        $("#cuisine").addClass("active");
    } else if (page == "snacks.html") {
        $("#snacks").addClass("active");
    }
}
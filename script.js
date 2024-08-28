
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-links");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemanu = document.getElementById("sidemanu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
   sidemenu.style.right = "-200px";
}

var array = JSON.parse(localStorage.getItem('data')) || [];

function savedata(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name == "") {
        document.getElementById("Message1").innerHTML = "**Please Fill The Name";
    } else {
        document.getElementById("Message1").innerHTML = "";
    }

    if (email == "") {
        document.getElementById("Message2").innerHTML = "**Please Fill The email";
    } else {
        document.getElementById("Message2").innerHTML = "";
    }

    if (message == "") {
        document.getElementById("Message3").innerHTML = "**Please Fill The message";
    } else {
        document.getElementById("Message3").innerHTML = "";
    }

    if (name != "" && email != "" && message != "") {
        var obj = {
            Name: name,
            Email: email,
            Message: message
        };

        array.push(obj);
        localStorage.setItem('data', JSON.stringify(array));
        document.getElementById("myform").reset();
        table();
    }
}

function table() {
    var html = "";
    for (var i = 0; i < array.length; i++) {
        html += "<tr><td>" + (i + 1) +
            "</td><td>" + array[i].Name +
            "</td><td>" + array[i].Email +
            "</td><td>" + array[i].Message +
            "</td></tr>";
    }
    document.getElementById("store").innerHTML = html;
}

window.onload = function() {
    table();
}
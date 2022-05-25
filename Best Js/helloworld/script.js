function set_size(size) {

    show_size();
}

function init() {
    show_size();
    show_coffees();
    show_map();
}

function show_size() {

}

function find_students() {
    var search = document.getElementById("cake_search_box");
    var els = document.querySelectorAll("#coffees");

    search.addEventListener("keyup", function() {
        Array.prototype.forEach.call(els, function(el) {
            var values = search.value.split(" ");
            var display = true;
            for (var i = 0; i < values.length; i++) {
                if (el.textContent.trim().indexOf(values[i]) === -1) display = false;
            }

            el.style.display = display ? "block" : "none";
        });
    });
}


function show_coffees() {
    var coffee = "";
    var coffees = [
        { name: "Cappuccino", caffeine: 173, decafe: false },
        { name: "Turkish Coffee", caffeine: 300, decafe: false },
        { name: "Decaf Nescafe", caffeine: 10, decafe: true },
        { name: "Arabic Coffee", caffeine: 257, decafe: false },
        { name: "Instant Coffee", caffeine: 150, decafe: false },
    ];
    var table = document.getElementById("coffees");
    for (var i = 0; i < coffees.length; i++) {
        var data = coffees[i];
        coffee += "<tr>";
        coffee += "<td>" + (i + 1) + "</td>";
        coffee += "<td>" + data.name + "</td>";
        coffee += `<td>`

        if (data.caffeine >= 250) {
            coffee += `<span  style="background-color: black">` + data.caffeine + `</span>`;
        } else if (data.caffeine >= 200) {
            coffee += `<span  style="background-color: brown;">` + data.caffeine + `</span>`;
        } else if (data.caffeine >= 150) {
            coffee += `<span  style="background-color: orange;">` + data.caffeine + `</span>`;
        } else if (data.caffeine >= 100) {
            coffee += `<span  style="background-color: yellow;">` + data.caffeine + `</span>`;
        } else {
            coffee += `<span  style="background-color: lightyellow;">` + data.caffeine + `</span>`;
        }

        `</td>`;
        coffee += "<td>"

        if (data.decafe == true) {
            coffee += "&#128077";
        } else {
            coffee += "";
        }


        "</td>";
        coffee += "</tr>";
    }
    table.innerHTML = coffee;
}

function show_map() {



}

function validate() {
    var Customername = document.getElementById("name").value;
    var coffee = document.getElementById("coffee").value;
    var caffeine = document.getElementById("caffeine").value;

    if (Customername == "" && coffee == "") {
        return false;
    } else if (Customername.length > 10) {
        alert("Customer Name is should be less than 10 characters");
    } else if (coffee == "none") {
        alert("Coffee cannot be none");
    } else if (caffeine == "1" && caffeine == "500") {
        alert("PleasE select a value between 1 and 500");
    } else {
        if (coffee == "decafe_nescafe") {

            if (caffeine == "0" || caffeine == "Z" || caffeine == "ZERO") {
                return true;
            } else {
                alert(
                    "Coffee is Decafe, so caffeine should be 0 or Z or  ZERO"
                );
                return false;
            }
        }
    }
}
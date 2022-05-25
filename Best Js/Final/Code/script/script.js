function set_color(color) {
    var colors = color;
    localStorage.setItem(colors, color);
    document.body.style.color = colors;
}

function init() {
    show_color();
    show_students();
    show_map();
}

function show_color() {
    var head = document.getElementById("head");
    var color = localStorage.getItem("color");
    if (color == null) {
        color = "black";
    }
    head.style.color = color;
}

function show_students() {
    var student = "";
    var students = [
        { name: "Ahmed Salem", GPA: 3.99 },
        { name: "Mona Zaki", GPA: 4.0 },
        { name: "Samir Khaled", GPA: 2.5 },
        { name: "Amer Mohammed", GPA: 1.5 },
        { name: "Malik Sama", GPA: 3.5 },
    ];

    //   let GPA = [];

    //   }
    var table = document.getElementById("students");
    for (var i = 0; i < students.length; i++) {
        var data = students[i];
        student += "<tr>";
        student += "<td>" + (i + 1) + "</td>";
        student += "<td>" + data.name + "</td>";
        student += `<td class="bg-GPA">`
        if (data.GPA >= 3.5) {
            student += `<span class="bg-GPA" style="background-color: green;">` + data.GPA + `</span>`;
        } else if (data.GPA >= 2.5) {
            student += `<span class="bg-GPA" style="background-color: yellow;">` + data.GPA + `</span>`;
        } else {
            student += `<span class="bg-GPA" style="background-color: red;">` + data.GPA + `</span>`;
        }

        `</td>`;

        student += "<td>" + " " + "</td>";

        student += "</tr>";
    }
    // if (data.GPA >= 3.0) {
    //     bg_GPA.style.BackgroundColor = "green";
    // } else if (data.GPA < 3.0 && data.GPA >= 2.5) {
    //     bg_GPA.style.BackgroundColor = "yellow";
    // } else if (data.GPA < 2.5 && data.GPA >= 2.0) {
    //     bg_GPA.style.BackgroundColor = "orange";
    // } else {
    //     bg_GPA.style.BackgroundColor = "red";
    // }

    $("#students").html(student);
}

function find_students() {
    var search = document.getElementById("student_search_box");
    var els = document.querySelectorAll("#students");

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

function show_map() {
    var map = L.map("map").setView([24.4539, 54.3773], 13);
    L.tileLayer(
        "https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=x39FFxtuFCn0rmNcdVtT", {
            tileSize: 512,
            zoomOffset: -1,
            minZoom: 1,
            attribution: '\u003ca href="https://www.maptiler.com/copyright/" target="_blank"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href="https://www.openstreetmap.org/copyright" target="_blank"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e',
            crossOrigin: true,
        }
    ).addTo(map);
    var marker = L.marker([24.470176, 54.351907]).addTo(map);
    marker.bindPopup("<b>Success School 1</b>").openPopup();

    var marker = L.marker([24.482808, 54.3842233]).addTo(map);
    marker.bindPopup("<b>Success School 2</b>").openPopup();
}

function validate() {
    var name = document.getElementById("name").value;
    var course = document.getElementById("course").value;
    var grade = document.getElementById("grade").value;

    if (name == "" && course == "") {
        return false;
    } else if (name.length > 10) {
        alert("Name is too long It must be less than 10 characters");
    } else if (course == "None") {
        alert("Please select a course");
    } else if (grade == "1" && grad == "100") {
        alert("Please select a grade");
    } else {
        if (course == "internship") {
            // “P”, “PASS”, “F”, or “FAIL”.
            if (grade == "P" || grade == "PASS" || grade == "F" || grade == "FAIL") {
                return true;
            } else {
                alert(
                    "Please select a if the grade is internship  P or  PASS or  F  or FAIL"
                );
                return false;
            }
        }
    }
}
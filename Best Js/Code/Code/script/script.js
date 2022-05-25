function set_color(color) {

}

function init() {
    show_color();
    show_students();
    show_map();
}

function show_color() {

}


function show_students() {

}

function find_students() {
    var search = document.getElementById("student_search_box");
    var els = document.querySelectorAll("#students");

    search.addEventListener("keyup", function() {
        Array.prototype.forEach.call(els, function(el) {
            var values = search.value.split(' ');
            var display = true;
            for (var i = 0; i < values.length; i++) {
                if (el.textContent.trim().indexOf(values[i]) === -1)
                    display = false;
            }

            el.style.display = display ? 'block' : 'none';
        });
    });

}

function show_map() {



}

function validate() {
    var name = document.getElementById("name").value;
    var course = document.getElementById('course').value
    var grade = document.getElementById('grade').value;

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
                alert("Please select a if the grade is internship  P or  PASS or  F  or FAIL");
                return false;
            }

        }



    }
}
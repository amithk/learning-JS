var counter = 1;

function toggleOtherReligionTextbox() {
    var religion_text_box = document.getElementById("rtb");
    var other_religion_radio = document.getElementById("ro");
    if (other_religion_radio.checked) {
        religion_text_box.classList.remove('hide_religion')
        religion_text_box.classList.add('show_religion')
    } else {
        religion_text_box.classList.remove('show_religion')
        religion_text_box.classList.add('hide_religion')
    }
}

function AddMore() {
    var email_div = document.getElementById("ediv");
    var new_div = document.createElement("div");
    new_div.setAttribute("class", "bottom_margin")
    var element = document.createElement("input");
    element.setAttribute("type", "text");
    ++counter;
    str_counter = counter.toString();
    element_name = "email_input_".concat(str_counter);
    element.setAttribute("name", element_name);
    new_div.appendChild(element);
    ediv.appendChild(new_div);
}

function ValidateInput(nameStr, birthdateStr, religionStr, EmailStrs) {
    var return_val=true;
    return return_val;
}

function SubmitFormContents() {
    var nameStr = document.getElementById("iN").value;
    var birthdateStr = document.getElementById("iBD").value;
    var religionStr;
    if (document.getElementById("rh").checked) {
        religionStr = "Hindu";
    } else if (document.getElementById("rm").checked) {
        religionStr = "Muslim";
    } else {
        religionStr = document.getElementById("ro").value;
    }
    var i;
    var EmailStrs = [];
    for (i=1; i <= counter; i++) {
        ename = "email_input_".concat(i.toString())
        EmailStrs.push(document.getElementsByName(ename)[0].value)
    }
    
    isValid = ValidateInput(nameStr, birthdateStr, religionStr, EmailStrs);
    if (!isValid) {
        alert("Invalid input")
    } else {
        var json_post = {};
        json_post.name = nameStr;
        json_post.birthdate = birthdateStr;
        json_post.religion = religionStr;
        json_post.email = EmailStrs;
        json_string = JSON.stringify(json_post);
        console.log(json_string);
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "myurl");
        xhttp.send(json_string);
    }
    // e.preventDefault();
}

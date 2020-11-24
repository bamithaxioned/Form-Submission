let arr = [];

// Grabing Button
var submitBtn = document.getElementById("Submit");
var cancelBtn = document.getElementById("cancel");


// Functioning Submit Button
submitBtn.addEventListener("click", submit);

function submit(e) {
    e.preventDefault();

    let form = document.getElementsByTagName("form")[0];
    let first_name = document.getElementById("firstName").value;
    let last_name = document.getElementById("lastName").value;
    let gender_data = document.querySelector("input[type='radio']:checked");
    if (gender_data) {
        var gender_value = gender_data.value;
    }
    let address_data = document.getElementById("address").value;
    let terms_box = document.querySelector("#terms:checked");

    let form_data = {
        name: first_name,
        surname: last_name,
        gender: gender_value,
        address: address_data,
    };

    if (!(form_data.name) || !(form_data.surname) || !(form_data.gender) || !(form_data.address) || !(terms_box)) {
        alert("Please Fill all the Details Belows..!")
    } else {
        arr.push(form_data);
        console.log(arr);
        display();
        form.reset();
    }

}

// Functioning Cancel Button
cancelBtn.addEventListener("click", cancel);

var cancel = () => {
    form.reset();
}


let displayContainer = document.getElementsByClassName("display")[0];
// Display Function
function display() {

    // Grabbing Display 

    // Creating Ul
    let newUl = document.createElement("ul");
    newUl.setAttribute("class", "display-box");

    // Creating Li
    for (key in arr[arr.length - 1]) {
        let newli = document.createElement("li");
        newli.textContent = arr[arr.length - 1][key];
        newUl.appendChild(newli);
    }

    // Edit List
    let editli = document.createElement("li");
    let editAnchor = document.createElement("a");
    editAnchor.setAttribute("title", "Edit");
    editAnchor.setAttribute("class", "btn");
    editAnchor.setAttribute("href", "#FIXME")
    editAnchor.textContent = "Edit";
    editli.appendChild(editAnchor);
    newUl.appendChild(editli)

    // Delete List
    let deleteli = document.createElement("li");
    let deleteAnchor = document.createElement("a");
    deleteAnchor.setAttribute("title", "Delete");
    deleteAnchor.setAttribute("class", "btn");
    deleteAnchor.setAttribute("href", "#FIXME");
    deleteAnchor.textContent = "Delete";
    deleteli.appendChild(deleteAnchor);
    newUl.appendChild(deleteli)

    deleteli.addEventListener("click", deleteUl);

    // Adding Ul to HTML dynamically
    displayContainer.appendChild(newUl);
}

// form submit page
document.getElementById("submit").onclick = main;

function main() {
    let fname = document.getElementById("fn").value;
    let lname = document.getElementById("ln").value;
    let address = document.getElementById("addy").value;
    let city = document.getElementById("city").value;
    let province = document.getElementById("province").value;
    let country = document.getElementById("country").value;
    let postal = document.getElementById("pc").value;
  
    // use parseobj to return form_current maybe

    firebase.auth().onAuthStateChanged(function (user) {
        let promise1 = firebase.database().ref("user/" + user.uid + "/personal").update({
            // .update vs .set
            FirstName: fname,
            LastName: lname,
            Address: address,
            City: city,
            Province: province,
            Coutnry: country,
            PostalCode: postal
        });
        promise1.then(function () {
            window.location.href = "form_experience.html";
        })
    });

}
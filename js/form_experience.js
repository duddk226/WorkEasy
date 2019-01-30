document.getElementById("submit").onclick = main;
document.getElementById("add1").onclick = test_box_add; // click button to create textarea for experience/project/volunteer
document.getElementById("add2").onclick = test_box;
document.getElementById("add3").onclick = test_box_3;
let experienceCount = 1 // experience counter. initial experience/project/volunteer starts from 1, so counter value is 1
let projectCount = 1 // project counter
let volunteerCount = 1 // Volunteer counter. 



function test_box_add() {
    /// dynamically creates text area and append it to "experience" div
    experienceCount = experienceCount + 1; // counter goes up everytime we create new text area
    let text = document.createElement("textarea");
    text.id = "exp" + experienceCount // generate id for new textarea   ex) exp1,exp2,exp3
    text.style.width = "260px" // size of textarea. 
    text.style.height = "180px"
    text.innerText = "Type your experience"//message inside text area
    let line_brea = document.createElement("br");//creates linebreak after each textarea 
    document.getElementById("experience").appendChild(text);
    document.getElementById("experience").appendChild(line_brea);

}
function test_box() {
    /// dynamically creates text area and append it to "project" div
    projectCount = projectCount + 1;
    let text = document.createElement("textarea");
    text.style.width = "260px"
    text.style.height = "180px"
    text.innerText = "Type your Project"
    text.id = "prj" + projectCount
    let line_brea = document.createElement("br");
    document.getElementById("project").appendChild(text);//append it to div id "project"
    document.getElementById("project").appendChild(line_brea);

}
function test_box_3() {
    ////// dynamically creates text area and append it to "volunteer" div
    volunteerCount = volunteerCount + 1
    let text = document.createElement("textarea");
    text.style.width = "260px"
    text.style.height = "180px"
    text.innerText = "Type your Volunteer"
    text.id = "vol" + volunteerCount
    let line_brea = document.createElement("br");
    document.getElementById("volunteer").appendChild(text);
    document.getElementById("volunteer").appendChild(line_brea);

}


function main() {
    /// Add experience, project and volunteer data into firebase 

    let experiences = {}
    for (let i = 1; i <= experienceCount; i++) {
        let info = document.getElementById("exp" + i).value;  //info is all the value of created textarea
        let key = "exp" + i;  
        experiences[key] = info; // add it to experience. 
                                //key, value pair . "expi" = value. 
    };

    for (let j = 1; j <= projectCount; j++) {
        let proinfo = document.getElementById("prj" + j).value;
        let prokey = "prj" + j;
        experiences[prokey] = proinfo;
    };

    for (let k = 1; k <= volunteerCount; k++) {
        let volinfo = document.getElementById("vol" + k).value;
        let volkey = "vol" + k;
        experiences[volkey] = volinfo;
    };

    firebase.auth().onAuthStateChanged(function (user) {
        let promise2 = firebase.database().ref("user/" + user.uid + "/exp").update( // adding daa into fire base under user.uid
            experiences
        );
        promise2.then(function () {
            window.location.href = "search.html"; // if all data is successfully added into 
                                                //firebase, the page moves to "search.html"
        })
    });

}
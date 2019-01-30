var firebase_ref = firebase.database().ref();
var search_parent = 'search';
var job_parent = 'job';
var job_id = 0;
var submit_btn = document.getElementById('btn-submit').onclick = add_data;

get_data();

function get_data(){
    /**
    Retrieve data from firebase.

    This function gets the number of jobs on firebase currently.
     */
    var read_db = firebase_ref.child(job_parent).once('value', function(snapshot){
        job_id = snapshot.val().length;
    }).then(function(){
        if (job_id == undefined){
            job_id = 0;
        }
    })
}


function add_data(){
    /**
    Add data to firebase. Once the user completes the form, the data is added to firebase under search parent 
    and job parent.
     */

    var job = document.getElementById('job-title').value;
    var employer = document.getElementById('job-employer').value;
    var city = document.getElementById('job-city').value;
    var description = document.getElementById('job-description').value;
    var tag = document.getElementById('job-tag').value;

    var job_post = {};
    var search_tag = {};
    search_tag[tag] = true;

    job_post[job_id] = {
            'job' : job,
            'employer' : employer,
            'city' : city,
            'search_tag': search_tag
            };
    var search_post = {};
    var job_search_description = {};
    job_search_description[job] = {
        description: description,
        return: true
    };
    search_post[tag] = job_search_description;
    var write_db = firebase_ref.child(job_parent).update(job_post);
    var write_search_db = firebase_ref.child(search_parent +'/'+ tag ).update(job_search_description);
    
    write_db.then(function(){
        window.alert('Job posted to DB');
    })
    write_search_db.then(function(){
        window.alert('Search data posted');
    })
}
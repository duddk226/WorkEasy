var firebase_ref = firebase.database().ref();
var search_parent = 'search';
var got_data = true;

var url_param = window.location.href.split('?');
// Grabs the search term from URL. The split sets the search term in index 1.
var search_term = url_param[1];

get_data();

function get_data(){
    var read_db = firebase_ref.child(search_parent+ '/' + search_term).on('value', function(data_snapshot){
        var data_save = data_snapshot.val();
        get_tags(data_save);
    }
)}
   
    
function get_tags(data){
    var descriptions_array = new Array (0);
    var job_titles_array = new Array(0);
    var search_keys = Object.keys(data);
    var data_length = search_keys.length;

    for (let x = 0; x < data_length; x++){
        result_toggle = data[search_keys[x]]['return'];
        
        if (result_toggle == true){
            var job_title = document.createElement('h3');
            var description = document.createElement('p');
            job_titles_array.push(search_keys[x]);
            descriptions_array.push(data[search_keys[x]]['description'])
            job_title.innerHTML = search_keys[x];
            description.innerHTML = data[search_keys[x]]['description'];
            document.getElementById('body').appendChild(job_title);
            document.getElementById('body').appendChild(description);
        }
    }
    data_store = job_titles_array;
}

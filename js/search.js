function parse_search(){
    /*
    Parse the search item from the search bar to the url.
    This passes the search term to the search result page.
    */
    var search_term = document.getElementById('user_input').value;
    window.location.href = "search_result.html?"+search_term;
    console.log(search_term);   
}

var input = document.getElementById('user_input');
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("submit_btn").click();
    }
});

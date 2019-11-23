
// Create a new event listener that checks for the submit function (enter key)
document.onkeyup = function(e) {

  // Enter key, submit authentication results (username, password) to firebase
  if (e.which == 13) {

    // Retrieve the email and password information off the index.html page
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;

  }

}

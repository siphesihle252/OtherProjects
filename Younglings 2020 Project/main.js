// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDinE8lsN6tpbnrgrq9hg7UX6e36XRp2-4",
    authDomain: "contact-me-69fe1.firebaseapp.com",
    databaseURL: "https://contact-me-69fe1.firebaseio.com",
    projectId: "contact-me-69fe1",
    storageBucket: "contact-me-69fe1.appspot.com",
    messagingSenderId: "896479408544",
    appId: "1:896479408544:web:36b9d483368df58699f4c5",
    measurementId: "G-Y2SMEJVDKL"
  };

  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactform').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var firstname = getInputVal('firstname');
  var lastname = getInputVal('lastname');
  var number = getInputVal('number');
  var email = getInputVal('email');
  var subject = getInputVal('subject');

  // Save message
  saveMessage(firstname, lastname, number, email, subject);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactform').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(firstname, lastname, number, email, subject){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    firstname: firstname,
    lastname: lastname,
    number: number,
    email: email,
    subject: subject
  });
}
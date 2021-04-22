// Initialize Firebase
var config = {
    apiKey: "AIzaSyCHZmmMOvy_5xcOHUgAhku4PRv9ecpbieU",
    authDomain: "my-first-project21-e83ce.firebaseapp.com",
    databaseURL: "https://my-first-project21-e83ce-default-rtdb.firebaseio.com",     
    projectId: "my-first-project21-e83ce",
    storageBucket: "my-first-project21-e83ce.appspot.com",

    messagingSenderId: "219222148128",
    appId: "1:219222148128:web:ebd9cd4a5791e8069a2845",
    measurementId: "G-D2VD90MWWT"


};
firebase.initializeApp(config);
// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}

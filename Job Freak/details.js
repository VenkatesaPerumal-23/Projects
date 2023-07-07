const firebaseConfig = {
    apiKey: "AIzaSyB95U4yzfEFegmPAilZHOP9FgLU-nCl2jg",
    authDomain: "contact-form-27173.firebaseapp.com",
    databaseURL: "https://contact-form-27173-default-rtdb.firebaseio.com",
    projectId: "contact-form-27173",
    storageBucket: "contact-form-27173.appspot.com",
    messagingSenderId: "1086922315303",
    appId: "1:1086922315303:web:f901f2bf9ec612f40de002"
};
  firebase.initializeApp(firebaseConfig); 

var contactformdb= firebase.database().ref('contactform'); 

document.getElementById('contactform').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();  
    var email= getElementVal("useremail");
    var mobno= getElementVal("usermobno"); 
    var text= getElementVal("text");

    saveDetails(email,mobno,text);
    document.querySelector(".form-details").style.display="block";

    setTimeout(() => {
        document.querySelector(".form-details").style.display="none";
    },3000);

    document.getElementById('contactform').reset();
} 
   
    

function getElementVal(id) {
    return document.getElementById(id).value;
} 

const saveDetails = (email,mobno,text) => {
    var newcontactform = contactformdb.push();

    newcontactform.set({
        email:email,
        mobno:mobno,
        text:text
    });
};
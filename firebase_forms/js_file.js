const firebaseConfig = {
    apiKey: "AIzaSyCFMftaQleniLfzvgV4rgiUMmF0O4-F1Gc",
    authDomain: "basic-form-af981.firebaseapp.com",
    databaseURL: "https://basic-form-af981-default-rtdb.firebaseio.com",
    projectId: "basic-form-af981",
    storageBucket: "basic-form-af981.appspot.com",
    messagingSenderId: "132291532825",
    appId: "1:132291532825:web:527955bb97e868daf7b288"
  };
  firebase.initializeApp(firebaseConfig); 

var basicformdb= firebase.database().ref('basicform'); 

document.getElementById('basicform').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault(); 
    var name= getElementVal("username"); 
    var age= getElementVal("userage");
    var dob = getElementVal("userdob");
    var gender= getElementVal("usergender"); 
    var email= getElementVal("useremail");
    var mobno= getElementVal("usermobno"); 

    saveDetails(name, age, dob, gender, email, mobno);
    document.querySelector(".details").style.display="block";

    setTimeout(() => {
        document.querySelector(".details").style.display="none";
    },3000);

    document.getElementById('basicform').reset();
} 
   
    

function getElementVal(id) {
    return document.getElementById(id).value;
} 

const saveDetails = (name,age,dob,gender,email,mobno) => {
    var newbasicform = basicformdb.push();

    newbasicform.set({
        name:name,
        age:age,
        dob:dob,
        gender:gender,
        email:email,
        mobno:mobno,
    });
};
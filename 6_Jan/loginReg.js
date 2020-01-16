var datas = new Object();

function ValidateEmail() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(datas.Email)){
    return true;
  }

  else{
    alert("You have entered an invalid Email address !");
  }
}

function ValidatePhone(){
  var phoneNo = /^\d{10}$/;
  if((datas.PhoneNo.match(phoneNo))){
      return true;
    }
  else{
      alert("Invalid Phone No");
        return false;
    }
}

function onSignUp(){
    
    datas.Firstname = document.getElementById('firstname').value;
    datas.Lastname = document.getElementById('lastname').value;
    datas.Email = document.getElementById('email').value;
    datas.PhoneNo = document.getElementById('phone').value;
    datas.Password = document.getElementById('password').value;

    if(datas.Firstname==''){
        alert("First Name is Required");
    }

    if(datas.Lastname==''){
        alert("Last Name is Required");
    }

    ValidateEmail();

    ValidatePhone();

    if(datas.Password==''){
        alert("Password is Required");
    }

    document.getElementById('firstName').innerHTML = 'First Name : '+datas.Firstname;
    document.getElementById('lastName').innerHTML = 'Last Name : '+datas.Lastname;
    document.getElementById('Email').innerHTML = 'Email ID : '+datas.Email;
    document.getElementById('Phone').innerHTML = 'Phone No : '+datas.PhoneNo;
    document.getElementById('pwd').innerHTML = 'Password : '+datas.Password;

    var myStorage = localStorage;
    
    myStorage.setItem('Password',datas.Password);
    console.log(myStorage.getItem('Password'));

    if(myStorage.getItem('Email')==datas.Email){
      alert('Email already Exists !');
    }
    else{
      myStorage.setItem('Email',datas.Email);
      console.log(myStorage.getItem('Email'));
    }
}

function onLogin(){
    var LoginDatas = new Object();

    if((datas.Email=document.getElementById('email').value) ==
    (LoginDatas.LoginEmail=document.getElementById('loginEmail').value) &&
    (datas.Password=document.getElementById('password').value) ==
    (LoginDatas.Password=document.getElementById('loginPassword').value)){
        alert("Login Successfully");
    }

    else{
      alert('Incorrect Email or Password !');
    }
}
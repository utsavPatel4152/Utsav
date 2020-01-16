function onSubmit(){
    var datas = new Object();
    datas.Username = document.getElementById('username').value;
    datas.Password = document.getElementById('password').value;

    var selectedGender = document.getElementsByName('gender');
    for(var i=0;i<selectedGender.length;i++){
        if(selectedGender[i].checked){
            datas.Gender = selectedGender[i].value;
            break;
        }
    }

    var selectedHobby = document.getElementsByName('sports');

    datas.Hobbies = [];
    for(var i=0;i<selectedHobby.length;i++){
        if(selectedHobby[i].checked){
            datas.Hobbies.push(selectedHobby[i].value);
        }
    }

    datas.Address = document.getElementById('address').value;
    datas.Country = document.getElementById('country').value;
    datas.SelectedFile = document.getElementById('file-select').value;

    //console.log(datas);

    document.getElementById('usrname').innerHTML = 'Username : '+datas.Username;
    document.getElementById('pwd').innerHTML = 'Password : '+datas.Password;
    document.getElementById('gnder').innerHTML = 'Gender : '+datas.Gender;
    document.getElementById('hobby').innerHTML = 'Hobbies : '+datas.Hobbies;
    document.getElementById('addrss').innerHTML = 'Address : '+datas.Address;
    document.getElementById('contry').innerHTML = 'Country : '+datas.Country;
    document.getElementById('files').innerHTML = 'Choosen File : '+datas.SelectedFile;
}
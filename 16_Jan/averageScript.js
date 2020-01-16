var studentName = document.getElementById('studName');
var mathsMarks = document.getElementById('maths');
var englishMarks = document.getElementById('english');
var passingYear = document.getElementById('passYear');

function onSubmit() {

    if (studentName.value == '' || mathsMarks.value == '' ||
        englishMarks.value == '' || passingYear.value == '') {
        alert('Every fields are Required');
    }

    else if(mathsMarks.value<0 || mathsMarks.value>100 || englishMarks<0 || englishMarks>100) {
        alert('Invalid Marks');
    }

    else if(passingYear.value<2000 || passingYear.value>2020){
        alert('Invalid Passing Year');
    }

    else {
        document.getElementById('dynamicTable').innerHTML += '<tr><td>' +
            studentName.value + '</td><td>' +
            mathsMarks.value + '</td><td>' +
            englishMarks.value + '</td><td>' +
            (parseInt(mathsMarks.value) + parseInt(englishMarks.value)) / 2 + '</td><td>' +
            passingYear.value + '</td><td>' +
            new Date().getDate() + '/' + new Date().getMonth() + 1 + '/' +
            new Date().getFullYear() + '</td></tr>';
    }
}
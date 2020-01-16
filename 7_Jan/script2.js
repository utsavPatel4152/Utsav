var john = {
    fullName : 'John Smith',
    mass : 81,
    height : 3
}

var mike = {
    fullName : 'Mike Wick',
    mass : 64,
    height : 2
}

function calculateBMI(mass,height){
    return mass / (height*height);
}

var BMIJohn = calculateBMI(john.mass,john.height);
var BMIMike = calculateBMI(mike.mass,mike.height);

if(BMIJohn === BMIMike)
    console.log("Same BMI");

else if(BMIJohn > BMIMike)
    console.log("John has the highest BMI, Full Name : " + john.fullName + ", BMI : "+ BMIJohn);

else
    console.log("Mike has the highest BMI, Full Name : " + mike.fullName + ", BMI : "+ BMIMike);
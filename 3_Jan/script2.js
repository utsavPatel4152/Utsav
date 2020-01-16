var avgJohn = (89+120+103)/3;
var avgMike = (89+120+180)/3;
var avgMary = (89+120+200)/3;

if(avgJohn > avgMike && avgJohn > avgMary)
{
    console.log("John is Winner, Average is "+avgJohn);
}
else if(avgMike > avgJohn && avgMike > avgMary)
{
    console.log("Mike is Winner, Average is "+avgMike);
}
else if(avgMary > avgJohn && avgMary > avgMike)
{
    console.log("Mary is Winner, Average is "+avgMary);
}
else
{
    console.log("Match Draw");
}
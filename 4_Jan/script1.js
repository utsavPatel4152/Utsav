var names = ['john','Mike','Mary','Miller'];

for(var i=0;i<names.length;i++){
    document.getElementById("tableID").innerHTML+="<tr><td>"+(i+1)+"</td><td>"+names[i]+"</td></tr>";
}
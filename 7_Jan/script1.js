var bill = [124,48,268];
var totalTips = [];
var totalBill = [];

for(var i=0; i<3; i++){
    if(bill[i] < 50){
        totalTips.push(bill[i]*0.2);
    }

    else if(bill[i]>=50 && bill[i]<=200){
        totalTips.push(bill[i]*0.15);
    }

    else{
        totalTips.push(bill[i]*0.1);
    }
}
console.log('Tips Array : ' + totalTips);

for(i=0; i<3; i++){
    totalBill.push(bill[i]+totalTips[i]);
}
console.log('Total Bill Array : '+totalBill);
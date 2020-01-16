var marks = 0;
var selectedAnswer = [];
var answer = ['Hockey','Delhi','Gandhinagar'];
var isChecked=false;

function onSubmit(){    

    for(var i=0;i<3;i++){
        var datas = document.getElementsByName('q'+(i+1));
            for(var j=0;j<4;j++){
                if(datas[j].checked){
                    selectedAnswer[i]=datas[j].value;
                    isChecked=true;
                }
            }
            if(!isChecked){
                selectedAnswer[i]='empty';
            }
    }
    for(var j=0;j<answer.length;j++){
        if(selectedAnswer[j]==answer[j]){
            marks++;
        }
    }
    console.log('Total Marks : ' + marks);
}
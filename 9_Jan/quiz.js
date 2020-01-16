var question1 = {
    id: 1,
    questionTitle: 'First ?',
    option: ['first1', 'first2', 'first3', 'first4'],
    correctAnswer = 'first4',
    checkAnswer: function () {
        if (selectedAnswer == this.correctAnswer) {
            return true;
        }
        else {
            return false;
        }
    }
};

var question2 = {
    id: 2,
    questionTitle: 'Second ?',
    option: ['second1', 'second2', 'second3', 'second4'],
    correctAnswer = 'second4',
    checkAnswer: function () {
        if (selectedAnswer == this.correctAnswer) {
            return true;
        }
        else {
            return false;
        }
    }
};

var question3 = {
    id: 3,
    questionTitle: 'Third ?',
    option: ['third1', 'third2', 'third3', 'third4'],
    correctAnswer = 'third4',
    checkAnswer: function () {
        if (selectedAnswer == this.correctAnswer) {
            return true;
        }
        else {
            return false;
        }
    }
};

var question4 = {
    id: 4,
    questionTitle: 'Fourth ?',
    option: ['fourth1', 'fourth2', 'fourth3', 'fourth4'],
    correctAnswer = 'fourth4',
    checkAnswer: function () {
        if (selectedAnswer == this.correctAnswer) {
            return true;
        }
        else {
            return false;
        }
    }
};

var question5 = {
    id: 5,
    questionTitle: 'Fifth ?',
    option: ['fifth1', 'fifth2', 'fifth3', 'fifth4'],
    correctAnswer = 'fifth4',
    checkAnswer: function () {
        if (selectedAnswer == this.correctAnswer) {
            return true;
        }
        else {
            return false;
        }
    }
};

var currentQuestion = 0;
var options = document.querySelector('#option');
var question = [question1, question2, question3, question4, question5];
var selectedAnswer = [];
var isChecked = false;

document.getElementById('question').innerHTML = question1.questionTitle;

for (var i = 0; i < 4; i++) {
    document.getElementById('option').innerHTML += '<li><input type="radio" name="question" value=' +
        question1.option[i] + '>' + question1.option[i] + '</li>';
}

var datas = document.getElementsByName('question1');
for (var j = 0; j < 4; j++) {
    if (datas[j].checked) {
        selectedAnswer.push(datas[j].value);
        isChecked = true;
    }
}
if (!isChecked) {
    selectedAnswer[i] = 'empty';
}

function nextQuestion() {

    if (currentQuestion < 4) {

        options.innerHTML = "";
        currentQuestion++;
        document.getElementById('question').innerHTML = question[currentQuestion].questionTitle;
        for (var i = 0; i < 4; i++) {
            document.getElementById('option').innerHTML += '<li><input type="radio" name=' + question[i] + ' value=' +
                question[currentQuestion].option[i] + '>' + question[currentQuestion].option[i] + '</li>';
        }

        for (var i = 0; i < 3; i++) {
            var datas = document.getElementsByName('question' + (i + 1));
            for (var j = 0; j < 4; j++) {
                if (datas[j].checked) {
                    selectedAnswer[i] = datas[j].value;
                    isChecked = true;
                }
            }
            if (!isChecked) {
                selectedAnswer[i] = 'empty';
            }
        }
    }
}
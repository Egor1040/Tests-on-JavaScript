let tests = [
    'Python was created in the late 1980s by Guido van Rossum ?', true,
    'C++ created by Elon Musk ?', false,
    '154 + 6 = 159 ?', false,
]

for (i = 0; tests.length; i++) {
    let resultTest = 0;
    let userAnswer = confirm(tests[0]);
    if (userAnswer == [1]) {
        alert ('The answer is correct');
        resultTest++;
    } else {
        alert('The answer is incorrect');
    }
     if (i = 1) {
        let userAnswer = confirm(tests[2]);
        if (userAnswer == tests[3]) {
            alert ('The answer is correct');
            resultTest++;
        } else {
            alert('The answer is incorrect');
        }
    } if (i = 1) {
        let userAnswer = confirm(tests[4]);
        if (userAnswer == tests[5]) {
            alert ('The answer is correct');
            resultTest++;
        } else {
            alert('The answer is incorrect');
        }
    }
    alert('Right answers - ' + resultTest);
    let userRepeatTest = prompt('Do you want do test again? 1.Yes 2.No');
    if (userRepeatTest == 'No') {
        break;
    }
}


// alert('Right answer - ' + resultTest);

// let userAnswer = confirm(tests[0]);
// if (userAnswer == tests[1]) {
//     alert ('Ви відповіли правильно');
// } else {
//     alert('неправильно');
// }
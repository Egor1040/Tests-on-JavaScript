let tests = [
    'Python was created in the late 1980s by Guido van Rossum ?', true,
    'C++ created by Elon Musk ?', false,
    '154 + 6 = 159 ?', false,
]

let userAnswer = '';
let resultTotal = 0;

for (let i = 0; i < tests.length; i++) {
    if (i === tests.length -1) {
        alert (`You have ${resultTotal} points`);
        if (confirm('You want do test again?')) {
            i = 0;
            resultTotal = 0;
        } 
    }   
    if (i === 0) {
        alert ('Test begins'); 
    }
    if (i % 2 === 0) {
        userAnswer = confirm(tests[i]);     
        if (userAnswer === tests[i + 1]) {
            resultTotal++;
        }
    }                                 
}
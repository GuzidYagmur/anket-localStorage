let questions = [
    {
        question:"En sevdiğiniz film nedir?"
    },
    {
        question:"En sevdiğiniz meyve nedir?"
    },
    {
        question:"En sevdiğiniz hayvan hangisidir?"
    },
    {
        question:"En sevdiğiniz yemek nedir?"
    },
]

if(localStorage.questions){
    questions=JSON.parse(localStorage.questions);
}

let answers = [];
if(localStorage.answers){
    answers=JSON.parse(localStorage.answers);
}

for(i=0; i<questions.length; i++){
    let profileName = prompt("İsminiz nedir?");
    let profileSurname = prompt("Soyisminiz nedir?");
    let answer = prompt(questions[i].question);
    answers.push({
        name: profileName,
        surname: profileSurname,
        questions: questions[i].question,
        answer : answer

});

    localStorage.answers = JSON.stringify(answers);
}

console.log(answers);
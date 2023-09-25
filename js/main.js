const questions = [
    {
        "que":"Whic is markup language?",
        "a":"HTML",
        "b":"CSS",
        "c":"javascript",
        "d":"java",
        "correct":"a"
    },
    {
        "que":"Whic markup language?",
        "a":"HTML",
        "b":"CSS",
        "c":"javascript",
        "d":"java",
        "correct":"b"
    },
    {
        "que":" is markup language?",
        "a":"HTML",
        "b":"CSS",
        "c":"javascript",
        "d":"java",
        "correct":"c"
    }
]

let index = 0;
let total = questions.length;
let right=0, wrong=0;

const quesBox = document.getElementById("queBox");
const opetionInput = document.querySelectorAll(".options");





const loadQuetion =() =>{
    if(index===total){
        return endQuiz();
    }
    reset();
    const data = questions[index];
    console.log(data)
    quesBox.innerText = `${index+1}) ${data.que}`;
    opetionInput[0].nextElementSibling.innerText = data.a; 
    opetionInput[1].nextElementSibling.innerText = data.b; 
    opetionInput[2].nextElementSibling.innerText = data.c; 
    opetionInput[3].nextElementSibling.innerText = data.d; 

}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if ( ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuetion()++;
    return

}

const getAnswer = () => {
    opetionInput.forEach (
        (input) => {
            if(input.checked){
                console.log("yes");
                return input.value;
            }
        }
    )
}



const reset = () => {
    opetionInput.forEach (
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementsById("queBox").innerHTML = `
    Thank You For Playing!
    `
}



loadQuetion();
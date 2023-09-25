const questions = [
    {
        "que":"What is the range of values that can be stored by int datatype in C?",
        "a":"-(2^31) to (2^31) - 1.",
        "b":"-256 to 255.",
        "c":"-(2^61) to (2^61) - 1.",
        "d":"0 to (2^31) - 1.",
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
    let answer;
    opetionInput.forEach (
        (input) => {
            if(input.checked){
                console.log("yes");
                answer= input.value;
            }
        }
    )
    return answer;
}



const reset = () => {
    opetionInput.forEach (
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("container").innerHTML = `
    <div style="text-align:center">
        <h3>Thank You For Playing!</h3>
        <h2>${right}/${total} Answers are Coorect</h2>
    </div>
    `
}



loadQuetion();
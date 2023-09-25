const questions = [
    {
        "que":"Whic is markup language?",
        "a":"HTML",
        "b":"CSS",
        "c":"javascript",
        "d":"java",
        "correct":"HTML"
    }
]

const index = 0;

const quesBox = document.getElementById("queBox");
const opetionInput = document.querySelectorAll(".options");
const loadQuetion =() =>{
    const data = questions[index];
    console.log(data)
    quesBox.innerText = `${index+1}) ${data.que}`;
    opetionInput[0].nextElementSibling.innerText = data.a; 
    opetionInput[1].nextElementSibling.innerText = data.b; 
    opetionInput[2].nextElementSibling.innerText = data.c; 
    opetionInput[3].nextElementSibling.innerText = data.d; 

}

loadQuetion();
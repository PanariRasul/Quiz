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
        "que":"Using which tag we insert an JavaScript in HTML page?",
        "a":"<JavaScript type=\"text/javascript\">",
        "b":"<script type=\"text/javascript\">",
        "c":"<JScript type=\"text/javascript\">",
        "d":"<HTMLScript type=\"text/javascript\">",
        "correct":"b"
    },
    {
        "que":"Which of the following is true about links by default?",
        "a":"An unvisited link is underlined and blue",
        "b":" A visited link is underlined and red",
        "c":"An active link is underlined and purple",
        "d":"All the above",
        "correct":"a"
    },
    {
        "que":"The href attribute in the link tag specifies the:",
        "a":"HTML",
        "b":"CSS",
        "c":"javascript",
        "d":"java",
        "correct":"c"
    },
    {
        "que":"  HTML Event Attributes onunload fires",
        "a":"Destination of a link",
        "b":"Link",
        "c":"Hypertext",
        "d":"None of the above",
        "correct":"a"
    },
    {
        "que":"Twitter limits the number of characters per tweet is ?",
        "a":"130",
        "b":"160",
        "c":"124",
        "d":"140",
        "correct":"d"
    },
    {
        "que":"What is cell padding?",
        "a":" Used to separate cell walls from their contents",
        "b":"Used to set space between cells",
        "c":" Both a and b above",
        "d":"Used to provide width to a cell",
        "correct":"a"
    },
    {
        "que":" By default, what's the Fps shown on the timeline?",
        "a":"15",
        "b":"1",
        "c":"20",
        "d":"hnh?",
        "correct":"a"
    },
    {
        "que":"Dreamweaver's ____ feature allows users to select colors and make perfect color matches.",
        "a":"Color Cube",
        "b":"Palattes",
        "c":"HTML view",
        "d":"Eye dropper",
        "correct":"d"
    },
    {
        "que":"How to create a Date object in JavaScript?",
        "a":"dateObjectName = new Date([parameters])",
        "b":" dateObjectName.new Date([parameters])",
        "c":"dateObjectName := new Date([parameters])",
        "d":"dateObjectName Date([parameters])",
        "correct":"a"
    },
    {
        "que":"  The _______ method of an Array object adds and/or removes elements from an array.",
        "a":" Reverse",
        "b":"Shift",
        "c":"Slice",
        "d":"Splice",
        "correct":"d"
    },
    {
        "que":"To set up the window to capture all Click events, we use which of the following statement?",
        "a":"window.captureEvents(Event.CLICK);",
        "b":"window.handleEvents (Event.CLICK);",
        "c":"window.routeEvents(Event.CLICK );",
        "d":"window.raiseEvents(Event.CLICK );",
        "correct":"a"
    },
    {
        "que":"Who is making the Web standards?",
        "a":"Mozilla",
        "b":"Microsoft",
        "c":"The World Wide Web Consortium",
        "d":"NVDIA",
        "correct":"c"
    },
    {
        "que":"Which file controls how your frames will appear?",
        "a":" Frameset",
        "b":"Master Document",
        "c":"Template",
        "d":"Timeline",
        "correct":"a"
    },
    {
        "que":" What can't layers do if you want to convert them to tables?",
        "a":"Be close",
        "b":" Contain a Color",
        "c":"Be larger than the target table",
        "d":" Overlap",
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
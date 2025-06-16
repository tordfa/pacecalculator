
let speedValue = document.getElementById('speedvalue');
let timeValue = document.getElementById('timevalue');
let distanceValue = document.getElementById('distancevalue');

let speedInput = document.getElementById('speedinput');
let timeInput = document.getElementById('timeinput');
let distanceInput = document.getElementById('distanceinput');

function setSpeed(){
    speedValue.innerHTML = (distanceValue.innerHTML/timeValue.innerHTML);
    speedInput.value = speedValue.innerHTML;
}
function setTime(){
    timeValue.innerHTML = distanceValue.innerHTML/speedValue.innerHTML;
    timeInput.value = timeValue.innerHTML;

}
function setDistance(){
    distanceValue.innerHTML = speedValue.innerHTML*timeValue.innerHTML;
    distanceInput.value = distanceValue.innerHTML;
    
}

function checkStack(name){
    if(!stack.includes(name)){
    console.log('Before StacK: ' + stack);
    stack.unshift(name);
    stack.pop();
    console.log("After Stack: " + stack);
    }
 
    if(stack.includes('time') && stack.includes('distance')){
        setSpeed();
    }
    else if(stack.includes('time') && stack.includes('speed')){
        setDistance();
    }
    else if(stack.includes('distance') && stack.includes('speed')){
        setTime();
    }
}

let values = [
    {   
        name: 'speed',
        value: speedValue,
        input: speedInput,
    },
    {   
        name: 'time',
        value: timeValue,
        input: timeInput,
    },
    {   
        name: 'distance',
        value: distanceValue,
        input: distanceInput,
    }
]

let stack = ['distance','time'];

checkStack('distance');

values.forEach(element => {
    element.input.addEventListener("input", (event) => {
        element.value.innerHTML = event.target.value;
        checkStack(element.name);
    });
    
});







let pinMatcher = document.getElementById('pin-matcher');
let generatorPinShow = document.getElementById('show-generated-pin');
let submitBtn = document.getElementById('submit');
let notifyWrong = document.getElementById('notify-wrong');
let notifyCorrect = document.getElementById('notify-correct');
let notifyInvalid = document.getElementById('notify-invalid');
let notify = document.querySelectorAll('.notify');
let randomNumber;

const generatePin = () => {
    let generatorPinShow = document.getElementById('show-generated-pin');
    randomNumber = Math.floor(1000 + Math.random() * 9000).toString();
    generatorPinShow.value = randomNumber;
}

const appendToDisplay = (num) => {
    pinMatcher.value += num;
}

const backSpace = () => {
    let pinLastValue = pinMatcher.value.length - 1;
    let slice = pinMatcher.value.slice(0, pinLastValue);
    pinMatcher.value = slice;
}

const clearDisplay = () => {
    pinMatcher.value = "";
}


submitBtn.addEventListener('click', (event) => {
        if (generatorPinShow.value != "" && pinMatcher.value != "") {
            if (generatorPinShow.value == pinMatcher.value) {
                notifyCorrect.style.display = 'block';
                notifyWrong.style.display = 'none';
                notifyInvalid.style.display = 'none';
                clearAlert('correct');
                clearInputField();

            }
            if (generatorPinShow.value != pinMatcher.value) {
                notifyWrong.style.display = 'block';
                notifyCorrect.style.display = 'none';
                notifyInvalid.style.display = 'none';
                clearAlert('wrong');
            }
        }
        else {
            notifyInvalid.style.display = 'block';
            notifyCorrect.style.display = 'none';
            notifyWrong.style.display = 'none';
            clearAlert('invalid');
        }
})


const clearAlert = (removeElement) => {
    setTimeout(() => {
        switch (removeElement) {
            case 'correct':
                document.getElementById('notify-correct').remove();
                break;
            case 'wrong':
                document.getElementById('notify-wrong').remove();
                break;
            case 'invalid':
                document.getElementById('notify-invalid').remove();
                break;
            default:
                break;
        }
    }, 3000)
}

const clearInputField = ()=>{
    pinMatcher.value = "";
    generatorPinShow.value = "";
}
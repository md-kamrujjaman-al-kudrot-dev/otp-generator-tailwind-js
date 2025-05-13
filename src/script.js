let generateOTP;
let intervalId;
const timerBox = document.getElementById("otp-timer");

function otpTimer() {

    const interval = 1000;
    const timeout = 15000;
    let comeDown = timeout / interval;


    intervalId = setInterval(() => {
        timerBox.innerText = `Your OTP will expire in ${comeDown} second`;
        comeDown = comeDown - 1;
        // 15/1= 15-1 = 14


    }, interval);

    // interval is stoped here
    setTimeout(() => {
        timerBox.innerText = `Your OTP Expired`;
        clearInterval(intervalId)
    }, timeout);
}



// Function to handle OTP-style numeric input fields
function inputFild() {
    const mainInput = document.getElementById("main-input");

    // Add an input event listener to the main input field
    mainInput.addEventListener("input", function (e) {
        const target = e.target;
        const value = target.value;

        console.log(value);

        // If the input is not a number, clear the input field
        if (isNaN(value)) {
            target.value = "";
            return;
        }

        // Move focus to the next input field if it exists
        const netElement = target.nextElementSibling;
        if (netElement) {
            netElement.focus();
        }


        otpCHeker()
    });
}


// Function to generate a random 4-digit OTP and display it in the HTML element with id "otp"
function otpGenerator() {
    const otpBox = document.getElementById("otp");

    generateOTP = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit OTP (between 1000 and 9999)

    otpBox.innerText = `Your OTP is ${generateOTP}`;

    otpTimer();


    // console.log(generateOTP); 
}



function otpCHeker() {
    // Initialize an empty string to store the typed OTP digits
    let typedNumber = "";

    const boxListElem = document.getElementById("main-input");

    [...boxListElem.children].forEach((elem) => {
        typedNumber += elem.value;
    });

    console.log(typedNumber)

    // Convert the typed OTP string into an integer
    const StrToInt = parseInt(typedNumber, 10)

    const result = generateOTP === StrToInt

    // Get the result display element
    if (result) {
        const validOTP = document.getElementById("otpResult")
        validOTP.innerHTML = "OTP is valid"
        validOTP.classList.add("valid")
        validOTP.classList.remove("invalid")

        // when user provide corret opt , comeDown will stoped
        setTimeout(() => {
            timerBox.innerText = `Your OTP Expired`;
            clearInterval(intervalId)
            
        }, 1000);

    } else {
        const validOTP = document.getElementById("otpResult")
        validOTP.innerHTML = "OTP is invalid"
        validOTP.classList.remove("valid")
        validOTP.classList.add("invalid")
    }
}





function allFunction() {
    inputFild()

    setTimeout(() => {
        otpGenerator()

    }, 1000);


}

allFunction();

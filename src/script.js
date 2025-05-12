function inputFild() {
    const mainInput = document.getElementById("main-input")
    mainInput.addEventListener("input", function (e) {
        const target = e.target;
        const value = target.value;
        console.log(value);

        if (isNaN(value)) {
            target.value = ""
            return;
        }

        const netElement = target.nextElementSibling
        if (netElement) {
            netElement.focus();
        }
    })

}

function generateOTP() {
    const generateOTP = Math.floor(1000 + Math.random() * 9000);
    const otpbox = document.getElementById("otp")
    otpbox.innerText = `Your OTP is ${generateOTP}`
    console.log(generateOTP)
}


function allFunction() {
    inputFild()
    setTimeout(() => {
        generateOTP()
        
    }, 1000);    

}

allFunction();

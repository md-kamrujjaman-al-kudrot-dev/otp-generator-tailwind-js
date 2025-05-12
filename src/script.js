// Function to handle OTP-style numeric input fields
function inputFild() {
    const mainInput = document.getElementById("main-input"); // Get the main input element by its ID

    // Add an input event listener to the main input field
    mainInput.addEventListener("input", function (e) {
        const target = e.target;      // The current input field where user is typing
        const value = target.value;   // Get the value typed by the user

        console.log(value);           // Log the input for debugging

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
    });
}


// Function to generate a random 4-digit OTP and display it in the HTML element with id "otp"
function otpGenerator() {
    const otpBox = document.getElementById("otp"); // Get the HTML element where the OTP will be shown

    const generateOTP = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit OTP (between 1000 and 9999)

    otpBox.innerText = `Your OTP is ${generateOTP}`; // Display the generated OTP in the HTML element

    console.log(generateOTP); // Log the OTP to the browser console (for debugging or verification)
}



function allFunction() {
    inputFild()
    setTimeout(() => {
        otpGenerator()
        
    }, 1000);
  

}

allFunction();

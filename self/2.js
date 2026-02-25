let generatedOTP;

function sendOTP() {
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;

    if (name === "" || mobile === "") {
        alert("Please enter name and mobile number");
        return;
    }

    // Generate 4-digit OTP
    generatedOTP = Math.floor(1000 + Math.random() * 9000);
    alert("Your OTP is: " + generatedOTP); // Demo purpose only

    document.getElementById("otpSection").style.display = "block";
    document.getElementById("message").innerHTML = "OTP Sent Successfully!";
}

function verifyOTP() {
    let enteredOTP = document.getElementById("otp").value;

    if (enteredOTP == generatedOTP) {
        document.getElementById("message").style.color = "green";
        document.getElementById("message").innerHTML = "OTP Verified Successfully ✔";
    } else {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerHTML = "Invalid OTP ❌";
    }
}

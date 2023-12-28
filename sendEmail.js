// sendEmail.js

function sendEmail() {
    // Get form data
    var name = document.getElementsByName("Name")[0].value;
    var email = document.getElementsByName("Email")[0].value;
    var mobileNumber = document.getElementsByName("Mobile_number")[0].value;
    var message = document.getElementsByName("Message")[0].value;

    // Compose email message
    var emailMessage = "Name: " + name + "\n";
    emailMessage += "Email: " + email + "\n";
    emailMessage += "Mobile Number: " + mobileNumber + "\n";
    emailMessage += "Message: " + message + "\n";

    // Send email via SendGrid API
    Email.send({
        SecureToken: "YOUR_SENDGRID_API_KEY",
        To: "your-email@example.com",
        From: email,
        Subject: "New Form Submission",
        Body: emailMessage,
    }).then(
        message => console.log(message)
    );
    
    // Display a thank you message or redirect to a thank you page
    alert("Thank you for your submission!");
}

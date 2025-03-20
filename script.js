document.querySelector("#fullform").addEventListener("submit", function (event) {
    event.preventDefault();

    let fName = document.getElementById("fname").value;
    let lName = document.getElementById("lname").value;
    let uName = document.getElementById("username").value;
    let birthDate = document.getElementById("dob").value;
    let passWord = document.getElementById("password").value;
    let email = document.getElementById("email").value;

    // Store the selected value BEFORE modifying the DOM
    let partTimeSelected = document.getElementById("part-time").checked;
    let fullTimeSelected = document.getElementById("full-time").checked;

    let hiddenDiv = document.querySelector(".hide");
    hiddenDiv.style.display = "block";


    let h1 = document.querySelector("h1");
    h1.innerText = `Welcome ${fName} ${lName} `;
    h1.style.display = "block";

    let content = document.querySelector(".container");

    // Use the stored values 
    content.innerHTML = `
        <p>Your name is: ${fName} ${lName}</p>
        <p>Your Username is: ${uName}</p>
        <p>Your date of birth is: ${birthDate}</p>
        <p>Your Email is: ${email}</p>
        <p>Your Password is: ${passWord}</p>
        <br>
        <p>Are your details correct?</p>
        <button class="regit yes">Yes</button>
        <button class="regit no"><a href="register.html">No</a></button>
    `;

    setTimeout(() => {
        let confirmed = document.querySelector(".yes");

        if (confirmed) {
            confirmed.addEventListener("click", function () {
                if (partTimeSelected) {
                    window.location.href = "index.html?type=part-time";
                } else if (fullTimeSelected) {
                    window.location.href = "index.html?type=full-time";
                } else {
                    alert("Please select Part-Time or Full-Time before proceeding.");
                }
            });
        }
    }, 100);
});

        let form = document.querySelector("#fullform");

        
        form.addEventListener("submit", function(event) {
            event.preventDefault(); 
            let fName = document.getElementById("fname");
            let lName = document.getElementById("lname");
            let uName = document.getElementById("username");
            let birthDate = document.getElementById("dob");
            let passWord = document.getElementById("password");
            let email = document.getElementById("email");

            let fullName = fName.value + " " + lName.value;
            
            let h1 = document.querySelector("h1");
            h1.innerText = `Welcome ${fName.value} ${lName.value} `;
            h1.style.display = "block";

            let content = document.querySelector(".container");
            content.innerHTML = `Your name is: ${fName.value} ${lName.value}, <br> Your UserName is: ${uName.value}, <br> Your date of birth is ${birthDate.value}, <br> Your Email is ${email.value}, <br> Your Password is ${passWord.value}.` 
            
 
            // let myElm = document.createElement("p");	// Create a new element

            // myElm.innerText = 'YOU HAVE BEEN REGISTERED!';		// Change the text of the element
            // myElm.style.color = 'red';		// Change the text color of the element

            // document.body.appendChild(myElm);
            // let newElm = document.createElement("p");
            // newElm.innerText = 'YOU HAVE BEEN REGISTERED!';
            // document.body.appendChild(newElm);


            
            //alert("First Name: " + name);
        });




// // document.querySelectorAll(".card").forEach((card) => {
// //     // Store the original content of each card before modifying it
// //     const originalContent = card.innerHTML;

// //     card.addEventListener("mouseover", function () {
// //         card.innerHTML = <a href="google.com" 
// //                             target="_blank" 
// //                             style="display: flex; align-items: center; justify-content: center;
// //                                    width: 100%; height: 100%; background: #6645EA; color: white; 
// //                                    font-size: 16px; font-weight: bold; text-decoration: none;">
// //                             Register
// //                           </a>;
// //     });

// //     card.addEventListener("mouseleave", function () {
// //         card.innerHTML = originalContent;  // Restore original content
// //     });
// // });


// // document.querySelectorAll(".card").forEach((card) => {
// //     card.addEventListener("mouseover", function () {
// //         // Select the <h4> inside the specific card (not the whole page)
// //         let newCard = card.querySelector("h4");
        
// //         if (newCard) {  // Ensure h4 exists before modifying
// //             newCard.innerHTML = <a href="file:///C:/CODING/Bluehouse/formcontrol/register.html" target="_blank"> Register </a>;
// //         }
// //     });

// //     card.addEventListener("mouseleave", function () {
// //         let newCard = card.querySelector("h4");
// //         newCard.innerHTML = originalContent; // Restore original content when mouse leaves
// //     });
// // });

// document.querySelectorAll(".card").forEach((card) => {
//     let originalContent = card.querySelector("h4") ? card.querySelector("h4").innerHTML : "";

//     card.addEventListener("mouseover", function () {
//         let newCard = card.querySelector("h4");

//         if (newCard) {  
//             newCard.innerHTML = <a onclick="event.stopPropagation(); window.location.href='register.html';"> Register </a>;
//         }
//     });

//     card.addEventListener("mouseleave", function () {
//         let newCard = card.querySelector("h4");
//         if (newCard) {
//             newCard.innerHTML = originalContent; // Restore original text when mouse leaves
//         }
//     });
// });

document.querySelectorAll(".card").forEach((card) => {
    let registerBtn = card.querySelector(".register-btn");

    card.addEventListener("mouseover", function () {
        registerBtn.style.display = "block"; // Show button on hover
    });

    card.addEventListener("mouseleave", function () {
        registerBtn.style.display = "none"; // Hide button when mouse leaves
    });
});

// ddocument.addEventListener("DOMContentLoaded", function () {
//     const cards = document.querySelectorAll(".card");

//     cards.forEach((card) => {
//         card.addEventListener("click", function () {
//             const registerBtn = card.querySelector(".register-btn");
//             const title = card.querySelector("h4");

//             // Close all other open buttons
//             document.querySelectorAll(".register-btn").forEach((btn) => {
//                 btn.style.opacity = "0";
//                 btn.style.visibility = "hidden";
//             });

//             document.querySelectorAll(".card h4").forEach((text) => {
//                 text.style.opacity = "1";
//                 text.style.visibility = "visible";
//             });

//             // Toggle visibility for the clicked card only
//             registerBtn.style.opacity = "1";
//             registerBtn.style.visibility = "visible";
//             title.style.opacity = "0";
//             title.style.visibility = "hidden";
//         });
//     });

//     // Hide register button when clicking outside
//     document.addEventListener("click", function (event) {
//         if (!event.target.closest(".card")) {
//             document.querySelectorAll(".register-btn").forEach((btn) => {
//                 btn.style.opacity = "0";
//                 btn.style.visibility = "hidden";
//             });

//             document.querySelectorAll(".card h4").forEach((text) => {
//                 text.style.opacity = "1";
//                 text.style.visibility = "visible";
//             });
//         }
//     });
// });


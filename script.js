// import inquirer from "inquirer";
// import qr from "qr-image";
// // var qr = require('qr-image');
// import fs from "fs";

// inquirer
//   .prompt([
//     {
//         type: "input",
//         message: "Enter an URL: ",
//         name: "url"
//     }
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//     // console.log(answers);
//     const url = answers.url;
//     var qr_svg = qr.image(url);
//     qr_svg.pipe(fs.createWriteStream("qr_img.png"));

//     fs.writeFile('url.txt', url, (err) => {
//       if (err) throw err;
//       // console.log('The file has been saved!');
//     }); 
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});
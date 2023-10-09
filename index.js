import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
        message: "Enter website: ",
        name: "URL",
    },
  ])
  .then((answers) => {
    console.log(answers);
    let url = answers.URL;

    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream("QR-img.png"));

    writeFile('./URL.txt', data, (err) => {
        if (err) throw err;
        console.log('Success!');
      }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
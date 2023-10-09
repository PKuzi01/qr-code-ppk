import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
        message: "Enter URL:",
        name: "URL",
    },
  ])
  .then((answers) => {
   const url = answers.url;
   var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr-image.png"));
    writeFile("successURL.txt", data, (err) => {
        if (err) throw err;
        console.log("It has been saved successfully")
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("It's successful!");
    } else {
      // Something else went wrong
    }
  });

const fs = require("fs");

//To overwrite the file:
const message = "This node course has been going pretty well";

fs.writeFile("seventh-grade.txt", message, (err) => {
  if (err) {
    console.error("Error rewriting diary:", err);
    return;
  }
  console.log("Diary rewritten successfully!");

  //To read the file:
  fs.readFile("seventh-grade.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file", err);
      return;
    }
    console.log(data);
    //To delete the file:
    // const filePath = "seventh-grade.txt";
    // fs.unlink(filePath, (err) => {
    //   if (err) {
    //     console.error("Error deleting diary file:", err);
    //     return;
    //   }
    //   console.log("Diary entry deleted!!");
    // });

    // Replace all Latin letters with rectangles
    const redactedText = data.replace(/[A-Za-z]/g, "█");
    // Write the modified content back to the file
    fs.writeFile("seventh-grade.txt", redactedText, (err, data) => {
      if (err) {
        console.error("Error redacting file:", err);
        return;
      }
      console.log("\nKEEP OUT!!!!!!\n", data);
    });
  });
});

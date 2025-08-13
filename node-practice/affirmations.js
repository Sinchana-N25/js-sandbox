const os = require("os");
const fs = require("fs");
const path = require("path");

// Define an array of affirmations directly in the code
const affirmations = [
  "Every chapter you read sharpens your mind!",
  "That bug doesn’t stand a chance against you!",
  "Your fingers will glide over those guitar strings effortlessly!",
  "You’re getting stronger with every rep!",
  "You’re building a future you’ll be proud of, one step at a time!",
];

// Define the path to any folder
const folderPath = path.join(
  os.homedir(),
  "OneDrive",
  "Documents",
  "Code",
  "js-sandbox",
  "node-practice"
);

// Function to get a random affirmation and save it to a file in the folder
function saveRandomAffirmationToFolder() {
  // Pick a random affirmation from the array
  const randomAffirmation =
    affirmations[Math.floor(Math.random() * affirmations.length)];

  // Define the new file path in the folder (this will overwrite the file each time)
  const newFilePath = path.join(folderPath, "daily-affirmations.txt");
  // Write the random affirmation to a new file in the folder (this will overwrite it)
  fs.writeFile(newFilePath, randomAffirmation, (err) => {
    if (err) {
      console.error("Error writing the affirmation to the file:", err);
    } else {
      console.log("Random affirmation saved to:", newFilePath);
    }
  });
}

// Call the function to get and save a random affirmation
saveRandomAffirmationToFolder();

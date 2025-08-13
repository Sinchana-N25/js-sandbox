//A simple program to read one of the image files in our computer’s saved pictures folder.
let path = require("path");

// Manually define your saved pictures folder path
const imagePath = path.join(
  "C:",
  "Users",
  "sinch",
  "OneDrive",
  "Pictures",
  "Saved Pictures"
);

// List of files in the saved pictures folder
const files = [
  "blue wallpaper.jpg",
  "coder.gif",
  "kym bleh.JPG",
  "val meme.jpeg",
  "YLIA wallpaper.jpg",
];

// List of valid image file extensions (both lowercase & uppercase)
const imageExtensions = [
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".webp",
  ".PNG",
  ".JPG",
  ".JPEG",
  ".GIF",
  ".WEBP",
];

// Find the first image file
let firstImage = files.find((file) =>
  imageExtensions.includes(path.extname(file))
);

if (firstImage) {
  console.log("First image file found:", path.join(imagePath, firstImage));
} else {
  console.log("No image files found!");
}

//Open the terminal, navigate to the folder where you saved your
// chaos.js file, and type node chaotic-desktop.js.

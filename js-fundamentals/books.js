// Reading List Tracker using ES6 Features
// Practiced and revised ES6 concepts: arrow functions, template literals, for...of loops, spread/rest operators, and object/array handling.

// Define an object to represent the user's Goodreads-style reading list.
// It contains two arrays: one for currently reading books, and another for books to read in the future.

const goodreadsInfo = {
  currentlyReading: [
    {
      title: "Unravel Me",
      author: "Tahereh Mafi",
    },
  ],
  wantToRead: [
    {
      title: "Chain of Thorns",
      author: "Cassandra Clare",
    },
  ],
};

// Arrow function that combines an existing list of books with any additional books using the spread operator.
// Returns a new array that merges both sets.
let addNewBooks = (books, additionalBookObjects) => [
  ...books,
  ...additionalBookObjects,
];

// New books to add to each list
let extra = [
  {
    title: "The Two Towers",
    author: "J.R.R. Tolkien",
  },
  {
    title: "Percy Jackson and the Olympians",
    author: "Rick Riordan",
  },
];

let extra2 = [
  {
    title: "Fearless",
    author: "Lauren Roberts",
  },
];

// Update the original lists using the addNewBooks() function
goodreadsInfo.currentlyReading = addNewBooks(
  goodreadsInfo.currentlyReading,
  extra
);
goodreadsInfo.wantToRead = addNewBooks(goodreadsInfo.wantToRead, extra2);

// Function to display the user's reading list in the console.
// Uses for...of loops and template literals to format the output clearly.
let showGoodreadsInfo = (info) => {
  let current = info.currentlyReading;
  let want = info.wantToRead;

  console.log(`Currently Reading:`);
  for (let deets of current) {
    console.log(`${deets.title} by ${deets.author}`);
  }

  console.log(`\nWant to Read:`);
  for (let deets of want) {
    console.log(`${deets.title} by ${deets.author}`);
  }
};

// Call the display function to show the full reading list
showGoodreadsInfo(goodreadsInfo);

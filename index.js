const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(sentence => {
    const splitUp = sentence.split(' ');
    // this stores the split up array (by words, and no longer a sentence, into a new array) using map

    const capitalizeWords = splitUp.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    //returns a new array using map called "capitalizeWords" that capitalizes the first character of each word in the new array but adds the slice to retain the remainder of the word

    const combineCapitalizedWords = capitalizeWords.join(' ');

    // joins the words back together

    return combineCapitalizedWords;

  });
}
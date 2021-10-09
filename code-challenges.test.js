// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

//JEST TEST: create test to test function l33tify, it should take in a string and return a message that converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
describe("testing function l33tify", () => {
    it("should take in a string param and return a new string where a, e, i, and o are replaced with  4, 3, 1, and 0", () => {

        var secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        var secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        var secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"

      expect(l33tify(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(l33tify(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(l33tify(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
  })
//test fails because: ReferenceError: l33tify is not defined



// b) Create the function that makes the test pass.



//create function l33tify that takes string
// const l33tify = (string) => {
//     //convert string to array using .split("")
//     let l33tArray = string.split("");

//     //iterate through array 
//     for (let i = 0; i < l33tArray.length; i++) {
//         //check if character is a, A, e, E, i, I, o, O using switch statement and changes to 4, 3, 1, or 0
//         switch(l33tArray[i]){
//             case "a": //TIL -> cannot use regex with switch statements, will only check 1 thing at a time.
//             case "A":
//                 l33tArray[i] = "4";
//                 break;
//             case "e":
//             case "E":
//                 l33tArray[i] = "3";
//                 break;
//             case "i":
//             case "I":
//                 l33tArray[i] = "1";
//                 break;
//             case "o":
//             case "O":
//                 l33tArray[i] = "0";
//                 break;
//             default:
//                 break;
//         }
//     }
    
//     //returns array converted to string using .join("")
//     //console.log(l33tArray.join(""))
//     return l33tArray.join("");
// }
//test passed!

//REFACTOR WITH .replace and regex! ===============================================================
//.replace() is used on string and pased in a substring to look for and a new substring to replace it with

//create function l33tify that takes string
const l33tify = (string) => {

    //use .replace on string multiple times for a, e, i, and o
    //uses regex to specify the characters ('substr' part)
    // where /: escapes to regex, []:specifies a group or range, /g: global finds everything in the string
    let l33tString = string.replace(/[aA]/g, '4')
        .replace(/[eE]/g, '3')
        .replace(/[iI]/g, '1')
        .replace(/[oO]/g, '0');

    return l33tString;
}
//had to fiddle with the regex formatting....but got the test to pass!

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

//JEST TEST: testing function containsChar that takes in an array of words and a single letter and returns all the words that contain that letter in an array
describe("testing function containsChar", () => {
    it("should take in array and specific letter and return the words that contain that letter in an array", () => {

        var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
        var letterA = "a"
        // Expected output: ["Apple", "Banana", "Orange"]
        var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
        var letterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]
        
        expect(containsChar(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
        expect(containsChar(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
  })
  //test fails because: ReferenceError: containsChar is not defined



// b) Create the function that makes the test pass.

//create containsChar that takes in array of words and a letter
// const containsChar = (array, char) =>{
//     //create new array to push to
//     let doesContain = [];

//     //iterate through array 
//     for (let i = 0; i < array.length; i++) {
//         //test whether each word contains the letter (lower or capital) in the string
//         if(array[i].includes(char.toUpperCase()) || array[i].includes(char.toLowerCase())){
//             //if contains either, push word to array
//             doesContain.push(array[i]);
//         }
//         // console.log(doesContain); 
//     }
//     //return new array
//     return doesContain;
// }
//test had a couple issues syntax wise but after fixing some parenthesis it passes!

//REFACTOR WITH .filter()! ===============================================================

//create containsChar that takes in array of words and a letter
const containsChar = (array, char) =>{
    //returns a filtered array
        //filter looks at word and if it includes char either upper or lower case then return true and add to new array
    return array.filter(word => 
            word.includes(char.toUpperCase()) || 
            word.includes(char.toLowerCase())
        )
}
//test passed!


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

//JEST TEST: testing function fullHouse that will take an array, and determine if it is full house (1 pair and 1 three of a kind)
describe("testing function fullHouse", () => {
    it("should take an array and check whether there is exactly one pair and one three of a kind", () => {

        var hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        var hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        var hand3 = [5, 5, 5, 5, 4]
        // Expected output: false

      expect(fullHouse(hand1)).toEqual(true)
      expect(fullHouse(hand2)).toEqual(false)
      expect(fullHouse(hand3)).toEqual(false)
    })
  })
//test fails because: ReferenceError: fullHouse is not defined


// b) Create the function that makes the test pass.
//NOTES: FULL HOUSE CONDITION: 3 of a kind AND 2 of a kind
//WE immediately know that we can only have two kinds of elements. 
//if a set has length of greather than two => we don't have a full house
//WE also need to check that ratio is 2 to 3 of only 1 number


//create function fullHouse that takes an array of length 5
// const fullHouse = (array) => {
//     //create a new array that will filter out the duplicates
//     let numbers = new Set(array);
//     // console.log(array);
//     // console.log(numbers);

//     //counter for a number
//     let countNum1 = 0;

//     //check if there is only 1 element or more than 2 elements in the array
//     //if true, early return false since a full house would be impossible
//     // console.log(numbers.size);
//     if (numbers.size != 2){
//         return false;
//     } 
 
//     //iterate through array
//     for (let i = 0; i < array.length; i++) {
//         //knowing that there are only 2 numbers, we only need to keep track of 1 so I choose 1st number in array
//         //if current number in array = 1st number in array then countNum1++
//         if(array[i] === array[0]){
//             countNum1++;
//         }
//     } 

//     //if count is two or three, then the other number must occur three or two times respectively
//     //meaning there is a full house and we should return true
//     // console.log(countNum1);
//     if(countNum1 === 2 || countNum1 ===3){
//         return true;
//     }
    
//     return false;

// }

//ran test, failed because numbers.length does not work. numbers is now a set and the correct method should be .size to check the number of unique elements
//also initially tried comparing array[i] to numbers[0] but it doesn't seem like you can access set items that way. 

//====>Question for Austin, any easy way to pull a value from a set similar to how we index array elements (i.e. array[0])?

//REFACTOR WITH OBJECTS ===============================================================

//create a function that takes in array
const fullHouse = (array) => {
    //create an empty object to push to
    let numbers = {}

    //iterate through param array 
    for (let i = 0; i < array.length; i++) {
        //if element does noy exist as a key in our object
        if(!(array[i] in numbers)){
            //create a key: value pair in our object
            numbers[array[i]] = 1;
            // console.log('if pushed ' + array[i]);
        } else{
            //otherwise if it already exists in object, just increase our value or count
            numbers[array[i]] += 1
            // console.log('else pushed ' + array[i]);
        }  
    }
    // console.log(numbers);
    //object.keys(numbers) => returns an array of key names
    const objKeys = Object.keys(numbers)
    
    //if # of keys are not exactly equal to 2, return false, full house is impossible
    if (objKeys.length != 2){
        // console.log('if ran');
        return false
    } 
    //objKeys array at 0 wil return some key named after an occuring number
    //knowing there are only two keys(numbers), if value of a key is equal to 2 or 3, full house by default
    else if (numbers[objKeys[0]] === 2 || numbers[objKeys[0]] ===3) {
        // console.log('else if ran');
        return true
    }
    //knowing array.length = 2, but number does not occur twice or three times, return false
    else{
        // console.log('else ran');
        return false;
    }
}

//originally failed because I was referencing the key values wrong. Was unsure how to reference an unknown key but researched .key which is actually pretty helpful and it passed!

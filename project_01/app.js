
// 1
const word = "hello"

function wordReverse(varible){
 console.log(word.split('').reverse().join(''));
 
}
wordReverse(word)

// 2 
// String data type is used for storing and manipulating text

// methods: toSlice(),replace(),indexOf()

// Numbers data type is used for storing and manipulating numbers, numbers can be written with of without decimals

// methods: Number(),parseInt(),toString()



// 3

const score = -1;

function remark(score) {
  if (score >= 70 && score <= 100) {
    console.log("Excellent");
  } else if (score >= 60 && score <= 69) {
    console.log("Very Good");
  } else if (score >= 50 && score <= 59) {
    console.log("Good");
  } else if (score >= 40 && score <= 49) {
    console.log("Poor ");
  } else if (score >= 0 && score <= 39) {
    console.log("Very Poor");
  } else {
    console.log("Invalid Score");
  }
}
remark(score);

// 344. Reverse String
// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

var reverseString = function(s) {
 let arrStr = [...s];
 let count = 0;
  for(let i=arrStr.length-1; i>=0; i--) {
    s[count] = arrStr[i];
    count++;  
  }
};


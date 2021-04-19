//Convert Celsius to FahrenheitPassed
function convertToF(celsius) {
    let fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
}

convertToF(30);
//Reverse a String
function reverseString(str) {

    return str.split('').reverse().join('');
}

reverseString("hello");
//Factorialize a Number
function factorialize(num) {
    if (num === 0)
        return 1;
    else
        return num * factorialize(num - 1);
}

console.log(factorialize(5));
//Find the Longest Word in a String

function findLongestWordLength(str) {
    const arr = str.split(' ');
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max) {
            max = arr[i].length;
        }
    }
    return max;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");
//Return Largest Numbers in Arrays
function largestOfFour(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let largestNum = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {

            if (arr[i][j] > largestNum) {
                largestNum = arr[i][j];
            }
            res[i] = largestNum;
        }

    }

    return res;
    
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);
//Confirm the Ending
function confirmEnding(str, target) {
  
    if(str.substr(-target.length)===target)
        return true;
  
  return false;
}

confirmEnding("Bastian", "n");
//Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
    let repeatedStr = "";
    for(let i=0;i<num;i++)
    
      {
          repeatedStr+=str;
          
      }
      return repeatedStr;
  }
  
  console.log(repeatStringNumTimes("abc", 3));
//Truncate a String
function truncateString(str, num) {
    let newStr = "";
    if(str.length>num){
       newStr = str.slice(0,num);
       newStr+="..."
    }
    else{
      newStr = str;
    }
    return newStr;
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

//Finders Keepers
function findElement(arr, func) {
    let num = 0;
    for(let i =0;i<arr.length;i++){
      num = arr[i];
       if(func(num))
          return num;
    }
      return undefined;
  }
  
  const v =findElement([1,3,5,8,9,10], num => num % 2 === 0);
  console.log(v);
//Boo who
function booWho(bool) {
    if(typeof(bool)==='boolean')
      return true;
    else
      return false;
  }
  
  console.log(booWho([1,2]));

//Title Case a Sentence
function titleCase(str) {
    str =str.toLowerCase().split(' ');
    for(let i =0;i<str.length;i++){
      str[i] =str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
    return str.join(' ');
  }
  
  console.log(titleCase("I'm a little tea pot"));
  //Slice and Splice
  function frankenSplice(arr1, arr2, n) {
    let newArr = arr2.slice();
    for(let i=0;i<arr1.length;i++){
      newArr.splice(n,0,arr1[i]);
      n++;
    }
    return newArr;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5], 1));
  //Falsy Bouncer
  function bouncer(arr) {
    let newArr=[];
    for(let i=0;i<arr.length;i++){
      if(arr[i])
         newArr.push(arr[i]);
    }
    return newArr;
   }
   
   console.log(bouncer([7, "ate", "", false, 9]));
   //Where do I Belong
   function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort((a,b)=>a-b);
    let p;
    for(let i=0;i<arr.length;i++){
      if(arr[i]===num){
        p=arr.indexOf(arr[i]);
      }
    }
    return p;
  }
  
  console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
  //Mutations
  function mutation(arr) {
    let first=arr[0].toLowerCase();
    let sec=arr[1].toLowerCase();
    for(let i=0;i<sec.length;i++){
      if(first.indexOf(sec[i])<0)return false;
    }
    return true;
  }
  
  console.log(mutation(["hello", "neo"]));
  //Chunky Monkey
  function chunkArrayInGroups(arr, size) {
    let newArr=[]
   for (let i = 0; i < arr.length; i += size) {
      newArr.push(arr.slice(i, i + size));
    }
    return newArr;
  }
  
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
/*
            Strings
            1. Double quotes
            2. Single quotes
            3. Backticks


            Strings are immutable => you can't change the substring of a string.

            string => "hellojohnworld"
            substring => "s         t"

            let fruit = apple; 
               fruit = mango;

               "Hello" => H-e-l-l-o
                   pos => 0-1-2-3-4


            Accessing strings
            variable[pos]

        
        
        */

let fruits = "Mango";
console.log("string=>", fruits);

// console.log(fruits[2]);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// String methods
// string.toUppoerCase();

let name = "adhUTJLGgj";
console.log(name.toUpperCase());
console.log(name.toLowerCase());

console.log("welcome nodemon");

/*
            Finding a substring
            str.indexOf(a, b)=> if it found substring, return index or position. If not , then return -1;
            a => search string
            b => search start position


            str.includes(a, b) => return true if substring exist or else return false.
            a => search string
            b => search start position
        
        
        
        */

let str = "Hello, World";
// 0123456789,,,,
console.log("Finding substring=>", str.indexOf("World"));

console.log("Finding substring=>", str.indexOf("o  d", 8));

console.log("Using Includes=>", str.includes("d", 11));

/*
            Extracting substring
            1. str.slice()
            2. str.substring()
            3. str.substr()


            str.slice(a, b) => return "substring" in the range from a postion to b-1 position.
            a => index or pos
            b => index or pos
        
            a=1, b=6  =>123456


            str.substr(a, b) => return substring
            a => index
            b => length
        
        */

// "Hello, World"
//  0123456789
console.log("Extract using slice()=>", str.slice(0, 4)); // Hell0

console.log("Extract using slice-negative =>", str.slice(-4)); // str.substring(-6) => str.substring(0)


console.log("Extract using substring()=>", str.substring(0, 4));

console.log("Extracting using substr=>", str.substr(0,4));


let n1 = 10;
let n2 = 2;
let s1 = '1';
console.log(typeof n1);
console.log(n1 + parseInt(s1));


console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);

console.log(s1 + n1);

// 餘數
console.log(n1 % n2);
// -----------------------------------------------
//       0 1 2 3 4 5 6 7 8 9
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr[9]);

// i++意思是   i=i+1
// 布林 true為1 false為0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
        console.log(arr[i] + ':是奇數');
    }

};
// -----------------------------------------------
console.log(2 ** 10);
// -----------------------------------------------
let radius = 5;
let area = radius * radius * 3.14159;
console.log(area);


let area2 = radius ** 2 * 3.14159;
console.log(area2);

// -----------------------------------------------

let myName = 'claire';
let age = '25';
console.log(myName + ':' + age + 'years')

// -----------------------------------------------

let a = 5;
let b = '5';
console.log(a == b);
console.log(!(a == b));

console.log(a === b);
console.log(!(a === b));

// ---判斷式-------&&-------------------------------------
console.log(true && true)
console.log(false && true)
console.log(true && false)
console.log(false && false)
// ---判斷式--------||-----------------------------------
console.log(false || false)
console.log(true || true)
console.log(false || true)
console.log(true || false)


// -----------------------------------------------
let score = 60;
//          條件判斷式(三元運算值)
let show = (score >= 60) ? '分數及格' : '分數不及格';
console.log(score, show);
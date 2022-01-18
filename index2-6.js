let n1 = 9;
let n2 = 0.1;
let n3 = 0.2;
let n4 = n2 + n3

console.log(n4)

let n5 = '9';
let n6 = 9;

console.log(n5 === n6);


let s1 = '00000';
let s2 = 'abc';

let s3 = '\'國文\'';
let s4 = ' 80';

console.log(s1 + s2);
console.log(s3 + s4);

let s5 = '國文:80';

console.log(s5);

let s6 = 'your\n';

s6 += 'chince\n'
s6 += 'grouse' + s5;
console.log(s6);

let u1 = {};
console.log(u1.name);

let u2 = function(x, y) {
    x + y;
    return
}

console.log(u2(3, 4));


let nu1 = null;
console.log(nu1);

let x1 = 59;
let x2 = 100;
let x3 = 80;
let x4 = 40;
let x5 = 90;

console.log(x1)

//         0    1   2   3   4
let xx = [59, 100, 80, 40, 90]
// index索引 value

// console.log(xx[4]);


for (let i = 0; i < xx.length; i++) {
    console.log(xx[i]);
};

let card = {

    name: 'claire',
    tel: '0908088112',
    addr: 'Taiwan city',
    '職稱':'工程師'
};
console.log(card.name);
console.log(card.tel);
console.log(card.addr);

let y = 'name'
console.log(card[y]);

let x = '職稱';
console.log(card[x]);
console.log(card.職稱);

let zz=123;
let yy=zz;

yy=456;
console.log(zz);

let card1=card;
card1.name='123';
console.log(card1);

console.log(card.name);
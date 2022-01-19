let card = {

  name: 'claire',
  tel: '0908088112',
  addr: 'Taiwan city',
  '職稱':'工程師'
};


// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

for (let i in card){
  // console.log(i);
  // console.log(typeof i);
  console.log(card[i])
}
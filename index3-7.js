let rows =['a','b','c'];
  // console.log(rows[1])

//for of只能用在陣列
  let card1 = ['claire','0908088112','Taiwan city','工程師']

    for(let value of card1){
      console.log(value);
    }

//-------------------------------------------------------------


 //for in陣列跟屬性都可使用
let card = {

      name: 'claire',
      tel: '0908088112',
      addr: 'Taiwan city',
      '職稱':'工程師'
    };

    for(let i of card1){
      console.log(card[i]);
    }

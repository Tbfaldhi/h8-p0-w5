/*

*/
function shoppingTime(memberId, money) {

var sisa=money;
var Stacattu = 1500000;
var Zoro = 500000;
var HN = 250000;
var Uniklooh = 175000;
var Handphone = 50000;
var cart=[];

 if(money>1500000){
   sisa = money-Stacattu;
   cart.push('Sepatu Stacattu');
  }
      if(money>500000){
        sisa-=Zoro;
          cart.push('Baju Zoro');
        }
        if(money>250000){
         sisa-=HN;
         cart.push('Baju H&N');
        }
        if(money>175000){
        sisa-=Uniklooh;
        cart.push('Sweater Uniklooh');
        }
        if(money>=50000){
          sisa-=Handphone;
          cart.push('Casing Handphone');
        }

  if(memberId===''){
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  }else{
    if(money<=15000){
      return 'Mohon maaf, uang tidak cukup';
    }else{
      if(memberId===undefined && money=== undefined){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
      }
    }
  }

  var objProduct={};
  objProduct.memberId=memberId;
  objProduct.money=money;
  objProduct.listBarang=cart;
  objProduct.changeMoney=sisa;
  //return memberId;
  return objProduct;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

/*
init variabel untuk harga barang sepatu Stacattu, baju zoro,Casing Handphone, dan baju H&N
init variabel untuk sisa dengan nilai awal sama dengan money untuk menghasilkan nilai changeMoney
init var cart sebagai array kosong untuk menampung barang yang akan dibeli.
init var objProduct untuk defenisi kelompok objek yang mewakili memberId,money,listBarang, dan changeMoney
    jika member id adalah '' maka 'Mohon maaf, toko X hanya berlaku untuk member saja'
    jika money kurang dari 15000 maka Mohon maaf, uang tidak cukup
    jika nilai shoppingTime kosong adalah kosong atau undefined maka cetak 'Mohon maaf, toko X hanya berlaku untuk member saja'
        jika nilai kurang  atau sama dengan 1500000 maka push barang sepatu Stacattu ke cart dan kurangi money dengan harga barang
        jika nilai kurang  atau sama dengan 500000 maka push barang Baju Zoro ke cart dan kurangi money dengan harga barang
        jika nilai kurang  atau sama dengan 250000 maka push barang Baju H&N ke cart dan kurangi money dengan harga barang
        jika nilai kurang  atau sama dengan 175000 maka push barang Sweater Uniklooh ke cart dan kurangi money dengan harga barang
        jika nilai kurang  atau sama dengan 50000 maka push barang Casing Handphone ke cart dan kurangi money dengan harga barang
*/



function shoppingTime(memberId, money) {


var Stacattu = 1500000;
var Zoro = 500000;
var HN = 250000;
var Uniklooh = 175000;
var Handphone = 50000;
var sisa=money;
var cart=[];
var objProduct={};
    objProduct.memberId=memberId;
    objProduct.money=money;
    objProduct.listBarang=cart;
    objProduct.changeMoney=sisa;



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

if(money>=Stacattu){
   sisa = money-Stacattu;
   cart.push('Sepatu Stacattu');
  }
      if(money>=Zoro){
        sisa-=Zoro;
          cart.push('Baju Zoro');
        }
        if(money>=HN){
         sisa-=HN;
         cart.push('Baju H&N');
        }
        if(money>=Uniklooh){
        sisa-=Uniklooh;
        cart.push('Sweater Uniklooh');
        }
        if(money>=Handphone){
          sisa-=Handphone;
          cart.push('Casing Handphone');
        }



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

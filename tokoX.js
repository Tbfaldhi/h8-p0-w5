
/*
init list barang yang berisi product,harga dan stok
init tampungObj untuk menampung nilai array hasil perulangan yang akan ditampilkan
jika shoppers.length tidak sama dengan 0 maka
  buat perulangan untuk membaca isi array list barang dengan  index i;
      init var objShoppers untuk Object product, shoppers,leftOver dan totalProfit
      init var buyer dengan array kosong untuk menampung nama pembeli
      init var leftOver untuk  dengan nilai kosong untuk menampung nilai sisa barang
          buat perulangan untuk membaca isi array shopper dengan index j;
              jika Shoppers.product sama dengan listbarang dengan baris ke i dan kolom ke 0 dan
              shoppers.amount lebih kecil sama dengan list barang baris ke i kolom ke 2 maka
                leftOver sama dengan leftOver tambah shoppers[j].amount
                dan push ke array buyer shoppers[j].name
  init objShoppers.product adalah list barang baris ke i kolom ke 1
  init objShoppers.shoppers adalah isi array buyer
  init objShoppersl.leftOver adalah listBarang baris ke kolom ke 2 dikurangi leftOver
  init objShoppers.totalProfit adalah listBarang baris ke i kolom ke 1 dikali leftOver
  push objShoppers dari hasil perulangan ke tampungObj

kembalikan value dari nilai tampungObj
*/


function countProfit(shoppers) {
    var listBarang = [
        ['Sepatu Stacattu', 1500000, 10],
        ['Baju Zoro', 500000, 2],
        ['Sweater Uniklooh', 175000, 1]
    ];

    var tampungObj = [];

    if (shoppers.length !== 0) {
        for (var i = 0; i < listBarang.length; i++) {
            var objShoppers = {};
            var buyer = [];
            var leftOver = 0;
            for (var j = 0; j < shoppers.length; j++) {
                if (shoppers[j].product === listBarang[i][0] && leftOver + shoppers[j].amount <= listBarang[i][2]) {
                    leftOver += shoppers[j].amount;
                    buyer.push(shoppers[j].name);//console.log('++++++ '+shoppers[j].name);
                }
            }
            objShoppers.product = listBarang[i][0];//console.log('>>>>'+listBarang[i][0]);
            objShoppers.shoppers = buyer;//console.log('>>>>'+buyer);
            objShoppers.leftOver = listBarang[i][2] - leftOver;
            objShoppers.totalProfit = listBarang[i][1] * leftOver;
            tampungObj.push(objShoppers);
        }

        return tampungObj;
    } else {
        return [];
    }
}

// TEST CASES
console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Stacattu',
    amount: 2
}, {
    name: 'Vanessa',
    product: 'Sepatu Stacattu',
    amount: 3
}, {
    name: 'Rani',
    product: 'Sweater Uniklooh',
    amount: 2
}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Stacattu',
    amount: 8
}, {
    name: 'Vanessa',
    product: 'Sepatu Stacattu',
    amount: 10
}, {
    name: 'Rani',
    product: 'Sweater Uniklooh',
    amount: 1
}, {
    name: 'Devi',
    product: 'Baju Zoro',
    amount: 1
}, {
    name: 'Lisa',
    product: 'Baju Zoro',
    amount: 1
}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Naiki',
    amount: 5
}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]

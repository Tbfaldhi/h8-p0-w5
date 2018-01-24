/*
1.init kelompokAngka sebagai variabel array kosong
2.buat looping untuk memasukkan array kosong sebanyak 3 kedalam array kelompokArr
3.buat looping untuk membaca isi array dari kiri ke kanan dengan index j
    3a. jika array[j] adalah kelipatan 3 maka input ke array kelompok angka dengan index kolom 2
    3b. jika array[j] adalah angka genap  maka input array ke array kelompok angka dengnan index kolom 1
    3c. jika array[j] adalah angka ganjil maka input array ke array kelompok angka dengan index kolom 0
*/

function mengelompokkanAngka(arr) {
  var kelompokAngka = [];

  for (var i = 0; i < 3; i++) {
    kelompokAngka.push([]);
  }
  //console.log(kelompokArr);

  for (var j = 0; j < arr.length; j++) {
    if (arr[j] % 3 === 0) {
      //console.log(kelompokArr);
      kelompokAngka[2].push(arr[j]);
    } else {
      if (arr[j] % 2 === 0) {
        kelompokAngka[0].push(arr[j]);
      }else{if(arr[j]%2!==0){
        kelompokAngka[1].push(arr[j]);
       }
      }
    }
  }

  return kelompokAngka;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]

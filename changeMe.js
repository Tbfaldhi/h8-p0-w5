/*
buat kondisi jika isi array adalah 0 maka return string
buat perulangan untuk membaca isi array
  init variabel objek dengan nilai kosong
  jika nilai arr[3] adalah undefined maka push ke array invalid Birth Year
  lainnya
      buat key firstName dalam objData dengan isi array[i][0]
      buat key lastName dalam objData dengan isi array[i][1]
      buat key gender dalam objData dengan isi array[i][2]
      init var umur adalah tahun sekarang dikurangi arr[i][3]
      buat key age dalam objData dengan isi array[i][3]
*/





function changeMe(arr) {


  if(arr.length===0){
    console.log("''");
  }

  for(i=0;i<arr.length;i++){
    var objData={};
    if(!arr[i][3]){
      objData.firstName = arr[i][0];
      objData.lastName  = arr[i][1];
      objData.gender = arr[i][2];
      arr[i].push('invalid Birth Year');
      objData.age=arr[i][3];
    }else{
      objData.firstName = arr[i][0];
      objData.lastName  = arr[i][1];
      objData.gender = arr[i][2];
      var umur =2018-arr[i][3];
      objData.age=umur;
    }
   console.log(objData);
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""

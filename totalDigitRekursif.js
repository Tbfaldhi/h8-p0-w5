/*
jika angkastr.length adalah 0
  return 0
init varibel front untuk mengubah string menjadi angka
init variabel remainder untuk slice angka plng depan dan mengembalikan sisa nya
kembalikan nilai front ditambah fungsi totalDigitRekursif
*/

function totalDigitRekursif(angka) {
    // you can only write your code here!
    var angkaStr = angka.toString();

    if (angkaStr.length === 0) {
        return 0;
    } else {
        var front = Number(angkaStr[0]);
        var remainder = angkaStr.slice(1);
        return front + totalDigitRekursif(remainder);
    }
}

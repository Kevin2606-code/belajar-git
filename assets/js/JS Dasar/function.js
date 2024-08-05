// function namafunction(parameter, parameter)
// return menampilkan hasil


// function tambah(a, b){
//     return a + b;
// }

// argumen
// var a = parseInt(prompt('Masukkan angka 1'));
// var b = parseInt(prompt('Masukkan angka 2'));
// var hasil = tambah(a*6, b*6);
// console.log(hasil);

// function tambah(a, b) {
//     return a + b;
// }
// function kali(a, b) {
//     return a * b;
// }
// // argumen
// var hasil = kali(tambah(2, 3), tambah(5, 6));
// console.log(hasil);

// function jumlahVolumeDuaKubus(a, b) {

//     var volumeA;
//     var volumeB;
//     var total;

//     volumeA = a * a * a;
//     volumeB = b * b * b;
//     total = volumeA + volumeB;

//     return total;
// }

// alert(jumlahVolumeDuaKubus(8, 3));
// alert(jumlahVolumeDuaKubus(10, 8));

// function refactional
// function jumlahVolumeDuaKubus(a, b) {
//     return = a * a * a + b * b * b;
// }
// alert(jumlahVolumeDuaKubus(8, 3));
// alert(jumlahVolumeDuaKubus(10, 8));

function tambah() {
    var hasil = 0;
    for( var i = 0; i < arguments.length; i++ ) {
        hasil += arguments[i];
    }
    return hasil;

}
var coba = tambah(1,2,3,4);
console.log(coba);
// Menambah isi pada array

// var arr = ["kelas", 1, true];
// console.log(arr);

// var arr = [];
// arr [0] = "Kevin";
// arr [1] = "Andika";
// arr [2] = "Saputra";
// console.log(arr);

// Menghapus isi pada array
// var arr = ["Kevin", "Andika", "Saputra"];
// arr[0] = undefined;
// console.log(arr);

// Menambah isi pada array
// var arr = ["Kevin", "Andika", "Saputra", "Galang"];

// for (var i = 0; i < arr.length; i++) {
//     console.log('Masyarakat ' + arr[i]);
// }

// methode pada array
// 1.join 
// var arr = ["Kevin", "Andika", "Saputra", "Galang"];
// console.log(arr.join(' - '));

// push (menambah isi di akhir arraynya)
// arr.push("rafli", "akbar");
// console.log(arr);

// pop (menghapus isi di akhir arraynya)
// arr.pop();
// arr.pop();
// console.log(arr);

// unshift (menambah isi di awal arraynya)
// arr.unshift("intan", "dewi");
// console.log(arr);


// shift (menghapus isi di awal arraynya)
// arr.shift();
// console.log(arr);




// splice rumusnya (indexAwal, mauDiHapusBerapa, elemenBaru, elemenBaru2)

// arr.splice(4, 0, 'Jarbi', 'Zharbi');
// console.log(arr.join(' - '));

// slice
// rumusnya (awal, akhir)
// var arr = ["Kevin", "Andika", "Saputra", "Galang"];
// var arr2 = arr.slice(1,3);
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));

// foreach 
var angka = [1,2,3,4,5,6,7,8,9];
var nama = ['Kevin', 'Andika', 'Saputra', 'Galang']
    for(var i = 0; i < nama.length; i++) {
    console.log(nama[i]);
}

// angka.forEach(function(e) {
//     console.log(e);
// });
// nama.forEach(function(e, i) {
//     console.log('Karyawan ke ' + (i+1) + ' adalah : ' + e)
// })


// map
// var angka = [1,2,3,4,5,6,];
// var angka2 = angka.map(function(e) {
//     return e * 2;
// })
// console.log(angka2.join(' - '));


// sort 

// var angka = [1,2,3,10,20,40,4,5,6,9,7,8];
// angka.sort(function(a, b) {
//     return a-b;
// });
// console.log(angka.join(' - '));


// filter ( mencari banyak nilai )
// var angka = [1,2,3,4,7,8,40,29,20,22];
// var angka2 = angka.filter(function(x) {
//     return x > 3;
// });
// console.log(angka2.join(' - '));


// find (menemukan satu nilai)
// var angka = [1,2,3,4,7,8,40,29,20,22];
// var angka2 = angka.find(function(x) {
//     return x > 3;
// });
// console.log(angka2);
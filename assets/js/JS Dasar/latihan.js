
// LATIHAN JURAGAN ANGKOT 

// var jmlAngkot = 10;

// for( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ) {
//     if( noAngkot <= 4 && noAngkot !== 3) {
//         console.log('Angkot no ' + noAngkot + ' sedang beroperasi')
//     } else if( noAngkot === 5 || noAngkot === 3 || noAngkot === 9) {
//         console.log('Angkot no ' + noAngkot + ' sedang lembur')
//     } else {
//         console.log('Angkot no ' + noAngkot + '  sedang tidak beroperasi') 
//     }
// }


// LATIHAN BUAT GAME GAJAH, SEMUT, ORANG 

// var p = prompt('Masukkan : gajah, orang, semut');

// var comp = Math.random();

// if( comp < 0.34 ){
//     comp = ('gajah')
// } else if ( comp > 0.34 == 0.67) {
//     comp = ('orang')
// } else {
//     comp = ('semut')
// }

// var hasil = '';
// if( p == comp ) {
//     hasil = ('SERI')
// } else if ( p == 'gajah') {
//     // if( comp == 'orang') {
//     //     hasil('MENANG')
//     // } else {
//     //     hasil('KALAH')
//     // }
//     hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';
// } else if ( p == 'orang') {
//     hasil = (comp == 'gajah') ? 'KALAH' : 'MENANG';
// } else if ( p == 'semut' ) {
//     hasil = (comp == 'gajah')? 'MENANG' : 'KALAH';
// } else {
//     hasil = ('Yang anda masukkan salah')
// }

// alert('Kamu memilih ' + p + ' dan komputer memilih ' + comp + '\nHasil : ' + hasil);

// function declaration 
// lebih fleksibel dapat ditulis dimanapun (konsep hoisting)

// function namaFunction (parameter, parameter) {
//     // isi function 
//     return;
// }
// // argument 
// console.log(argument, argument)

// // function expression
// // harus didefinisikan lebih dulu
// // lebih powerfull (bisa dibuat closure, bisa untuk argument functon lain, dan IIFE )
// var namaFunction = function (parameter, parameter) {
//     // isi function
//     return;
// } 
// // argument
// namaFunction(argument, argument)

// function rekursif
function cetakAngka(n) {
    // base case : ketika n sama dengan 0, keluar loop
    if( n === 0 ) {
        return;
    }
    console.log(n);
    cetakAngka(n - 1);
}
cetakAngka(10);

// faktorial
function faktorial(n) {
    if( n === 0 ) {
        return 1;
    }
    return n * faktorial(n - 1);
}
console.log(faktorial(5));

// fibonacci
function fibonacci(n) {
    if( n <= 1 ) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(10));

console.log('hello, world!');
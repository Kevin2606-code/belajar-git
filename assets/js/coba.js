// Variable

// 1. Var = Old school
var x = 10;
x = 15; // jika ingin ubah data manual

// Variable modern
// 1. let (penamaan variable tidak boleh diawali dengan angka dan simbol kecuali ( _, $ ) )
let isCarBroken = false; // cara nulis variable let
let y = 0;
y = 20; // jika ingin ubah data manual


// 2. const (nilainya tidak bisa diubah)
const COLOR_RED = "red"; // cara nulis variable const
const z = 25;
// z = 30; // nilainya tidak bisa diganti/diubah


console.log(x);
console.log(y);
console.log(z);

// tipe data primitive
// string
let myName = "John Doe";

// number
let age = 30;

// null sudah ad anilainya tapi kososng
let nothing = null;

// undefined variablenya belum ada nilainya
let undef2 = undefined;
let undef

// boolean (false, true) untuk menentukan kondisi true / false
let isMarried = true;

// tipe data non primitive
// object untuk mendescripsikan sebuah kondisi, variable didalam variable 
const zenix = {
    brand: "toyota",
    mesin: "hybrid",
    warna: "black",
    tahun: 2024,
    punyaKevin: true,
    spec: { // nested (object didalam object)
        mesin: "2.o1",
        rangka: "TNGA"
    }
};
// cara nampilin object
console.log(zenix);
console.log(zenix.brand);
zenix.mesin = "diesel"; // nilai didalam object bisa dirubah
console.log(zenix);
// const zenix = { tidak bisa dirubah key nya apalgai value nya
//     brand: "suzuki",
//     mesin: "disel"
// }

// array untuk list (kumpulan user)
const mobilToyota = ["yaris", "innova", "fortuner"];
console.log(mobilToyota[2]);
mobilToyota[1] = "innova reborn"; // mengubah nilai di dalam array
console.log(mobilToyota[1]);

// array of object
const mobil = [
    {
        nama: "yaris",
        mesin: "hybrid",
        warna: "black",
        tahun: 2024,
        punyaKevin: true
    },
    {
        nama: "innova",
        mesin: "diesel",
        warna: "blue",
        tahun: 2023,
        punyaKevin: false
    }
];

console.log(mobil[0]);
console.log(mobil[1].warna);

// operator = - + * & % / !
// + namanya operator , angka 2, 1 namanya operand
// binary (operand ada dua atau lebih)
// unary (operand hanya ada 1)

// 1. Aritmatika
const tambah = 2 + 1;
const kurang = 2 - 1;
const kali = 2 * 1;
const bagi = 2 / 1;
const sisaBagi = 2 % 1;
const pangkat = 2**2;
console.log(tambah);
console.log(kurang);
console.log(kali);
console.log(bagi);
console.log(sisaBagi);
console.log(pangkat);

// 2. string concatenation (menggabungkan dua string)
const a = "jarbi";
const b = "djarbi";
const newText = a + ' ' + b;
console.log(newText);
console.log('1' + 1);
console.log('1' - 1);
console.log('10' - 1);
console.log('10' + true);
console.log('10' - true);
console.log('10' + ['car', 'motor']);

// assignment ( += , -= , *= , /= , %= )
let seribu = 1000;
seribu = seribu + 500;
seribu += 500;
console.log(seribu);

// logika ( > , < , <= , >= , == , === sama dengan , !== tidak sama dengan , != )
const x1 = 1;
const x2 = 2;
const result = x2 > x1;
console.log(result);

// equal untuk cek persamaan
console.log(1 === 1); // true yang bener
console.log('1' == 1); // true nilainya sama sudah cukup
console.log('1' === 1); // false untuk cek tipe data dan nilainya harus sama 

// not equal tidak sama dengan
console.log(1 !== 1); // yang bener
console.log('1' != 1); // nilainya sama sudah cukup
console.log('1' !== 1); // untuk cek tipe data dan nilainya harus sama 

// algoritma (flow chart)

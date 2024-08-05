// membuat object

// cara membuat object literal
// var kar1 = {
    // isi object namanya properti
    // key (nama ) dan value (Kevin Andika) kalo ada beberapa properti pisahkan dg ( , )
//     nama : "Kevin Andika",
//     noreg : 1426526,
//     nilai : [90, 89, 99.7],
//     alamat : {
//         jalan : "Jl. Haji Suwardi No.3",
//         kota : "Karawang",
//         provinsi : "Jawa Barat"
//     }
// };

var kar1 = {
    nama : "Kevin Andika",
    noreg : 1426526,
    department : "EPKD",
    line : "Produksi"
};

var kar2 = {
    nama : "Jarbi",
    noreg : 1426527,
    department : "EPKD",
    line : "Produksi"
};

// cara membuat object dengan function declaration
function createKaryawan(nama, noreg, department, line) { 
        let kar = {};
        kar.nama = nama;
        kar.noreg = noreg;
        kar.department = department;
        kar.line = line;
        return kar;
}
let kar3 = createKaryawan('Galang', '1426528', 'EPKD', 'Produksi' );
const kar4 = createKaryawan('Rafli', '1426529', 'EPKD', 'Produksi' );
console.log(kar4);

// cara membuat objet menggunakan constructor (function yang kusus untuk membuat object)

function Karyawan(nama, noreg, department, line) {
    // var this = {};
    this.nama = nama;
    this.noreg = noreg;
    this.department = department;
    this.line = line;
    // return this;
}
    // saat menambah nilai harus pakai NEW
var kar5 = new Karyawan('Akbar', '1426530', 'EPKD', 'Produksi');


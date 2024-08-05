// Menangkap pilihan player
var p = prompt('pilih : 1,2,3,4,5,6,7,8,9,10');
// Menangkap pilihan computer
// membangkitkan bilangan random
var comp = Math.round(Math.random() * 10);

for(var i = 3; i > 0; i--) {
    var p = prompt('Masukkan angka!');
}


// Menentukan rules
if( p == comp) {
    alert('Anda benar\nAngka yang di cari ' + comp );
}
else if( p !== comp) {
    alert('Angka yang anda masukkan salah')
}


// Tampilkan hasilnya
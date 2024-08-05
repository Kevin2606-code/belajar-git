var item = prompt('Masukkan nama makanan / minuman : \n (contoh : nasi, sate, daging, alcohol, softdrink)');

// switch ( item ) {
//     case 'nasi' : 
//         alert('Makanan Sehat');
//         break;
//     case 'sate' :
//         alert('Makanan Sehat');
//         break;
//     case 'daging' :
//         alert('Makanan Sehat');
//         break;
//     case 'alcohol' :
//         alert('Makanan Tidak Sehat');
//         break;
//     case 'softdrink' :
//         alert('Makanan Tidak Sehat');
//         break;
//     default :
//     alert('Makanan yang anda masukkan salah');
//     break;    
// }

switch ( item ) {
    case 'nasi' :
    case 'sate' :
    case 'daging' :
        alert('Makanan Sehat');
        break;
    case 'alcohol' :
    case 'softdrink' :
        alert('Makanan Tidak Sehat');
        break;
    default :
    alert('Makanan yang anda masukkan salah');
    break;    
}

// Jika anda tidak memasukkan break makan program akan di jalankan terus,
// jika anda menggunakan break program akan berhenti
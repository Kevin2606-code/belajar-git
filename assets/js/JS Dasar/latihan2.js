var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
    // jika penumpang kosong
    if ( penumpang.length == 0) {
    // tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    // kembalikan isi array & keluar dari function
    return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // jika kursi masih kosong, tambahkan penumpang di sini
            if (penumpang[i] == undefined) {
            // tambah penumpang dikursi tersebut
                penumpang[i] = namaPenumpang;
            // kembalikan isi array & keluar dari function
                return penumpang;
            } 
            // jika ada nama penumpang yang sama
            else if (penumpang[i] === namaPenumpang) {
            // tampilkan pesan error
            console.log('Penumpang '+ namaPenumpang +' sudah ada.');
            // kembalikan isi array & keluar dari function
            return penumpang;
            } else if( i == penumpang.length - 1) {
            // tambah penumpang di akhir arry
            penumpang.push(namaPenumpang);
            // kembalikan isi array & keluar dari function
            return penumpang;
            }
        }
    }
}

var hapusPenumpang = function(namaPenumpang, penumpang) {
    if(penumpang.length == 0) {
        console.log('Angkot Kosong.');
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] === namaPenumpang) {
                penumpang[i] = undefined;
            } else if(i == penumpang.length - 1) {
                console.log('Penumpang '+ namaPenumpang +' tidak ditemukan.');
                return penumpang;
            }
        }
    }
    return penumpang;
}
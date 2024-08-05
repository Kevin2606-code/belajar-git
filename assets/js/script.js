'use strict';
// DOM (Suatu object yang namanya document isinya adalah keseluruhan web server yang bisa akses elemen html dan css)
// bisa buat hitung lebar layar, ukuran content


const tipeDriver = document.getElementById('tipedriver');
const tanggal = document.getElementById('tanggal');
const waktu = document.getElementById('waktu');
const jumlahPenumpang = document.getElementById('jumlahPenumpang');
const cari = document.getElementById('cari');

const inputData = {
    tipedriver: '',
    tanggal: '',
    waktu: '',
    jumlahPenumpang: ''
};

// triger
// function supaya kita tidak menulis hal yang sama 2 kali, e adalah parameter berisi informasi yang akan kita olah didalam function, e berbentuk object
// target adalah elemennya, value adalah nilainya


cari.addEventListener('click', function(e) { 
    inputData.tipedriver = tipedriver.value
    inputData.tanggal = tanggal.value
    inputData.waktu = jam.value
    inputData.jumlahPenumpang = jumlahPenumpang.value

    getData(inputData);
});

// fetch = bisa untuk mengirim, mengambil mengupdate

async function getData(inputData) {
    let itemHtml;
    const getCars = await fetch('https://api-car-rental.binaracademy.org/customer/car')
    const result = await getCars.json()
    const data = Binar.populateCars(result);

    const filterData = data.filter(function(e){
        return e.typeDriver === inputData.tipedriver
    })

    filterData.forEach(element => {
        itemHtml += `
        <div class="col-4">
            <img class="img-fluid "src="${element.image}" />
            <h3>${element.name}</h3>
        </div>`

    })

    document.getElementById('searchresult').innerHTML = itemHtml

}
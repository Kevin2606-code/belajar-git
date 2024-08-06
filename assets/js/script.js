
// DOM (Suatu object yang namanya document isinya adalah keseluruhan web server yang bisa akses elemen html dan css)
// bisa buat hitung lebar layar, ukuran content


const tipeDriver = document.getElementById('tipedriver');
const tanggal = document.getElementById('tanggal');
const waktu = document.getElementById('waktu');
const jumlahPenumpang = document.getElementById('jumlahPenumpang');
const cari = document.getElementById('cari');
const srcResult = document.getElementById('srcResult');


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

// fetch = bisa untuk mengirim, mengambil, mengupdate


async function getData(inputData) {
    let itemHtml;
    const getCars = await fetch('https://api-car-rental.binaracademy.org/customer/car')
    const result = await getCars.json()
    const data = Binar.populateCars(result);

    const filterData = data.filter(function(e){
        return e.typeDriver === inputData.tipedriver
    });
    console.log(filterData);

    document.getElementById('srcResult').innerHTML = itemHtml
    srcResult.innerHTML = '';
    filterData.forEach(item => {
        srcResult.innerHTML += `<div class="col-12 col-md-6 col-lg-4 mb-3 mt-3">
        <div class="card" >
            <img src="${item.image}" style="width: 100%; height: 200px;" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <h2>Rp. ${new Intl.NumberFormat('id-ID').format(item.price)} / hari</h2>
                <p> ${item.description}</p>
                <p><img src="assets/img/fi_users.svg"/> ${item.capacity} orang</p>
                <p><img src="assets/img/fi_settings.svg"/> ${item.transmision}</p>
                <p><img src="assets/img/fi_calendar.svg"/> ${item.tahun}</p>
                <a href="#" class="btn btn-success" style="width: 100%">Pilih Mobil</a>
            </div>
        </div>
    </div>`
    });

};




// cara 1 - function declaration
function halo() {
    console.log(this);
    console.log('Halo, Selamat datang!');
}
this.halo();
// this mengembalikan object global

// cara 2 - object literal
var obj = {};
    obj.halo = function() {
        console.log(this);
        console.log('Halo, Selamat datang!');    
}
obj.halo();
// this mengembalikan object yang bersangkutan 

// cara 3 - constructot
function Halo() {
    console.log(this);
    console.log('Halo, Selamat datang!');    
}
var obj1 = new Halo();
var obj2 = new Halo();
// this mengembalikan object yang baru dibuat
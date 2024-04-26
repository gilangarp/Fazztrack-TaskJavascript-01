//input nilai segitiga
const printSegitiga = 5 ;

function nilaiSegitiga(printSegitiga){
    // Validasi input
    if (typeof printSegitiga !== 'number') {
        //jika bukan number di kembalikan 
        return "Data harus number";
    }
    // variabel untuk menyimpan segitiga yang akan dicetak
    let segitiga = '';
    // Perulangan untuk membentuk baris-baris segitiga terbalik
    for (let i = printSegitiga; i >= 1; i--) {
        // Perulangan untuk membentuk angka pada setiap baris
        for (let j = 1; j <= i; j++) {
            // Menambahkan angka dan spasi ke variabel segitiga
            segitiga += j + ' ';
        }
        // Menambahkan baris baru
        segitiga += '\n';
    }
    // Mengembalikan hasil var segitiga 
    return segitiga;
}
// Menampilkan hasil output segitiga di console
console.log(nilaiSegitiga(printSegitiga));
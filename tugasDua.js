//input nilai un
const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa =  90;

function nilaiUn(mtk, bahasaIndonesia, bahasaInggris ,ipa){
    // Validasi input
    if (
        typeof (mtk , bahasaIndonesia , bahasaInggris , ipa) !== "number" || nilaiUn >= 0
    ){
        //jika bukan number di kembalikan 
        return "Semua nilai harus diisi dan berupa angka.";
    }

    // Hitung rata-rata(var rataRata)
    var rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;

     // Tentukan grade
     var grade;
     if (rataRata >= 90 && rataRata <= 100) {
         grade = "A";
     } else if (rataRata >= 80 && rataRata < 90) {
         grade = "B";
     } else if (rataRata >= 70 && rataRata < 80) {
         grade = "C";
     } else if (rataRata >= 60 && rataRata < 70) {
         grade = "D";
     } else {
         grade = "E";
     }
 
     //mengembalikan hasil var rataRata dan var grade
     return "Rata-Rata : " + rataRata + "\n" + "Grade: " + grade;
}

//output hasil nilai
console.log(nilaiUn(mtk, bahasaIndonesia, bahasaInggris ,ipa))
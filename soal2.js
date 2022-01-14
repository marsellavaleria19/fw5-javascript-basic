var mtk = 90
var bahasaIndonesia = 90
var bahasaInggris = 90
var ipa = 90

let validasi = ((mtk == undefined || mtk == null || mtk == "") ||
    (bahasaIndonesia == undefined || bahasaIndonesia == null || bahasaIndonesia == "") ||
    (bahasaInggris == undefined || bahasaInggris == null || bahasaInggris == "") ||
    (ipa == undefined || ipa == null || ipa == "")) ? true : false

let grade = ""
let average = 0
if (validasi == false) {
    average = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4
    if (average >= 90 && average <= 100) {
        grade = "A"
    } else if (average >= 80 && average <= 89) {
        grade = "B"
    } else if (average >= 70 && average <= 79) {
        grade = "C"
    } else if (average >= 60 && average <= 69) {
        grade = "D"
    } else if (average >= 0 && average <= 50) {
        grade = "E"
    } else {
        grade = "None"
    }
    console.log(`Rata-rata = ${average}`)
    console.log(`Grade = ${grade}`)

} else {
    console.log("Semua nilai harus diisi.");
}




// let rataRata = 0
// let grade = ""

// if(mtk!==null && mtk!==undefined){
//     if(bahasaIndonesia!==null && bahasaIndonesia!==undefined){
//         if(bahasaInggris!==null && bahasaInggris!==undefined){
//             if(ipa!==null && ipa!==undefined){
//                 rataRata = (mtk+bahasaIndonesia+bahasaInggris+ipa)/4
//                 if(rataRata >=90 && rataRata<=100){
//                     grade = "A"
//                 }
//                 else if(rataRata >=80 ){
//                     grade = "B"
//                 }
//                 else if(rataRata >=70){
//                     grade = "C"
//                 }
//                 else if(rataRata >=60){
//                     grade = "D"
//                 }
//                 else if(rataRata>=0){
//                     grade = "E"
//                 }
//                  else{
//                      grade = "None"      
//                  }
//             }
//         }
//     }
// }

// console.log(`Rata-rata = ${rataRata}`)
// console.log(`Grade = ${grade}`)
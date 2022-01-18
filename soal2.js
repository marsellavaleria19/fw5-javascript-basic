var mtk = 80
var bahasaIndonesia = 90
var bahasaInggris = 89
var ipa = 69
var validasi = false
var nilai = [mtk, bahasaIndonesia, bahasaInggris, ipa]
var dataGrade = [
    [0, 59, "E"],
    [60, 69, "D"],
    [70, 79, "C"],
    [80, 89, "B"],
    [90, 100, "A"]
]
var grade = 0
var average = 0
var total = 0
for (var i = 0; i < nilai.length; i++) {
    if (nilai[i] == undefined || nilai[i] == null || nilai[i] == "") {
        validasi = true
    } else {
        total = total + nilai[i]
    }
}

if (validasi == false) {
    average = total / nilai.length
    for (var j = 0; j < dataGrade.length; j++) {
        if (average >= dataGrade[j][0] && average <= dataGrade[j][1]) {
            grade = dataGrade[j][2]
        }
    }
    console.log(`Rata-rata= ${average}`)
    console.log(`Grade = ${grade}`)
} else {
    console.log("Semua nilai harus diisi")
}




// let validasi = false
// if ((mtk == undefined || mtk == null || mtk == "") ||
//     (bahasaIndonesia == undefined || bahasaIndonesia == null || bahasaIndonesia == "") ||
//     (bahasaInggris == undefined || bahasaInggris == null || bahasaInggris == "") ||
//     (ipa == undefined || ipa == null || ipa == "")) {
//     validasi = true
// }

// let grade = ""
// let average = 0
// if (validasi == false) {
//     average = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4
//     if (average >= 90 && average <= 100) {
//         grade = "A"
//     } else if (average >= 80 && average <= 89) {
//         grade = "B"
//     } else if (average >= 70 && average <= 79) {
//         grade = "C"
//     } else if (average >= 60 && average <= 69) {
//         grade = "D"
//     } else if (average >= 0 && average <= 50) {
//         grade = "E"
//     } else {
//         grade = "None"
//     }
//     console.log(`Rata-rata = ${average}`)
//     console.log(`Grade = ${grade}`)

// } else {
//     console.log("Semua nilai harus diisi.");
// }
//buat function dimana angka2 dibawah dijadiin odd atau even tergantung angkanya
//1,3,4,5
const index1 = [1, 3, 4, 5] 
const index2 = [22, 17, 19, 20, 14]
const index3 = [1, 3, 5]
const index4 = [2, 4, 6]

function apa(angka){
    var temp = [];
    angka.map(function(val){
        if(val %2==0){
            temp.push("even")
        }else {
            temp.push("odd")
        }
    })
    return temp
}



console.log(apa(index1))
console.log(apa(index2))
console.log(apa(index3))
console.log(apa(index4))

// console.log(angka[index2])
// console.log(angka[index3])
// console.log(angka[index4])

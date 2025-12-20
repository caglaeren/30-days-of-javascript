const date = new Date()

let year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate(),
    hour = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    dayNumber = date.getDay()
    
//Bir insanın okuayabileceği şekil:
// 16 Şubat 2025, Pazar, 00:14:30 gibi
//Ama bunları yazarken bana Ocak ya da Pazar değil 0, 1 şeklinde yazacak

//Days diyerek günlere erişelim
let days = [
    'Pazar',
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi'
]


//Aylar için bir dizi oluşturalım
let months = [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık',
]
// console.log(months[0]) //dersek ocak ayına erişiriz
//months[month] şehlinde yazıyoruz

// let humanReadableDate = `${day}  ${months[month]} ${year}, ${days[dayNumber]}, ${hour}:${minutes}:${seconds}`
// console.log(humanReadableDate)


//Exercies 2: write a sript that prompt the user to enter base and height 
// and calculate an area of a triangle (area=0.5*b*h)

// let base = parseFloat(prompt('Enter the base of triangle: '))
// let height = parseFloat(prompt('Enter the height of triangle: '))
// let area= 0.5*base*height
// console.log(`The are of the triangle is ${area}`)


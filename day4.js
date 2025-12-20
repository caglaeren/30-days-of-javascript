let num=3
if(num>0){
    console.log(`${num} is positive number.`)
} else{
    console.log(`${num} is a negative number`)
}
//3 is a positive number yazar

num = -3
if(num>0){
    console.log(`${num} is a positive number`)
}else{
    console.log(`${num} is a negative number`)
}
//-3 is a negative number yazar



// let isRaining = true
// if (isRaining) {
//     console.log('Remember to take your rain coat')
// }

let isRaining = false
if (isRaining) {
    console.log('Remember to take your rain coat')
}else{
    console.log('Hava günesli semsiyeye gerek yok')
}
//else blogu calısır burada

//kullanıcıdan prompt ile bilgi alalım
// let result = prompt('2 + 5 kaç yapar?' , '2+5 ')
// if(result==='7'){
//     console.log('Doğru cevabı verdin')
// }else{
//     console.log('Yanlıs cevap üzgünüm. Dogru cevap 7.')
// }


//ELSE IF ORNEGİ
let a = 0
if(a>0){
    console.log(`${a} is a positive number`)
} else if(a<0){
    console.log(`${a} is a negative number`)
}else if(a==0){
    console.log(`${a} is zero `)
} else{
    console.log(`${a} is not a number`)
}


//hava icin yapalım
let weather = 'sunny'
if(weather==='rainy'){
    console.log('You need a rain coat')
}else if(weather === 'cloudy'){
    console.log('it might be cold, you need a jacket')
}else if(weather==='sunny'){
    console.log('go out freely')
}else{
    console.log('no need for a rain coat')
}

//SWITCH-CASE
let hava = 'cloudy'
switch(hava){
    case 'rainy':
        console.log('Yağmurluk giyiniz')
        break
    case 'cloudy':
        console.log('hava soguk olabilir ceket giyin')
        break
    case 'sunny':
        console.log('hava gunesli gez cık dolas')
        break
    default:
        console.log('yagmurluga gerek yoook')
}


//switch case prompt ile yazalım
// let dayUserInput = prompt('Bugün günlerden nedir?')
// let gun = dayUserInput.toLowerCase()
// switch(gun){
//     case 'pazartesi':
//         console.log('Bugün pazartesi')
//         break
//     case 'salı':
//         console.log('Bugün salı')
//         break
//     case 'çarşamba':
//         console.log('Bugün çarşamba')
//         break
//     case 'perşembe':
//         console.log('Bugün perşembe')
//         break
//     case 'cuma':
//         console.log('Bugün cuma')
//         break
//     case 'cumartesi':
//         console.log('Bugün cumartesi')
//         break
//     case 'pazar':
//         console.log('Bugün pazar')
//         break
//     default:
//         console.log('haftanın bir günü değil ki bu')
// }

//switch case sayı örneği prompt ile
let sayii = prompt('Bir sayı girin: ')
switch(true){
    case sayii > 0:
        console.log('Sayii pozitif')
        break
    case sayii < 0:
        console.log('Sayii nehgatif')
        break
    case sayii == 0:
        console.log('Sayii sıfır')
        break
    default:
        console.log('Geçerli sayı girmediniz')
}

//Get user input using prompt(“Enter your age:”). If user is 18 or older ,
//  give feedback:'You are old enough to drive' but if not 18 give another
//  feedback stating to wait for the number of years he needs to turn 18.
let yasGir = parseInt(prompt('Yaşınızı giriniz: '))
if(yasGir>=18){
    console.log('Araba sürmek için yaşınız yetiyor.')
}
else{
    let kalanYas = 18-yasGir
    console.log(`Yaşınız ${yasGir} ve araba sürmek için ${kalanYas} yıl daha beklemelisiniz`)
}

//Compare the values of myAge and yourAge using if … else. 
// Based on the comparison and log the result to console stating who 
// is older (me or you). Use prompt(“Enter your age:”) 
// to get the age as input.
let benimYasim = 24
let seninYas = parseInt(prompt('Yaşınızı giriniz: '))
let kacYasBuyuk
if(benimYasim>seninYas){
    kacYasBuyuk = benimYasim-seninYas
    console.log(`Ben senden ${kacYasBuyuk} yaş büyüğüm`)
}
else if(benimYasim==seninYas){
    console.log('Aynı yaştayız')
}
else if(benimYasim<seninYas){
    kacYasBuyuk = seninYas-benimYasim
    console.log(`Sen benden ${kacYasBuyuk} büyüksün`)
}else{
    console.log('hatalı yaş girdin')
}

//Sayı çifr mi tek mi bakalım
let sayiG = parseInt(prompt('Sayı girin: '))
if(sayiG%2==0){
    console.log(`${sayiG} bir çift sayıdır`)
}
else{
    console.log(`${sayiG} bir tek sayıdır`)
}

//NOT 
let not = parseInt(prompt('Sınavdan aldığınız notu giriniz: ', 'Not 0-100 arası olmalı'))
if(not >=80 && not <=100){
    console.log(`Notunuz ${not} ve A aldınız`)
}else if(not>=70 && not<=79){
    console.log(`Notunuz ${not} ve B aldınız`)
}else if(not>=60 && not <=69){
    console.log(`Notunuz ${not} ve C aldınız`)
}else if(not>=50 && not<=59){
    console.log(`Notunuz ${not} ve D aldınız`)
}else {
    console.log(`Notunuz ${not} ve F aldınız`)
}
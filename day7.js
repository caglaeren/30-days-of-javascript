function sayHello(){
    console.log("hello!")

}
sayHello() //fonksiyonu çağırmazsam hello!'yu ekrana basmaz


//parametre almayan ve geriye bir şey döndürmeyen fonksiyon
function square(){
    let num = 2
    let sq = num * num
    console.log(sq)
    
}
square()

function addTwoNumbers(){
    let numOne = 10
    let numTwo = 30
    let sum = numOne + numTwo

   console.log(sum)
}
addTwoNumbers()

//fonksiyon dışında değişken tnaımlayıp fonksiyon içinde çağırmayı deneyelim
//let msg = "Merhaba Javascript"
function message(){
    let msg = "Merhaba Dünya"
    console.log(msg) //hangi msg'ı ekrana basar?
}
message() 
//console.log(msg) //fonksiyonu çağırdıktan sonra msg değişkenine erişemeyiz çünkü fonksiyonun kapsamı dışındadır.

//fonksiyon içinde değişken tanımlamadan dışarıdaki değişkeni alabilir miyiz?
let msg = "Merhaba Javascript"
function messageTwo(){
    console.log(msg) 
}
messageTwo()

//Fonksiyonlar geriye değer döndürebilir. Eğer bir şey döndürmüyorsa 'undefined' döndürüyordur
// let msg2 = "Merhaba"

// function messageNew(){
//     let msg2= "Hellooooo"
//     console.log(msg2)
// }

// let hello = messageNew() //fonksiyonu çağırdık
// console.log(hello) //fonksiyon bir şey döndürmediği için 'undefined' döner ve çıktıda "Helloooo" ve undefined görürüz


//return ile yazarsak
let msg3 = "Merhaba"

function messageNews(){
    let msg3= "Mesaj 3"
    //return msg3 
    return ['hello','wordl'] //bu şekilde dizi de döndürebiliriz
}
let hello2 = messageNews()
console.log(hello2) //fonksiyon bir şey döndürdüğü için "Mesaj 3" görürüz


//------- Parametre alan fonksiyonlar-----------

 //parametre alan fonksiyon
 function multiply(num1, num2){

    return num1 * num2
 }
 let total = multiply(5,3) //fonksiyonu çağırırken argümanları göndermeliyiz
 console.log(total)

 //değişken atayarak da yapabiliriz
 function toplama(num1,num2,num3){
    let topla = num1 + num2 + num3 //bu şekilde değişkene de atabilliriz

    return topla
 }
 let sonuc = toplama(5,6,7)
 console.log(sonuc)

 //şu şekilde de yapabiliriz
 function multiply2(num1, num2){

    let carp = num1 * num2
    return carp
 }
 let num1 = 10, num2 = 2
 let total2 = multiply2(num1,num2) //fonksiyonu çağırırken argümanları göndermeliyiz
 console.log(total2)

//dizinin değerlerini toplayan bir fonksiyon
 function sumArrayValues(array){
    console.log(array) // 2 4 6 8 10 diye diziyi ekrana basar

 }
 let dizi = [2,4,6,8,10]
 sumArrayValues(dizi)

 //bir dizi oluşturduk ve bu fonksiyonun içinde dizideki elemanları toplayıp sonucu döndürelim
 function sumArrayValues2(array){
    let toplamm = 0
    for(let i = 0; i<array.length; i++){
        toplamm += array[i]

    }
    return toplamm

 }
 let dizi2 = [3,5,7,9,11]
 console.log("Toplam: ", sumArrayValues2(dizi2)) //35 verir


 // ------- Argument Functions ----------
 function toplayalim(){
    console.log(arguments) //arguments objesi fonksiyonun tüm argümanlarını tutar
 }
 toplayalim(2,5,7,9,10)

 //for ile toplama yapalım:
 function toplayalim2(){
    let toplam = 0
    for(let i =0; i<arguments.length; i++){
        toplam += arguments[i]
    }
    return toplam
 }
 console.log("Toplam: ", toplayalim2(2,5,7,9,10)) //33 verir


 //---------------Anonymous Function (İsimsiz Fonksiyon)-----------------
 const anonimFunc = function(){
    console.log("Ben anonim bir fonksiyonum")
 }
 
 const sayHi = function(ad){
    return `Hello ${ad}`
 }
 console.log(sayHi('Ali')) //Hello Ali döner


 //-------------Expression Function (İfade Fonksiyonu)-----------------
 //Fonksiyonu değişkene atayarak tanımlarız ve fonksiyon anonim de olabilir.
 //ikisi de isimsiz fonksiyonlardır:
 const topplayalimIfade = function(a,b){
    return a+b
 }
 console.log(topplayalimIfade(4,5)) //9 döner

 
 const squareIfade = function(n){
    return n*n
 }
 console.log(squareIfade(6)) //36 döner

 //--------------Self Invoking Function (Kendi Kendini Çağıran Fonksiyon)-------------
 let squaredNum = (function(r){
    return r*r
 }) (4); //16 döner

 (function(a){
    console.log(a+a)
 })(12)


 //--------------Arrow Function (Ok Fonksiyonu)-------------  
 
 //normal function:
 function hello11(name){
    return `Hello ${name}`
 }

 //arrow function
 const helloow = name =>`Hello ${name}`

 console.log(helloow('Mehmet')) //Hello Mehmet döner

 //iki paremetreli olursa:
 const ikiParametreli = (name,surname) => `Hello ${name} ${surname}`
 console.log(ikiParametreli('Ayşe','Yılmaz')) //Hello Ayşe Yılmaz döner
 

//... rest operator kullanımı (Rest Parameters)
 const toplamaca = (... numbers) => {
    console.log(numbers) //gönderilen tüm argümanları dizi olarak alır
 }
 toplamaca(2,4,6,8,10)

 const kalanlar = (num1, num2, ...numbers) =>{
    console.log(num1) //bunu diziye atmaz
    console.log(num2) //bunu da diziye atmaz
    console.log(numbers) //geriye kalan tüm argümanları dizi olarak alır
 }
 kalanlar(2,4,5,6,7,8,9,10)


 //------Varsayılan parametreler ile fonksiyon tanımlama--------
function carpmaIslemi(num1, num2 = 4){
    return num1 * num2  
}
console.log(carpmaIslemi(5)) //num2 tanımlanmadığı varsayılanı alır
console.log(carpmaIslemi(15,6)) //num2 6 olur, varsayılanı almaz. 90 verir



// ----------------Exercises-------------------
//1-fullName adlı bir fonksiyon tanımlayın ve bu fonksiyon tam adınızı yazsın
function fullName(){
   let firstName="Cagla"
   let lastName ="Eren"
   console.log(`${firstName} ${lastName}`)

}
fullName()


//2-fullName adlı bir fonksiyon tanımlayın ve bu fonksiyon fistName ve lastName parametrelerini alarak tam adınızı döndürsün
function fullName2(firstName,lastName){
   return `Your full name is ${firstName} ${lastName}`
}
console.log(fullName2("Cagla","Erenn"))

//3- addNumbers adlı bir fonksiyon tanımlayın ve bu fonksiyon iki parametre alsın ve sum (toplamı) döndürsün
function addNumbers2(numara1, numara2){
   let sum = 0
   sum = numara1 + numara2
   return sum
}
console.log(addNumbers2(30,25))

//4-Bir dikdörtgenin alanı şu şekilde hesaplanır: alan = uzunluk x genişlik
//areaOfRectangle adlı bir fonksiyon tanımlayın ve alanı hesaplayın
function areaOfRectangle(uzunluk,genislik){
   let alan = uzunluk * genislik
   return `Alan: ${alan}`
}
console.log(areaOfRectangle(6,14)) // Alan: 84 verir

//5-Bir dikdörtgenin çevresi şu şekilde hesaplanır: çevre = 2 x(uzunluk + genişlik)
//perimeterOfRectangle adlı bir fonksiyon tanımlayın ve çevreyi hesaplayın
function perimeterOfRectangle(uzunluk2,genislik2){
   let cevre = 2 * (uzunluk2 + genislik2)
   return `Çevre: ${cevre}`
  
}
console.log(perimeterOfRectangle(5,10)) //Çevre: 30 verir

//6-Dikdörtgen prizmanın hacmi şu şekilde hesaplanır: hacim = uzunluk x genişlik x yükseklik
//volumeOfRectPrism adlı bir fonksiyon yazıp hacmi hesaplayın
function volumeOfRectPrism(uzunluk3,genislik3,yukseklik3){
   let hacim = uzunluk3 * genislik3 * yukseklik3
   return `Hacim: ${hacim}`

}
console.log(volumeOfRectPrism(4,5,6)) //Hacim: 120 verir

//7-Bir dairenin alanı şu şekilde hesaplanır alan = pi x r x r 
// areaOfCircle alanını hesaplayan bir fonksiyon yazın
function areaOfCircle2(r) {
   let pi = Math.PI
   let daire_alani = pi * r - r
   return `Daire Alani: ${daire_alani}`
}
console.log(areaOfCircle2(5))

//8- Bir dairenin çevresi şu şekilde hesaplanır : çevre = 2πr
//circumofCircle fonksiyonunu hesaplayın
function circumOfCircle(r){
   let pi = Math.PI
   let daire_cevresi = 2 * pi * r
   return `Dairenin çevresi: ${daire_cevresi}`
}
console.log(circumOfCircle(6))

//9-Bir maddenin yoğunluğu şu şekilde hesaplanır: yogunluk = kütle / hacim
//kütle:mass, hacim:volume
function density(mass,volume){
   let yogunluk = mass / volume
   return yogunluk
}
console.log(density(50,4))

//10-Hız, hareket eden bir nesnenin kat ettiği toplam mesafenin, harcanan toplam süreye bölünmesiyle hesaplanır
// hareket eden bir nesnenin hızını hesaplayan bir fonksiyon yazın
function hiz_hesabi(mesafe,sure){
   let hiz = mesafe / sure
   return `Hızınız: ${hiz} km'dir.`
}
console.log(hiz_hesabi(400,18))

//11-Bir maddenin ağırlığı şu şekilde hesaplanır: ağırlık = kütle x yerçekimi
//Ağırlığı hesaplayan bir fonksiyon yazın
function calculateWeight(mass, gravity = 9.8){
   let weight = mass * gravity
   return `Agirlik: ${weight}`
}
console.log(calculateWeight(6));
console.log(calculateWeight(6, 3.7))

//12- oC cinsinden sıcaklık şu formülle hesaplanır: oF = (oC x 9/5) +32 bu oC'yi oF'ye dönüşrüten fonksiyon yazalım
function convertCelciusToFahrenheit(celcius){
   let sicaklik = (celcius * 9/5) +32;
   return `Sicaklik: ${sicaklik}`
}

console.log(convertCelciusToFahrenheit(30))
console.log(convertCelciusToFahrenheit(0))

//13-Vücut kitle indeksi (BMI): kg cinsinden agırlık / (boy * boy) m2 cinsinden.
//BMI'yi hesaplayan fonksiyon yazalım. BMI, 20 yaş ve üstü yetişkinlerde farklı ağırlık gruplarını
//genel olarak tanımlamak için kullanılır. Aşağıdaki bilgilere göre bir kişinin zayıf, normal, fazla kilolu veya obez olup
//olmadıgını kontrol edelim.
//Aynı gruplar hem erkekler hem de kadınlar için geçerlidir.
//Zayıf: BMI 18,5'ten az
//Normal kilo: BMI 18,5 ile 24,9 arası
//Aşırı kilo: BMI 25 ile 29,9 arası
//Obez: BMI 30 veya daha fazla

function bmiCalculate (weight,height){
   let bmi = weight / (height * height)
   if(bmi < 18.5){
      return `Kilonuz ${weight} ve bmi sonucunuz ${bmi} Zayıfsınız.`
   } else if(bmi >=18.5 && bmi <=24.9){
      return `Kilonuz ${weight} ve bmi sonucunuz ${bmi}. Normal kilodasınız.`
   }else if(bmi>=25 && bmi <=29.9){
      return `Kilonuz ${weight} ve bmi sonucunuz ${bmi}. Aşırı kilonuz var.`
   }else{
      return `Kilonuz ${weight} ve bmi sonucunuz ${bmi}. Obezsiniz.`
   }

}

console.log(bmiCalculate(40, 1.65)) //zayıf
console.log(bmiCalculate(62, 1.70)) //normal
console.log(bmiCalculate(100, 1.82)) //obez
console.log(bmiCalculate(81,1.74)) //aşırı kilo

//14-checkSeason adlı bir fonksiyon yazın ve bu fonksiyon bir ay (month) parametresi alır ve mevsimleri döndürür
//sonbahar-kış-ilkbahar-yaz dönecek
function checkSeason(monthsD){
   // monthsD = monthsD.toLowerCase()
   
   if(monthsD ==="Aralık"  || monthsD ==="Ocak" || monthsD==="Şubat"){
      return `${monthsD} ayı kış mevsimidir.`
   }else if(monthsD ==="Mart"  || monthsD ==="Nisan" || monthsD==="Mayıs"){
      return `${monthsD} ayı ilkbahar mevsimidir`
   }else if(monthsD==="Haziran"  || monthsD ==="Temmuz" || monthsD==="Ağustos"){
      return `${monthsD} ayı yaz mevsimidir.`
   }else if(monthsD==="Eylül" || monthsD==="Ekim" || monthsD==="Kasım"){
      return `${monthsD} ayı sonbahar mevsimidir.`
   }
   else{
      return "Invalid month name"
   }
}
console.log(checkSeason("Şubat"))
console.log(checkSeason("Nisan"))
console.log(checkSeason("Ekim"))
console.log(checkSeason("kasim"))

//15-Math.max en büyük argümanı döndürür. Bu yöntemi kullanmadan 3 argüman alan ve bunların maksimum değerini döndüren
//findMax fonksiyonunu yazın
function findMax(a,b,c){
   let max= a
   if(b>max){
      max = b
   }
   if(c>max){
      max = c
   }
   return max
}
console.log(findMax(0,10,5)) //10
console.log(findMax(0,-10,-2)) //0
let numOne = 3
let numTwo = 3

console.log(numOne==numTwo)

let js='Javascript'
let py='Python'
console.log(js == py)

let lightOn=true
let lightOff=false
console.log(lightOn == lightOff)

//dizi
//nums değişkeni altında 3 tane değer tutmuş olduk
let nums=[1, 'abc', 3]

console.log(nums)
nums[0]=10
console.log(nums)


//NON-PRIMITIVE değerlerin karşılaştırılması
let nums1=[1,2,3]
let nums2=[1,2,3]
console.log(nums1==nums2) //eşit olmaz, false verir

//OBJECT için örnek
let user1={
    name:'Cagla',
    surname:'Eren',
    country:'Turkey'
}

let user2={
    name:'Cagla',
    surname:'Eren',
    country:'Turkey'
}

console.log(user1==user2) //referansları aynı olmadığı için false döner

//aynı nesneyi referans alsınlar:
let number1=[1,2,3]
let number2=number1 
console.log(number1==number2)


//STRINGLERI BİRLEŞTİRELİM
let ad='Caglaa'
let soyad='Erenn'
let ulke='Turkiye'
let a = 5
let b = 4
//let space=' '
//let fullAd=ad + space + soyad + space + ulke
//console.log(fullAd)

let fullAd=`${ad} 

test
deneme

a+b=${a + b}


${soyad}`
console.log(fullAd)





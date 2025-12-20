//Callback function
const gericagir = num => {return num ** 2}

function cube(callb,num){
    return callb(num) * num
}
console.log(cube(gericagir,3)) //27 verir


//Returning function: Fonksiyonun return ile geriye başka fonk döndürmesi
const a = s1 => {
    const b = s2 => {
        const c = s3 => {
            return s1 + s2 + s3 //35
        }
        return c
    }
    return b
}

console.log(a(5)(10)(20)) //Dönen değeri bir fonk olduğu için bir kez daha değer girebilirz (10)
//Yani s1'in değeri 5, s2'nin değeri 10 oldu, s3'ün değeri 20 oldu


//forEach metodu callback'i kullanır.

//Dizinin toplamını almak istiyoruz. callback olmadan:
const numbers = [1,3,5,7,9]
let total = 0
numbers.forEach(number =>{total += number})
console.log(total)

//calllback olan:
const nums = [1,2,3,5,6,7]
const sumArray = arr => {
    let sum = 0
    const callback = function(element){
        sum += element
    }
    arr.forEach(callback)
    return sum
}
console.log(sumArray(nums))

//callback kodunun daha basitleştirilmiş hali:
const sayilar = [1,2,3,4]
const sumDizi = dizi =>{
    let toplam = 0
    dizi.forEach(function(elemnt){
        toplam += elemnt
    })
    return toplam
}
console.log(sumDizi(sayilar))

//setInterval: belirtilen süre aralığında kodu tekrar tekrar çalıştırır
function sayHello (){
    console.log('Hello')
}
//setInterval(sayHello,1000) //1 saniyede bir konsola yazar

//5 saniye sonra bir fonksiyon daha çağırmak istiyoruz bu da setInterval'i iptal etsin istiyoruz
// function sayHel (){
//     console.log("Hello!!!")
// }
// const intervalId = setInterval(sayHel, 1000)

// setInterval(() => {
//     clearInterval(intervalId)
//     console.log('interval işlemi iptal edildi')
// },5000)


// //setTimeout: belirli bir zaman dilimi geçtikten sonra bir defa çalıştırmak istediğimiz durumda kullanırız
// function sayHi() {
//     console.log("Hi")
// }
// //setTimeout(sayHi, 2000) //2 saniye sonra ekrana bir kere Hi yazar

// //setTimeout da 3 saniye sonra iptal edilsin
// const timeout = setTimeout(() =>{
//     console.log("Hello")
// },5000)

// setTimeout(()=>{
//     clearTimeout(timeout)
//     console.log("timeout işlemi iptal edildi")
// },3000)


// FUNCTIONAL PROGRAMMING
//Normal döngü yazmak yerine JS'in son sürümü karmaşık problemleri çözmemize yardımcı olacak
//yerleşik metodlar sunmaktadır.
 //1-forEach : Bir dizi elemanını tekrarlar. Yalnızca dizilerde kullanırız
const numbs = [1,3,5,7,9]
let tota = 0
let calculate = (numbe,index) => tota += (numbe + index)
numbs.forEach(calculate)
console.log(tota) //35 yazdı

const countries = ['Finalnd', 'Denmark','Norway','Sweden']
countries.forEach((element) => (console.log(element.toUpperCase())))

// 2- map: JavaScript’te map, bir array’in her elemanını dönüştürüp yeni bir array oluşturan metottur.
// orijinal diziyi bozmaz ve mutlaka yeni bir dizi döner.
const numb2 = [1,3,5,7,9]
const numbers2 = numb2.map(number => number * 2)
console.log(numbers2)

// örn2: objelerden örnek verebiliriz map için
let users = [
    {
        id: 1,
        name: 'Cagla',
        age: 25
    },
    {
        id: 2,
        name: 'Yesim',
        age: 22
    },
    {
        id: 3,
        name: 'Asli',
        age: 30
    }
]

users = users.map(user => { //her bir user'ı aldık
   
    //id'si 2 olan elemanın name'ini mustafa yap
    if(user.id === 2) //denkse 2'ye 
    {
        user.name = 'Mustafa'
    }
    return user
}) 
console.log(users) //Yesim, Mustafa olarak değişti

//ülkelerin ilk 3 harfini büyük harfe çevirerek alalım
const countries2 = ['Turkey','Germany','England','Italy']
const countriesFirstTrhee = countries2.map(country => {
    return country.toUpperCase().slice(0,3)
})
console.log(countriesFirstTrhee)



// 3- filter: Dizi elemanlarını döngüye alıp, istenilen koşula sahip olanlarla yeni bir dizi oluşturur
const countries3 = ['Turkey','Finland','Denmark','Sweden','Ireland','Canada']
const countriesContainingLand = countries3.filter(country =>
    country.includes('land')
)
console.log(countriesContainingLand)

//Örnek:
const sayilarr2 = [1,3,5,7,9,11] //3'den daha büyük 9'dan daha küçük sayıları filtrelemek istiyoruz
const yeniSayilar = sayilarr2.filter(sayi => sayi > 3 && sayi < 9)
console.log(yeniSayilar)


//user için filter örneği yapalım. gender 2 olanları alalım.
let users2 = [
    {
        id: 1,
        name: 'Dila',
        age: 21,
        gender: 2 
    },
    {
        id: 2,
        name: 'Mehmet',
        age: 18,
        gender: 1
    },
    {
        id: 3,
        name: 'Zorlu',
        age: 29,
        gender: 1
    },
    {
        id: 4,
        name: 'Zeynep',
        age: 35,
        gender: 2
    },
    {
        id: 5,
        name: 'Kazim',
        age: 42,
        gender: 1
    }
]

const women = users2.filter(user => user.gender === 2)
const men = users2.filter(user => user.gender === 1 && user.age >24  )
console.log("Kadinlar:", women)
console.log("Erkekler:", men)



// 4- reduce: bir diziyi tek bir değere indirger. accumulator, currentValue ve initialValue alır
const sayilar2 = [1,3,5,7,9]
const sayilarReduce = sayilar2.reduce((oldValue, currentValue) => {
    return oldValue + currentValue
},0) //initialValues, başlangıç değeri :0
console.log(sayilarReduce)



// 5- every: Bir dizideki tüm eleemanlar belirli bir şartı sağlıyor mu sorusunun cevabını verir.
// sonuç hep true ya da false olur
const names3 = ['Asabenah','Mathias','Elias','Brook']
const areAllStr = names3.every(name => typeof name ==='string')
console.log(areAllStr) //true döner

//users dizisindeki her elemanın cinsiyetinin erkek olup olmadığını kontorl edelim
let users3 = [
    {
        id: 1,
        name: 'Dila',
        age: 21,
        gender: 2 
    },
    {
        id: 2,
        name: 'Mehmet',
        age: 35,
        gender: 1
    },
    {
        id: 3,
        name: 'Zorlu',
        age: 29,
        gender: 1
    },
    {
        id: 4,
        name: 'Zeynep',
        age: 35,
        gender: 2
    },
    {
        id: 5,
        name: 'Kazim',
        age: 42,
        gender: 1
    }
]

const areAllMen = users3.every(user => user.gender === 1)
console.log(areAllMen) //false döner çünkü 2 tane kadın var

// 6- some: Sadece bir tanesi bile şartı sağlasa true döner
const AllMen = users3.some(user => user.gender === 1)
console.log(AllMen)

// 7- find: koşula ilk uyan elemanı döndürür bulamazsa undefined döner
const ages = [24, 22, 25, 32, 35, 18, 15]
const age1 = ages.find(age => age < 20)
console.log(age1) //18 verir çünkü koşulu ilk karşılayan 18'dir

//objelerle bir kullanım düşünürsek:
const idBul = users3.find(user => user.id ===3)
console.log(idBul)

//veya yaşı 35 olanı bulduralım
const yasBul = users3.find(user => user.age ===35)
console.log(yasBul) //ilk buldugu id = 2 olan Mehmet'dir


// 8- findIndex: Şartı sağlayan ilk elemanın dizideki indeksini döndürür
// Bulamazsa -1 döner
const inames = ['Ali', 'Mathias', 'Elias', 'Brook']
const iages = [24,22,25,23,26,12,35,18]
const result = inames.findIndex(name => name.length > 7)
console.log(result) //-1 döner

const age_result = iages.findIndex(age => age < 20)
console.log(age_result) //5


//9- sort: Dizi öğelerini artan veya azalan sırada sıralar. Varsayılan olarak değerleri string olarak sıralar
// sort methodu orijinal diziyi dğeiştirir. Sort'u kullanmadan önce orijinal diziyi kopyalamanız önerilir.
const names4 = ['Tayfun', 'Ahmet', 'Mehmet', 'Ceyda']
names4.sort()
console.log(names4)

const numaralar = [3, 6, 2, 1, 5,10, 1.8, 9]
numaralar.sort()
console.log(numaralar) // [1, 1,8, 10, 2, 3, 5, 6, 9] diye sıralar

//Numaralarda bunları önlemek için sort içinde neg, sıfır, pozt değer döndüren karşılaştırma callback fonku kullanırız
const number2 = [9.81, 10, 3.14, 2, 100, 27]
number2.sort(function(a,b) {
    return a-b //küçükten büyüğe sıralar [2, 3.14, 9.81, 10, 27, 100]
})
console.log(number2)

number2.sort(function(a,b) {
    return b-a //büyükten küçüğe sıralar [100, 27, 10, 9.81, 3.14, 2]
})
console.log(number2)

//stringde sıalaması names için 
names4.sort((a,b) => a.localeCompare(b))
console.log(names4) //A'dan Z'ye sıralar

names4.sort((a,b) => b.localeCompare(a))
console.log(names4) //Z'den A'ya sıralar

//stringde bu sıralama nasıl olur?
//id'ye göre A-Z'ye doğru sıralamasını istiyoruz:

let users4 = [
    {
        id: 2,
        name: 'Dila',
        age: 21,
        gender: 2 
    },
    {
        id: 1,
        name: 'Mehmet',
        age: 35,
        gender: 1
    },
    {
        id: 4,
        name: 'Zorlu',
        age: 29,
        gender: 1
    },
    {
        id: 3,
        name: 'Zeynep',
        age: 35,
        gender: 2
    },
    {
        id: 5,
        name: 'Kazim',
        age: 42,
        gender: 1
    }
]

users4.sort((a,b) => a.id - b.id)
console.log(users4) //id 1'den id 5'e düzgün sıralar

users4.sort((a,b) => b.id - a.id)
console.log(users4) // id 5'den id 1'e doğru sıralar 

//name için yapalım
users4.sort((a,b) => a.name.localeCompare(b.name))
console.log(users4) //A'dan Z'ye sıralar

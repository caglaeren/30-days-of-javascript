//              SET & MAP 

// 1-SET
const name = new Set()
console.log(name) //Set(0) verir.

//Array'den set oluşturalım:
const languages = ["English", "Turkish", "French", "English", "Spannish", "Turkish", "Chinese", "English"]
const setOfLanguages = new Set(languages)
console.log(setOfLanguages); //Set(5) {'English', 'Turkish', 'French', 'Spannish', 'Chinese'} verir

//Set, iterable yani yinelenebilir bir objedir. Her bir elementi yineleyebiliriz
// for(const langage of setOfLanguages){
//     console.log(langage)
// }

//languages.forEach(language => console.log(language)) //forEach ile de yazabiliriz.

//High-order function ile kullanmak istersek:
[...languages].map(language => console.log(language)) //direkt languages.map olarak alamayız hata verir çünkü settir. Önce array'e çeviririrz sonra map yaparız.


//      Set'in methodları:
// a) add: Set'e eleman ekler.

const names = new Set()
console.log(names.size) //0 verir

names.add("Cagla")
names.add("Tugba")
names.add("Ali")
names.add("Merih")
names.add("Ulu")
names.add("Sinem")
console.log(names.size) //6 verir
console.log(names) //Set(6) {'Cagla', 'Tugba', 'Ali', 'Merih', 'Ulu', …}

//Döngüye alarak da ekleyebiliriz:
const namesAdd = ["Ceylin","Ilgaz","Erguvan","Kaya"]
setOfNames = new Set()
for(const name of namesAdd){
    setOfNames.add(name)
}
console.log(setOfNames) //Set(4) {'Ceylin', 'Ilgaz', 'Erguvan', 'Kaya'}

// b) delete: Set'den eleman siler
setOfNames.delete("Erguvan")
console.log(setOfNames) //Set(3) {'Ceylin', 'Ilgaz', 'Kaya'}

//c) has: Set'in içerisinde elemanın olup olmadığını kontrol eder ve true/false döner
console.log(setOfNames.has("Ceylin"))

// d) clear: Set'in tüm elemanlarını siler
// console.log(setOfNames.clear())

//Elimizde bir dizi var ve bunu unqiue hale getirmek istiyoruz:
const isim = ['ali', 'ayse', 'arzu', 'batu', 'ali', 'batu', 'zeyno', 'arzu']
console.log(new Set(isim))
//set değil de dizi olmasını istersek:
console.log([... new Set(isim)]) //unique bir dizi


// Set örneğ:
const language = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]
const langSet = new Set(language)
console.log(langSet) //Set(4) {'English', 'Finnish', 'French', 'Spanish'}
console.log(langSet.size) // 4


const counts = [] //dizi

for(let l of langSet){
    //filtrelenmiş dilleri buluyor
    const filteredLang = language.filter(lang => lang === l)
    console.log(filteredLang) // ["English", "English", "English"]
    counts.push({
        lang: l, 
        count: filteredLang.length
    })
}
console.log(counts)

// Union of Sets (Kümelerin Birleşimi)
// İki kümenin birleşimini bulmak için spread operatörü kullanılır [..setA, ...setB] şeklinde
let a = [1,2,3,4]
let b = [3,4,5,6]
let c = [...a, ...b] //bunu console'a basarsam aslında array olarak verir [1,2,3,4,3,4,5,6] şeklinde
//
//let A = new Set(a)
//let B = new Set(b)
let C = new Set(c) //unique hale getirdik
console.log(C)


// Intersection of Sets (Kümelerin kesişimi)
//Kümelerin kesişimini bulmak için filter ve has kullanılabilir.
let a2 = [1,2,3,4,5]
let b2 = [3,4,5,6]
let A = new Set(a2)
let B = new Set(b2) 
let c2 = a2.filter(num => B.has(num))
let C2 = new Set(c2)
console.log(C2)


// Difference of Sets (Kümelerin farkı)
//Kümelerin farkını bulmak için filter kullanılabilir
let c3 = new Set(a2.filter(num => !B.has(num))) //A'da olup B'de olmayanlar
let c4 = new Set(b2.filter(num => !A.has(num))) //B'de olup A'da olmayanlar
console.log(c3)
console.log(c4)



// 2-MAP
const map = new Map() //boş bir map oluşturduk
console.log(map) //Map(0) {size: 0} verdi

// a- set: (key,value) ile map'e eleman ekler.
//map.set('name', 'cagla')
//console.log(map) //Map(1) {'name' => 'cagla'} verir
//map.set(2, 'zeynep')
//console.log(map) //Map(2) {'name' => 'cagla', 1 => 'zeynep'}

map.set('1', 'str')
map.set(1, 'num1')
map.set(true, 'bool1')
map.set(false, 'bool2')
console.log(map) //Map(4) {'1' => 'str', 1 => 'num1', true => 'bool1', false => 'bool2'}

// b-Get (key): key ile değeri döndürür, map'ten eleman alır yani
console.log(map.get(false)) //bool2 verir
console.log(map.get(1)) //num1
console.log(map.get('1')) //str

//c-size: Eleman sayısını veriyor
console.log(map.size) //4 verir

//OBJE OLARAK OLUŞTURSAYDIK:
// const obj={}
// obj['1'] = 'mehmet'
// obj[1] = 'ahmet'

// obj[true] = 'deneme'
// obj['true'] = 'deneme2'
// console.log(obj)


// Objeyi keys olarak tutabiliriz ama objenin key'leri her zaman string olur. Map'te ise key'ler herhangi bir tipte olabilir.
const cagla = {
    name : 'cagla'
}
const sevil = {
    name: 'sevil'
}
const map2 = new Map()
map2.set(cagla, 10) //user1'in 10 tane değeri olsun
map2.set(sevil, 20)
console.log(map2)
//console.log(map2.get('cagla')) //undefined verir çünkü key olarak obje verdik
console.log(map2.get(cagla)) //bu şekilde objeyi pass geçince 10 verir


// Iteration over map: Harita üzerinde yineleme:
//loop'a sokmak için 3 method var:
//1- map.keys() : keyleri döndürür
//2- map.values(): valueları döndürür
//3- map.entries(): hem key hem de valueyu döndürür
// console.log(map2.keys()) //Objects olarak verir anahtarları
// console.log(map2.values()) //MapIterator {10, 20}
// console.log(map2.entries()) //MapIterator {{…} => 10, {…} => 20}

cagla.surname = 'eren' //cagla objesine surname ekledik: {name: 'cagla', surname: 'eren'} oldu.

for(let u of map2.keys()){
    console.log(u) //{name: 'cagla'} , {name: 'sevil'} verir.
}

// for(let u of map2.values()){
//     console.log(u) //10 ve 20 verir
// }

//forEach ile de yazabiliriz:
//[...map2.values()].forEach(v => console.log(v))
//[...map2].forEach(v => console.log(v)) //map'in direkt kendisini kullandık: (2) [{…}, 10] (2) [{…}, 20]
[...map2].forEach(([key,val]) => console.log(val))


//Objeden map üretmek istersek: Object.entries() kullanılır
const ali = {
    name : 'ali',
    surname: 'veliye'
}
const safinaz = {
    name: 'safinaz'
}


// const map3 = new Map([
//     ['name', 'ali'],
//     ['surname', 'veliye']
// ])

const map3 = new Map (Object.entries(ali)) //objeyi içine koyduk ve array olarak verdi
//console.log(map3) //Map(2) {'name' => 'ali', 'surname' => 'veliye'}
console.log(map3.get('name')) //ali verir
console.log(map3)

//Bunu tekrardan bir objeye çevirebiliriz: fromEntries() ile
console.log(Object.fromEntries(map3)) //{name: 'ali', surname: 'veliye'}
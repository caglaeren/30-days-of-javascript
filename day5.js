let names = []
console.log(names)

let names2 = ['Cagla', 24, 2000, 'Eren', 'Kadın']
console.log(names2.length) //eleman sayısını verir: 5
console.log(names2)


let js = 'Javascript'
const charsJavaScript = js.split('')
console.log(charsJavaScript)

let companieString = 'Facebook, Google, Amazon, Apple, Oracle'
let companies = companieString.split(',')
console.log(companies)

let isimler = ['Cagla', 'Ali', 'Zeynep']
console.log(isimler.indexOf('tugba'))

//if else ile check yapalım
const fruits = ['banana' , 'mango', 'lemon' , 'orange']
let indeks = fruits.indexOf('elma')
if(indeks!=-1){
    console.log('Bu meyve dizinin içinde var.')
} else{
    console.log('Bu meyve dizinin içinde yok')
}

let dizim = [1,2,3,4,5]
console.log(Array.isArray(dizim))

//Diziyi stringe çevirme
const say = [1,5,6,8,3]
console.log(say.toString())

const birAd = ['Ali', 'Veli', 'Zeli']
console.log(birAd.toString())


//Array of arrays
const frontEnd = ['HTML', 'CSS', 'JS','React']
const backEnd = ['node', 'Express','mongodb']
const fullStack = [frontEnd,backEnd]
console.log(fullStack[1][1])

const numbe = [1,2,[4,5,6,7], 9,11,10]
console.log(numbe[2][3])
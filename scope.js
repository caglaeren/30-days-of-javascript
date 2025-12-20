ad = 'Cagla' //Window scope'dur.

//window scope
// a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
// b = 10 // this is a global scope variable and found in the window object
// function letsLearnScope() {
//   console.log(a, b)
//   if (true) {
//     console.log(a, b)
//   }
// }
// console.log(a, b) //accessible

//global scope için
let a = 'Javascript'
let b = 10

function letsLearnScope(){
  console.log(a,b) //Javascript 10, accessible
  if(true){
    //Burası Block scope olduğu için bu bloğun içindekine erişir.
    let a = 'Python'
    let b = 100
    console.log(a,b) // Python 100
  }
  console.log(a,b) //Artık blok içinden çıktığımız için Global Scope'daki değişkenlere erişir
}
letsLearnScope()
console.log(a,b)  // Javascript 10, accessible


let name2 = 'Tayfun'
let surname2 = 'Agac'
function letLearnScope(){
  console.log(name2,surname2)
  if(true){
    let name2 = 'Gökhan' //let değil de direkt name = surname = diye tanımlasak alttaki console.log olanlar da 
    let surname2 = 'Kandemir' //Gökhan Kandemir yazardı ama biz burda let ile yeni değişken tanımlamış olduk
    console.log(name2,surname2)
  }
  console.log(name2, surname2)
}
letLearnScope()
console.log(name2,surname2)

//Local Scope
let a2 = 'Javascript' //global scope
let b2 = 10 //global scope
function letLearn(){
  console.log(a2,b2)
  let value = false

  if(true){
    // fonksiyon içinden ve fonksiyon dışından erişebiliriz, ancak 
    // if bloğu içinde tanımlanan değişkenlere if bloğu dışından erişilemez.
    let a2 = 'Python'
    let b2 = 20
    let c =30
    let d = 40
    value = !value
    console.log(a2,b2,c) //Python 20 30
  }
  // C'ye erişemeyiz çünkü c'nin kapsamı sadece if bloğudur
  console.log(a2,b2,value) //Javascript 10 true
}
letLearn()
console.log(a,b) //Javascript 10


//var-let-const
function letLearn2(){
  var gravity = 9.81
  console.log(gravity) //hata verir çünkü function scope'dur

}

if(true){
  var gravity = 9.81
  console.log(gravity) //9.81
}
console.log(gravity) //9.81


for(var i=0; i<3; i++){
  console.log(i) //0,1,2
}
console.log(i) //3

//let kullandığımızda block scope olacağı için kodun diğer bölümlerini etkilemez
function letLearnScope2(){
  //let veya const kullanılabilir ancak gravity sabit olduğu için const kıllanmayı öneririm
  const gravity2 = 9.81
  console.log(gravity2)
}
//console.log(gravity2) //gravity bulunamadı hatası verir

if(true){
  const gravity3 = 9.81
  console.log(gravity3) //9.81
}
//console.log(gravity3) //bulunamadı hatası verir

for(let j =0; j<3; j++){
  console.log(j) // 0 1 2 
}
//console.log(j) //j bulunamadı hatası verir



// ------------------ OBJECT (NESNE) ------------------------

//boş bir nesne oluşturalım
const person = {}
console.log(person) //boş bir object olarak basar

//key-value olan object tanımlayalım
const rectangle = {
  length: 20,
  width: 20
}
console.log(rectangle) // {length: 20, width: 20} diye basar


const persons = {
  firstName: 'Cagla',
  lastName: 'Eren',
  age: 20,
  country: 'Finland',
  city: 'Helsinki',
  test: {
    deneme: 'Deneme Text'
  },
  'phone number' : 378891913,
  skills: [
    'HTML',
    'CSS',
    'Javascript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  isMarried: false,
  siblings: [
    { //Array içinde object de tanımlayabiliriz
      name:'Ayse',
      surname:'Fatma',

    }
  ],
  getFullName: function(){
    return `${this.firstName} ${this.lastName}` //this objectin kendisidir ve this'i kullanarak nesnenin farklı propertylerine erişebilirz
  },
  getFullName2: () => `${persons.firstName} ${persons.lastName}` //Arrow function ile böyle alabiliriz

}

console.log(persons)
//{firstName: 'Cagla', lastName: 'Eren', age: 20, country: 'Finland', city: 'Helsinki', …}
// age: 20
// city: "Helsinki"
// country: "Finland"
// firstName: "Cagla"
// isMarried: true
// lastName: "Eren"
//siblings:  Array(1)
//  0: {name: 'Ayse', surname: 'Fatma'}
//  length: 1
//  [[Prototype]: Array(0)
//skills: (8) ['HTML', 'CSS', 'Javascript', 'React', 'Node', 'MongoDB', 'Python', 'D3.js']
// [[Prototype]]: Object. şeklinde bastı ekrana
console.log(persons.firstName) //Cagla'ya eriştik
console.log(persons.age) // 20 ye eriştik
console.log(persons.isMarried ? 'Evli' : 'Evli Değil,Bekardır') //Evli ise evli yazar, değilse Evli Değil,Bekardır yazar

//Deneme Text'e erişmek istiyoruz:
console.log(persons.test.deneme) //deneme de objectdir ve Deneme Text'i getirir

//Array olan skills'e erişmek istiyoruz:
console.log(persons.skills[1]) //CSS döndürür

//Siblingse erişelim
console.log(persons.siblings[0]) // {name: 'Ayse', surname: 'Fatma'}
//siblings arrayi içindeki objectin propertysi olan name'e erişmek için:
console.log(persons.siblings[0].name) //Ayse'yi verir

//phone number'a erişmek istiyoruz:
console.log(persons['phone number']) //378891913 verir
//lastName'e de aynı mantıkta erişilebilir aslında
console.log(persons['lastName']) //Eren'i verir

//skills'i dinamik olarak alırsak nasıl çağırırız:
let keyName = 'skills'
console.log(persons[keyName])

//this kullanarak nesnenin propertylerine erişelim - getFullName
console.log(persons.getFullName()) //Cagla Eren verir
console.log(persons.getFullName2()) //Arrow ile tnaımladığımız halini çağırdık



// Nesne için yeni anahtar oluşturalım:
const user = {
  firstName: 'Cagla',
  lastName: 'Eren',
  age: 20,
  country: 'Finland',
  city: 'Helsinki',
  test: {
    deneme: 'Deneme Text'
  },
  'phone number' : 378891913,
  skills: [
    'HTML',
    'CSS',
    'Javascript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  isMarried: false,
  siblings: [
    { //Array içinde object de tanımlayabiliriz
      name:'Ayse',
      surname:'Fatma',

    }
  ],
  getFullName: function(){
    return `${this.firstName} ${this.lastName}` //this objectin kendisidir ve this'i kullanarak nesnenin farklı propertylerine erişebilirz
  },
  getFullName2: () => `${user.firstName} ${user.lastName}` //Arrow function ile böyle alabiliriz

}

//yeni property atayabiliriz
user.nationally = 'Turkish'
user.title = 'Developer'
user.country = 'Turkiye' //Artık country Finland değil Ethiopia oldu
user.city = 'Ankara' //city artık Ankara olarak değişir
//skills'e yeni şeyler ekleyebiliriz
user.skills.push('Vue Js') //Array olduğu için push diyebilirz
user.skills.push('Svelte')
user.isMarried = true //false idi true olarak değiştirdik
console.log(user)

//Bir tane nesne methodu tanımlamış:
// user.getPersonInfo = function(){
//   let skillsWithoutLastSkill = this.skills.splice(0, this.skills.length-1).join(', ') //sonuncu hariç alıp böler ve , ile birleştirir
//   let lastSkill = this.skills.splice(this.skills.length-1)[0] //sonuncuusnu alır

//   let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
//   let fullName = this.getFullName()
//   let statement = `${fullName} is a ${this.title}.\nShe lives in ${this.country}.\nShe teaches ${skills}`
//   return statement

// }
// console.log(user)
// console.log(user.getPersonInfo()) //Çıktısı altta:
//Cagla Eren is a Teacher.
//She lives in Turkiye.
//She teaches HTML, CSS, Javascript, React, Node, MongoDB, Python, D3.js, Vue Js, and Svelte


//Bu getPersonInfo için daha kısa bir yöntem de var:
// user.getPersonInfo2 = function(){
//   let skillsWithoutLastOne = this.skills.splice(0, this.skills.length-1).join(', ')
//   let lastSkill2 = this.skills.at(-1) //sonuncu elemanı almış oluyoruz bu şekilde
//   let skills = `${skillsWithoutLastOne}, and ${lastSkill2}`
//   let fullName2 = this.getFullName()
//   let statement2 = `${fullName2} is a ${this.title}.\nShe lives in ${this.country}.\nShe teaches ${skills}`
//   return statement2

// }
// console.log(user.getPersonInfo2()) 

//dizide html, css, js, react and svelte yazdırmanın daha kısa yöntemi var:
const formatter = new Intl.ListFormat('en', {style: 'long', type: 'conjunction'});
user.getPersonInfo2 = function(){
  //global olarak da tanımlayabiliriz
  //const formatter = new Intl.ListFormat('en', {style: 'long', type: 'conjunction'});
  let skills = formatter.format(this.skills)
  let fullName2 = this.getFullName()
  let statement2 = `${fullName2} is a ${this.title}.\nShe lives in ${this.country}.\nShe teaches ${skills}`
  return statement2

}
console.log(user.getPersonInfo2()) 


//OBJECT METHODS: Bir nesneyi işlemek için farklı yöntemler vardır:
//1-Object.assign: Orijinal nesneyi değiştirmeden bir nesneyi kopyalamak için:
let newUser = user //bu refreranslı kopyalamadır. 
console.log(user) //Cagla Eren verdi
//newUser.firstName = 'Fadime'
console.log(user) // Fadime Eren verdi

//Referanssız değiştirmek istersek:
//let newUser2 = Object.assign({}, user) //boş bir object ve kopyalamak istediğimiz object
//Yukarıdaki kod yerine şunu da kullanabilirsiniz:
let newUser2 = {... user}
newUser2.firstName = 'Asiye'
console.log(user) //Cagla Eren verir
console.log(newUser2) //Asiye Eren verir

//2-Object.keys(): Bir nesnenin anahtarlarını veya özelliklerini dizi olarak almak içindir
console.log(Object.keys(user))

//3-Object.values(): Bir nesnenin değerlerini dizi olarak almak için
console.log(Object.values(user))

//4-Object.entries(): Bir dizideki anahtarları ve değerleri almak için
console.log(Object.entries(user)) //Array olarak döndğ
//for ile bunu yapmayı denersek:
for(let [key,val] of Object.entries(user)){
  console.log(`Key = ${key}  -  Value = ${val}`)
}

//5-hasOwnProperty(): Bşr nesnede belirli bir anahtar veya özelliğin varlığını kontorl etmek için kullanılır.
console.log(user.hasOwnProperty('firstName')) //true döner
console.log(user.hasOwnProperty('country')) //true döner
console.log(user.hasOwnProperty('surname')) //false döner

//6-Object.freeze(): Objeyi dğeiştirilemez hale getirir. Yeni property eklenemez, var olan silinemez veya değiştirilemez.
//console.log(Object.freeze(user))

//7-Object.seal(): Objeyi kısmen kilitler. Yani yeni bir property ekleyemezsin, var olanı silemezsin ama değerlerini değiştirebilirsin
//console.log(Object.seal(user))
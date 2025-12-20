for(let i=0; i<=100; i++){
    console.log('i=' , i)
}

for(let i=1; i<=5; i++){
    console.log(`${i} * ${i} = ${i*i}`)
}

//diziden başka diziye ekleme şekli
const countriess=['Finland','Norway','Denmark','Sweden','Iceland']
const newArr=[]
for(let i=0; i<countriess.length; i++){
    newArr.push(countriess[i].toUpperCase())
    console.log(newArr[i])
}

// //while örneği
const names=['Ahmet','Mehmet','Ayşe','Fatma','Zeynep','Sude','Elif']
let i=0

while(i<names.length){
    console.log(names[i])
    i++
}

// //do-while örneği. do içindeki kod her türlü bir kere çalışır
// //while kısmı çalışıyorsa da kodu çalıştırmaya devam eder
do{
    console.log(names[i])
    i++
}while(i<names.length)



// //toplama artırma
const nums = [1,2,3,4,5]
let summ=0
for(let i=1; i<nums.length; i++){
    summ=summ+nums[i]
    console.log(summ)
}
console.log('Toplam:' ,summ)


// /// For/Of Döngüsü
for(let name of names){
    console.log("isimler: ", name)

}

// //ikinci örnek
const webTechss = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']
for(const tech of webTechss){
    console.log("Tech:", tech.toUpperCase())
}

// //her elementin ilk kelimesini almak istersek
for(const tech of webTechss){
    console.log(tech[0])
}

//break
for(let i=0; i<=5; i++){
    if(i==3){
        break
    }
    console.log(i) // 0 1 2 yazar
}

for(let name of names){
    if(name==='Ayşe'){
        console.log(`${name} bulundu`) // Ahmet Mehmet Ayşe bulundu yazar
        break
}   
    console.log(name) // Ahmet Mehmet yazar
}

//continue
for(let i=0; i<=5; i++){
    if(i==3){
        continue
    }
    console.log(i) // 0 1 2 4 5 yazar
}

//Ayşe'yi ekrana yazdırmak istemiyorsak
for(let name of names){
    if(name==='Ayşe'){ 
        continue
    }
    if(name==='Sude'){
        break
    }   
    console.log(name) // Ahmet Mehmet Fatma Zeynep yazar
}



// ----- Exercises -------

const countries = [
    'Albania',
     'Bolivia', 
     'Canada',
     'Denmark', 
     'Ethiopia', 
     'Finland',
     'Germany',
     'Hungary',
     'Ireland',
     'Japan',
     'Kenya'
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//1-Iterate 0 to 10 using for loop, do the same using while and do while loop
for(let i=0; i<=10; i++){
    console.log(i)
}

//let i=0
while(i<=10){
    console.log(i)
    i++
}

//2-Iterate 10 to 0 using for loop, do the same using while and do while loop
for(let i =10; i>=0; i--){
    console.log(i)
}

let j = 10
while(j>=0){
    console.log(j)
    j--

}

//3-Iterate 0 to n using for loop
const n = prompt("Enter n:")
for(let i=0; i<=n;i++){
    console.log(i)
}

//4-Write a loop that make the following pattern using console.log():
for(let i=0; i<=10; i++){
    let pattern = ''
    for(let j=0; j<i;j++){
        pattern +='#'
    }
console.log(pattern)
}

//5-Use loop to print following pattern:
 // 0x0 = 0
 // 1x1 = 1
 // 2x2 = 4
for(let i=0; i<=10;i++){
    console.log(`${i} x ${i} = ${i*i}`)
}

//use for loop to iterate from 0 to 100 and print only prime numbers
for(let i=0; i<=100;i++){
    let isPrime = true
    if(i<=1){
        isPrime=false 
    }
    //en küçük asal sayı 2'dir
    //math.sqrt karekök demektir
    for(let j=2; j<=Math.sqrt(i); j++){
        if(i%j==0){
            isPrime=false
            break
        }

    }
    if(isPrime){
        console.log(i)
    }
}

//çift sayıları yazdırma
for(i=0; i<=100; i++){
    if(i%2==0){
        console.log("Çift sayılar:", i)
    }
}

//0'dan 100'e kadar sayıların toplamını yazdırma
let sum=0
for(let i=0;i<=100;i++){ 
    sum=sum+i
}
console.log("Toplam:" ,sum)

//0'dan 100'e kadar çift sayılar ile tek sayıların toplamını ayrı ayrı al
let evenSum = 0
let oddSum = 0
for(let i=0; i<=100;i++){
    if(i%2==0){
        evenSum +=i
    }else{
        oddSum +=i
    }
    console.log(`Çift sayıların toplamı: ${evenSum}, Tek sayıların toplamı: ${oddSum}`)
}

//şimdi bu 2550, 2500 çıkan toplamları bir diziye aktar
const sums = []
sums.push(evenSum)
sums.push(oddSum)
console.log(sums)

//develop a small script which generate array of 5 random numbers
//Boş bir dizi oluşturur, 5 kere dönüye girer, her seferinde 0-99 arasında rastgele bir tamsayı ürerip diziye ekler
const randomNums = []
for(let i=0; i<5;i++){
    const randNum = randomNums.push(Math.floor(Math.random() *100)); 
    //Math.floor aşağı yuvarlar, ondalık kısmı atar
    //Math.random() 0-1 arası rastgele sayı üretir(0 dahil,1 değil)
    //Math.random() *100 Bu sayıyı 0-100 arası bir değere çevirir
    //randomNums.pus ise üretilen random sayısı dizinin sonuna ekler
}
console.log(randomNums)

//Develop a small script which generate any number of charachters random id:
//Herhangi bir sayıda karakterden oluşan rastgele kimlik numarası üreten küçük bir komut dosyası geliştirin:
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let id=''
const idLenght=10
for(let i=0; i<idLenght; i++){
    const randomIndex = Math.floor(Math.random()*characters.length)
    id +=characters[randomIndex]
}
console.log("Rastgele ID:", id)

//Using the above countries array, create the following new array
//ülkeler dizisini kullanarak yeni diziyi oluşturun
newCountries=[]
for(const country of countries){
    newCountries.push(country.toUpperCase())
}
console.log(newCountries)

//Using the above countries array, create an array for countries length
countriesLength = []
for(const country of countries){
    countriesLength.push(country.length)
}
console.log(countriesLength)

//Ülkeler içinde land kelimesi geçeni kontrol et. Eğer land içeren varsa,bunları diziye aktarıp göster
const landCountries = []
for(const country of countries){
    if(country.includes('land')){
        //includes: belitilen karakter, stringin içinde geçiyor mu diye kontrol eder
        landCountries.push(country)
    }
}
console.log(landCountries)

//Şİmdi ülkeler içinde sonu ia ile bitenleri bulup başka diziye aktaralım
const iaCountries = []
for(country of countries){
    if(country.endsWith('ia')){
        //endsWith: belirtilen karakter, stringin sonunda geçiyor mu diye kontrol eder
        iaCountries.push(country)
    }
    else{
        console.log(`${country} ia ile bitmiyor`)
    }
}
console.log(iaCountries)

//Karakter uzunluğu en fazla olan ülkeyi bulup yazdıralım
let maxLength = 0
let longestCountry = ''
for(const country of countries){
    if(country.length > maxLength){
        maxLength = country.length
        longestCountry = country
    }

}
console.log("En uzun ülke ismi:", longestCountry)

//Karakter uzunluğu 5 olanları bulalım
const fiveCharCountries = []
for(country of countries){
    if(country.length==5){
        fiveCharCountries.push(country)
    }
}
console.log(fiveCharCountries)

//webTechs diziisnde en uzun kelimeyi bulalım
let maxTechLEngth = 0
let longestTech = ''
for(const tech of webTechs){
    if(tech.length>maxTechLEngth){
        macTechLenth = tech.length
        longestTech = tech
    }
}
console.log("En uzun web teknolojisi:", longestTech)

//[["HTML",4],["CSS",3],["JavaScript",10]...] şeklinde bir dizi oluşturacağız webTechs dizisinden
const newTechs = []
for(const tech of webTechs){
    newTechs.push([tech, tech.length])
}
console.log(newTechs)

//An application create using MongoDB, Express, React and Node is called a MERN stack app.
//Create the acronym MERN by using the array mernStack
// mernStack dizisindeki elemanların ilk harflerini alarak MERN kelimesini oluşturacağız
let acronym = ''
for(const tech of mernStack){
    acronym +=tech[0] //her elemanın ilk harfini alıyoruz 
}
console.log("Acronym:", acronym)

//Trhis is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reveverse method.
const fruits = ['banana', 'orange', 'mango', 'lemon']
const reverseFruits = []
for(let i=fruits.length-1; i>=0; i--){
    reverseFruits.push(fruits[i])
}
console.log(reverseFruits)


//Print all the elements of array as shown below
const fullStack =[
    ['HTML','CSS','JS','React'],
    ['Node','Express','MongoDB']
]

for(const stack of fullStack){
    for(const tech of stack){
        console.log(tech)
    }

}

//Arrays are mutable. Create a copy of array which does not modify the original.
// Sort the copied array and store in a variable sortedCountries.
//Javascript dizileri değiştirilebilir. Yani bir diziyi sort, push, pop vs. ile değiştirirsen orijinal dizi de değişir.
//Orijinal diziyi bozmadan bir kopyasını oluşturup, bu kopyayı sıralayacağız.
const ulkeler = ['Turkey','England','Sweden','Norway','Denmark','Korea','Australia']
const countriesCopy = []
for(const country of ulkeler){
    countriesCopy.push(country) //diziyi yeni bir diziye kopyaladık
}
const sortedCountries = countriesCopy.sort() //kopyalanan diziyi sıraladık
console.log("Original array:",ulkeler)
console.log("Sorted array:", sortedCountries)

//Extract all the countries contain the word 'land' from the countries array and print it as array
const countriesWithLand = []
for(const country of countries){
    if(country.includes('land')){
        countriesWithLand.push(country)
    }
}
console.log(countriesWithLand)





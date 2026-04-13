function logSeparator(char = '=', length = 10, log_entry='LOG ENTRY') {
    console.log(char.repeat(length) + ' ' + log_entry + ' ' + char.repeat(length));
}
// Fylltu inn kóðann sjálf/ur þar sem stendur TODO

// -----------------------------------
// Grunnatriði
// -----------------------------------
logSeparator('=', 20, log_entry='Grunnatriði')
const fruits = ["apple", "banana", "orange"]

console.log('first item in the list is : ' + fruits[0]) // "apple"
console.log('length of the list is : '+ fruits.length) // 3

logSeparator('=', 20, log_entry='push()')
// -----------------------------------
// push()
// -----------------------------------
const cart = ["mouse", "keyboard"]

// 1. Bættu "monitor" aftan á arrayið
cart.push('monitor')
// 2. Bættu svo líka "cable" og "adapter" við
cart.push('cable')
cart.push('adapter')
// 3. Prentaðu út cart
console.log('cart array values are: ' + cart)
// TODO

logSeparator('=', 20, log_entry='pop()')
// -----------------------------------
// pop()
// -----------------------------------
const queue = ["Anna", "Bjarni", "Dóra"]
console.log('queue before pop()' + queue)
// 1. Taktu síðasta nafnið úr queue og geymdu í breytu
const lastItem = queue.pop()
// 2. Prentaðu út breytuna
console.log('last item in queue : ' + lastItem)
// 3. Prentaðu út queue eftir breytinguna
console.log('queue after pop(): ' + queue)
// TODO

logSeparator('=', 20, log_entry='shift()')
// -----------------------------------
// shift()
// -----------------------------------
const line = ["fyrstur", "annar", "þriðji"]
console.log('line before shift()' + line)
// 1. Taktu fyrsta stakið úr line
const firstItem = line.shift()
// 2. Prentaðu út hvaða stak fór út
console.log('stakið sem var tekið út úr line : ' + firstItem)
// 3. Prentaðu út line eftir breytinguna
console.log('line after shift(): ' + line)

// TODO

logSeparator('=', 20, log_entry='unshift()')
// -----------------------------------
// unshift()
// -----------------------------------
const scores = [20, 30, 40]
console.log('scores before unshift()' + scores)
// 1. Bættu 10 fremst í arrayið
scores.unshift(10)
// 2. Bættu svo 0 líka fremst
scores.unshift(0)
// 3. Prentaðu út scores
console.log('scores after adding 0, 10 with unshift()' + scores)

// TODO

logSeparator('=', 20, log_entry='includes()')
// -----------------------------------
// includes()
// -----------------------------------
const colors = ["red", "green", "blue"]
console.log('colors before includes(): ' + colors)
// 1. Athugaðu hvort "green" sé í arrayinu
colorsHasGreen = colors.includes('green')
console.log('is green in the array? ' + colors.includes('green') )
// 2. Athugaðu hvort "yellow" sé í arrayinu
colorsHasYellow = colors.includes('yellow')
console.log('is green in the array? ' + colors.includes('yellow') )
// 3. Prentaðu út bæði svörin
console.log('is green in the array? ' + colorsHasGreen )
console.log('is yellow in the array? ' + colorsHasYellow )
// TODO

logSeparator('=', 20, log_entry='indexOf()')
// -----------------------------------
// indexOf()
// -----------------------------------
const letters = ["a", "b", "c", "d"]
console.log('letters before indexOf(): ' + letters)

// 1. Finndu index fyrir "c"
index_of_c = letters.indexOf("c")
console.log('indexOf("c"): ' + letters.indexOf("c"))
// 2. Finndu index fyrir "z"
index_of_z = letters.indexOf("z")
console.log('indexOf("z"): ' + letters.indexOf("z"))
// 3. Prentaðu út bæði svörin
console.log('indexOf("c"): ' + index_of_c)
console.log('indexOf("z"): ' + index_of_z)

// TODO
logSeparator('=', 20, log_entry='find() með strengjum')

// -----------------------------------
// find() með strengjum
// -----------------------------------
const users = ["Danni", "Jón", "Kinga", "Agnar"]
console.log('users before find(): ' + users)

// 1. Finndu user sem heitir "Kinga"
console.log('users named "Klinga": ' + users.find(user => user === "Kinga"))
console.log(users)
users_named_kinga = users.find(user => user === 'Kinga')
console.log('user sem heitir "Kinga" : ' + users_named_kinga)
// TODO

logSeparator('=', 20, log_entry='findIndex()')
// -----------------------------------
// findIndex() með strengjum
// -----------------------------------
const names = ["Aron", "Eva", "Klara", "Björk"]

// 1. Finndu index á "Klara"
klara_index = names.findIndex(name => name === 'Klara')
// 2. Finndu index á "Óli"
oli_index = names.findIndex(name => name === 'Óli')
// 3. Prentaðu út bæði svörin
console.log('Klara er með index númer : '  + klara_index)
console.log('Óli er með index númer : '  + oli_index)
// TODO


logSeparator('=', 20, log_entry='some()')
// -----------------------------------
// some()
// -----------------------------------
const ages = [12, 15, 19, 11]

// 1. Athugaðu hvort einhver sé 18 ára eða eldri
anyoneUnder18 = ages.some(age => age < 18)
// 2. Athugaðu hvort einhver sé yngri en 10
anyoneUnder10 = ages.some(age => age < 10)
// 3. Prentaðu út bæði svörin
console.log('anyone under 18: ' + anyoneUnder18)
console.log('anyone under 10: ' + anyoneUnder10)
// TODO

logSeparator('=', 20, log_entry='every()')
// -----------------------------------
// every()
// -----------------------------------
const grades = [7, 8, 9, 10]

// 1. Athugaðu hvort allar einkunnir séu 5 eða hærri
allGradesPass = grades.every(grade => grade > 5)

// 2. Athugaðu hvort allar einkunnir séu 9 eða hærri
allGradesAbove9 = grades.every(grade => grade > 9)
// 3. Prentaðu út bæði svörin
console.log('all grades pass: ' + allGradesPass)
console.log('all grades above 9: ' + allGradesAbove9)
// TODO

logSeparator('=', 20, log_entry='forEach()')
// -----------------------------------
// forEach()
// -----------------------------------
const cities = ["Reykjavík", "Akureyri", "Selfoss"]

// 1. Notaðu forEach til að prenta út:
//    0: Reykjavík
//    1: Akureyri
//    2: Selfoss
for (const city of cities){
    index = cities.findIndex(myCity => myCity === city)
    console.log(index + ':' + city);
}
// TODO

logSeparator('=', 20, log_entry='map()')
// -----------------------------------
// map()
// -----------------------------------
const prices = [1000, 2000, 3000]
// 1. Búðu til nýtt array með 25% VSK
const pricesWithVAT = prices.map(price =>{
    vatRate = 0.25;
    total = price * (1 + vatRate);
    return Number(total.toFixed(2))
} )

// 2. Búðu til nýtt array með strengjum: "1000 kr", "2000 kr", ...
const pricesInISK = prices.map(num => num + ' kr.'); 
// 3. Prentaðu út bæði arrayin
console.log('Prices with VAT : ' + pricesWithVAT)
console.log('Prices as string for ISK : ' + pricesInISK)
// TODO

logSeparator('=', 20, log_entry='filter()')
// -----------------------------------
// filter()
// -----------------------------------
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// 1. Búðu til nýtt array með bara sléttum tölum
const evenNumbers = numbers.filter(n => n % 2 === 0)

// 2. Búðu til nýtt array með tölum sem eru stærri en 4
aboveFour = numbers.filter(n => n > 4)
// 3. Prentaðu út bæði arrayin
console.log('sléttar tölur eru : ' + evenNumbers)
console.log('Tölur yfir 4 eru : ' + aboveFour)
// TODO

logSeparator('=', 20, log_entry='reduce()')
// -----------------------------------
// reduce()
// -----------------------------------
const values = [10, 20, 30, 40]

// 1. Reiknaðu summu allra talna
total = values.reduce((total, n) => {
    return total + n;
},0);
// 2. Reiknaðu hversu margar tölur eru í arrayinu með reduce
numberOfItems = values.reduce((count) => {
    return count + 1;
},0);
// 3. Prentaðu út bæði svörin
console.log('summa talnanna í fylkinu ' + JSON.stringify(values) + ' er: ' + total)
console.log('fjöldi staka í fylkinu ' + JSON.stringify(values) + ' er: ' + numberOfItems)

// TODO

logSeparator('=', 20, log_entry='slice()')
// -----------------------------------
// slice()
// -----------------------------------
const nums = [10, 20, 30, 40, 50]

// 1. Taktu út fyrstu 2 tölurnar
firstTwo = nums.slice(0,2)

// 2. Taktu út tölurnar í sætum 2 til 4 (án síðasta indexins)
TwoToFour = nums.slice(1,4)
// 3. Prentaðu út original arrayið til að sýna að það breyttist ekki
console.log('Fyrstu tvö í fylkinu ' + JSON.stringify(nums) + ' er: ' + firstTwo)
console.log('tölurnar í sætum 2 til 4 í ' + JSON.stringify(nums) + ' eru: ' + TwoToFour )

// TODO

logSeparator('=', 20, log_entry='splice()')
// -----------------------------------
// splice()
// -----------------------------------
const fruitList = ["apple", "banana", "orange", "grape"]
console.log('fruitList origininal : ' + fruitList)
// 1. Fjarlægðu "banana"
index = fruitList.indexOf('banana')
if (index > -1){
    fruitList.splice(index,1)
}
// 2. Settu "kiwi" í staðinn á sama stað
fruitList.splice(index, 0, 'kiwi')
// 3. Prentaðu út fruitList eftir breytinguna
console.log('fruitList með kiwi í stað banana ' + fruitList )

// TODO

logSeparator('=', 20, log_entry='sort()')
// -----------------------------------
// sort()
// -----------------------------------
const numberList = [4990, 1990, 12990, 6990]

// 1. Raðaðu tölunum frá lægsta til hæsta
const numberListSortedAsc = numberList.sort((a,b) => a - b );
// 2. Prentaðu út arrayið
console.log('arrayið ' + JSON.stringify(numberList) + ' raðað eftir hækkandi stærð. ' + JSON.stringify(numberListSortedAsc) )
// 3. Raðaðu svo tölunum frá hæsta til lægsta
const numberListSortedDesc = numberList.sort((a,b) => b - a );
// 4. Prentaðu út arrayið aftur
console.log('arrayið ' + JSON.stringify(numberList) + ' raðað eftir minnnkandi stærð. ' + JSON.stringify(numberListSortedDesc))
// TODO

logSeparator('=', 20, log_entry='join()')
// -----------------------------------
// join()
// -----------------------------------
const ingredients = ["mjólk", "egg", "smjör"]

// 1. Búðu til streng þar sem innihaldsefni eru aðskilin með " - "
ingredientsStringWithSeperator = ingredients.join('-');

// 2. Búðu til annan streng þar sem þau eru aðskilin með ", "
ingredientsStringWithComma = ingredients.join(',');
// 3. Prentaðu út báða strengina
console.log('Innihaldsefni með bandstriki : ' + ingredientsStringWithSeperator)
console.log('Innihaldsefni með kommu : ' + ingredientsStringWithComma)
// TODO

logSeparator('=', 20, log_entry='Lokaæfing()')
// -----------------------------------
// Lokaæfing
// -----------------------------------
const studentNames = ["Jón", "Sara", "Ali", "Eva", "Klara"]
console.log('allir nemendur: ' + JSON.stringify(studentNames))
// 1. Notaðu map til að búa til nýtt array með öllum nöfnum í hástöfum
const studentNamesInCaps = studentNames.map(name => name.toUpperCase());

console.log('allir nemendur í hástöfum: ' + JSON.stringify(studentNamesInCaps))
// 2. Notaðu filter til að halda bara nöfnum sem eru lengri en 3 stafir
const longStudentNames = studentNames.filter(name => name.length > 3);
console.log('allir nemendur með löng nöfn (3 stafir): ' + JSON.stringify(longStudentNames))

// 3. Notaðu find til að finna nafnið "Ali"
const studentsNamedAli = studentNames.find(name => name === 'Ali');
console.log('allir nemendur sem heita Ali ' + JSON.stringify(studentsNamedAli));

// 4. Notaðu some til að athuga hvort einhver heiti "Eva"
const anyStudentsNamedEva = studentNames.some(name => name === 'Eva');
console.log('Einhverjir nemendur sem heita Eva ' + anyStudentsNamedEva)
// 5. Notaðu every til að athuga hvort öll nöfnin séu lengri en 2 stafir
const allStudentNamesLongerThanTwoLetters = studentNames.every(str => str.length > 2)
console.log('Allir nemendur með meira en tveggja stafa nafn ' + allStudentNamesLongerThanTwoLetters)
// 6. Notaðu join til að búa til einn streng með öllum nöfnunum, aðskildum með ", "
const allStudentsSeperatedWithComma = studentNames.join(',');
console.log('Allir nemendur: ' + allStudentsSeperatedWithComma)

// TODO

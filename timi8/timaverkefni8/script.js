function checkCharacter() {
   console.log('Check Caracter age\n')

   // 1. Ná í name, age og score
   let name = document.getElementById("name").value;
   // 2. Breyta age og score í Number

   let age = Number(document.getElementById("age").value);
   let score = Number(document.getElementById("score").value);
   
   console.log(`name : ${name}`)
   console.log(`age : ${age}`)
   console.log(`score : ${score}`)
 
   // 3. Ef eitthvað vantar → sýna villu
   if(name === "") {
      document.getElementById("output").innerText = "nafn vantar";
      return;
   }

   if(isNaN(age)|| age === 0) {
      document.getElementById("output").innerText = "aldur vantar";
      return;
   }
   
   if(isNaN(score)|| score === 0) {
      document.getElementById("output").innerText = "score vantar";
      return;
   }
   // 4. Nota if / else:
   // ef age < 18 skila þá "Of ung/ur til að spila"
   if (age<18) {
      message = "Of ung/ur til að spila"
   } 
   // ef score > 80 og age >= 18 "Pro"
   else if (score > 80) {
      message = "Pro player"
   }
   
   // ef score > 50 en < 80 "Normal"
   else if (score > 50 && score <= 80) {
      message = "Normal player"
   }
   // annars skila "Beginner"
   else {
      message = "Beginner"
   }
   // 5. Sýna niðurstöðu í output
   document.getElementById("output").innerText = message;
  }

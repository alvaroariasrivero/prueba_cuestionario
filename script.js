function correct() {
    alert("respuesta correcta")
  }

function incorrect() {
    alert("respuesta incorrecta")
}


// async function getQ() {
//   try {
//     let response = await fetch('https://opentdb.com/api.php?amount=10&category=11&type=multiple')
//     let data = await response.json()
//     console.log(data)
//     let ronda = await data.results[0]
//     let correcta = ronda.correct_answer
//     let incorrecta = ronda.incorrect_answers
//     let pregunta = ronda.question
//     let objQue = {
//       question: pregunta,
//       correct: correcta,
//       incorrect1: incorrecta[0],
//       incorrect2: incorrecta[1],
//       incorrect3: incorrecta[2]
//     }
//     console.log(objQue)
    
//   } catch {

//   }
// }

async function getQ() {
  try{
      let response = await fetch('https://opentdb.com/api.php?amount=10&category=11&type=multiple')
      let data = await response.json()
      console.log(data)
      let ronda = await data.results
      let questions = []
      ronda.map((e) => {
      let correcta = e.correct_answer
      let incorrecta = e.incorrect_answers
      let pregunta = e.question
      let objQue = {
        question: pregunta,
        respuestas: [correcta, incorrecta[0], incorrecta[1], incorrecta[2]]
      }
      questions.push(objQue)
      
       let impreso = `<h4>${questions[questions.length-1].question}</h4>
                     <input type="radio" id="correcta">
                     <label for="correcta">${questions[questions.length-1].respuestas[0]}</label>
                     <input type="radio" id="incorrecta1">
                     <label for="incorrecta1">${questions[questions.length-1].respuestas[1]}</label>
                     <input type="radio" id="incorrecta2">
                     <label for="incorrecta2">${questions[questions.length-1].respuestas[2]}</label>
                     <input type="radio" id="incorrecta3">
                     <label for="incorrecta3">${questions[questions.length-1].respuestas[3]}</label>`
                     document.getElementById("pregunta"+(questions.length-1)).innerHTML = impreso;
    })
    console.log("la primera es la buena", questions) 
  } catch {
    console.log("error")
  }
}

getQ()

    // const rand = (max, min) => Math.floor(Math.random() * (max - min)) + min

    
    // const random = () => {
    //   let arrRandom = []
    //   const recursive = () => {
    //     const randomNumber = Math.floor(Math.random() * (4 - 0)) + 0
    //     if (arrRandom.includes(randomNumber) == false){
    //       arrRandom.push(randomNumber)
    //       console.log(randomNumber)
    //     } else {
    //       console.log("pasa por la recursiva")
    //       recursive()
    //     }
    //   }
    //   for (let i = 0; i < 4; i++ ) {
    //     recursive()
    //   } return arrRandom
    // }



// fetch('https://opentdb.com/api.php?amount=10')
//   .then(res=>res.json())
//   .then(json=>console.log(json))
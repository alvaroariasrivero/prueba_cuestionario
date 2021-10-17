// function correct() {
//     alert("respuesta correcta")
//   }

// function incorrect() {
//     alert("respuesta incorrecta")
// }


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
      let ronda = await data.results
      console.log("esto es ronda", ronda)
      let questions = ronda.map(({correct_answer, incorrect_answers, question}) => {
        console.log(correct_answer)

        let objQue = {
          question: question,
          respuestas: [correct_answer, incorrect_answers[0], incorrect_answers[1], incorrect_answers[2]]
        }
      
        return `<li>
                  <legend><b>${objQue.question}</b></legend>
                  <div class="contenido">
                    <div class="box rojo">
                      <input type="radio" id="correcta" name="answer">
                      <label for="correcta">${objQue.respuestas[0]}</label>
                    </div>
                    <div class="box verde">
                      <input type="radio" id="incorrecta1" name="answer">
                      <label for="incorrecta1" >${objQue.respuestas[1]}</label>
                    </div>
                  </div>
                  <div class="contenido">
                    <div class="box amarillo">
                      <input type="radio" id="incorrecta2" name="answer">
                      <label for="incorrecta2" >${objQue.respuestas[2]}</label>
                    </div>
                    <div class="box morado">
                      <input type="radio" id="incorrecta3" name="answer">
                      <label for="incorrecta3">${objQue.respuestas[3]}</label>
                    </div>
                  </div>
                  <button type="button" id="boton">NEXT</button>
                </li>`           
      }).join("")
      
      document.getElementById("preguntas").innerHTML = questions;
    
  } catch {
    console.log("error")
  }
}

getQ()

const submitBtn = document.getElementById("boton")





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
function correct() {
    alert("respuesta correcta")
  }

function incorrect() {
    alert("respuesta incorrecta")
}


async function getQ() {
  try {
    let response = await fetch('https://opentdb.com/api.php?amount=10&category=11&type=multiple')
    console.log(response)
    let data = await response.json()
    let ronda = await data.results[0]
    let correcta = ronda.correct_answer
    let incorrecta = ronda.incorrect_answers
    let pregunta = ronda.question
    let objQue = {
      question: pregunta,
      correct: correcta,
      incorrect: incorrecta
    }
    console.log(objQue)
    
  } catch {

  }
}

getQ()


// fetch('https://opentdb.com/api.php?amount=10')
//   .then(res=>res.json())
//   .then(json=>console.log(json))
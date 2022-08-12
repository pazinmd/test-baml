const quizData = [
    {
        question: "Что такое BAML",
        a: "Я не знаю, звоню на лп",
        b: "Я это не обрабатываю, переключаю на профильных специалистов",
        c: "Блокировка счета и закрытие договора",
        d: "Ограничение дистанционного банковского обслуживания",
        correct: "d",
    },
    {
        question: "Какие есть процедуры и как выбрать нужную?",
        a: "Специнфо AML",
        b: "Специнфо AML, Что с обращением",
        c: "Помощь по обращению",
        d: "BAML ",
        correct: "b",
    },
    {
        question: "Что такое неподтвержденный денежный поток?",
        a: "Деньги, легальность происхождения которых клиент не может подтвердить",
        b: "Пополнения от неизвестных людей",
        c: "Деньги в больших количествах, которые поступают клиенту из разных источников",
        d: "Как отсюда на лп позвонить, не понимаю",
        correct: "a",
    },
    {
        question: "Какими документами и пунктами в этих документах банк руководствуется при принятии решения о BAML?",
        a: "УКБО пункты .....",
        b: "115-фз (ст 7 п 14), УКБО пункты .....",
        c: "115-фз (ст 7 п 14)",
        d: "Гражданский и моральный кодекс",
        correct: "b",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})

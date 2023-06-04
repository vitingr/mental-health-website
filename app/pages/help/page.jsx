"use client"

import React, { useState } from 'react'
import { quiz } from '../../data.js'

const page = () => {

  const [points, setPoints] = useState(0)
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [checked, setChecked] = useState(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState("")

  const { questions } = quiz
  const { question, answers } = questions[activeQuestion]

  const onAnswerSelected = (answer, index) => {
    setChecked(true)
    setSelectedAnswerIndex(index)

    // Calculo de Pontos

    if (index === 0) {
      setPoints(points + 20)
    }
    if (index === 1) {
      setPoints(points + 40)
    }
    if (index === 2) {
      setPoints(points + 60)
    }
    if (index === 3) {
      setPoints(points + 80)
    }
    if (index === 4) {
      setPoints(points + 100)
    }
  }

  // Proxima Questão

  const nextQuestion = () => {

    setSelectedAnswerIndex(null)

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    } else {

      if (points > 200 <= 250) {
        setResult("Opcao 1")
      }

      if (points > 250 <= 350) {
        setResult("Opcao 2")
      }

      if (points > 350 <= 500) {
        setResult("Opcao 3")
      }

      if (points > 500 <= 750) {
        setResult("Opcao 4")
      }

      if (points > 750 <= 1000) {
        setResult("Opcao 5")
      }

      console.log(result)
      setActiveQuestion(0)
      setShowResult(true)
    }

    setChecked(false)

  }

  return (
    <div>
      <section className='main-section'>
        <div className='glassmorphism'>
          <div className='questions-container'>
            <div>
              <h1>
                Quiz Page
              </h1>
              <h4>
                {!showResult ? (
                  <div>
                    <span>Questão {activeQuestion + 1}</span>
                    <span>/{questions.length}</span>
                  </div>
                ) : (
                  <div></div>
                )}

              </h4>
            </div>
            <div>
              {!showResult ? (
                <div className='quiz-container'>
                  <h3>{questions[activeQuestion].question}</h3>
                  {answers.map((answer, idx) => (
                    <li
                      key={idx}
                      onClick={() => onAnswerSelected(answer, idx)}
                      className={
                        selectedAnswerIndex === idx ? 'li-selected' : 'li-hover'
                      }
                    >
                      {answer}
                    </li>
                  ))}
                  {checked ? (
                    <button onClick={nextQuestion} className='quiz-button'>
                      {activeQuestion === question.length - 1 ? "Finalizar" : "Avançar"}
                    </button>
                  ) : (
                    <button onClick={nextQuestion} disabled className='quiz-button-disabled'>
                      {' '}
                      {activeQuestion === question.length - 1 ? "Finalizar" : "Avançar"}
                    </button>
                  )}
                </div>
              ) : (
                <div className='result-container'>
                  <h4>
                    Resultado
                  </h4>
                  <div className='result-message'>
                    <h3>
                      {result}
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aperiam praesentium illum. Molestiae, unde dicta aliquid consequuntur omnis quas similique veniam sed nisi saepe soluta dolor sapiente ad, quasi iste?
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>




      </section>
    </div>
  )
}

export default page
"use client"

import React, { useState } from 'react'
import { quiz } from '../../data.js'
import Image from 'next/image.js'

const page = () => {

  const [points, setPoints] = useState(0)
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [checked, setChecked] = useState(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState("")
  const [text, setText] = useState("")
  const [photo, setPhoto] = useState("")

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

    console.log(points)
    setSelectedAnswerIndex(null)

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    } else {

      if (points >= 200 && points <= 250) {
        setResult("Sua saúde mental está estável, porém ainda sim é recomendado a terapia.")
        setText("Ao contrário do que se pode pensar, a terapia é recomendada para qualquer pessoa que deseja melhorar aspectos emocionais em sua vida e não somente para quem tem algum tipo de transtorno mental. O terapeuta tem a função de auxiliar o paciente na busca por respostas, fazendo-o entender o porquê do surgimento de certos pensamentos e atitudes.")
        setPhoto("/assets/images/result1.png")
      }

      if (points > 250 && points <= 350) {
        setResult("Gestalt-terapia")
        setText("A linha de trabalho da Gestalt-terapia enfatiza o autoconhecimento e o crescimento pessoal, focando no homem e em suas percepções do presente, como capacidade de se autogerir e regular.")
        setPhoto("/assets/images/result2.png")
      }

      if (points > 350 && points <= 500) {
        setResult("Terapia Cognitiva-comportamental")
        setText("É um tratamento psicoterapêutico que se propõe a ajudar o paciente identificando nele padrões de pensamentos, crenças e hábitos disfuncionais que, por sua vez, têm influência negativa em seus comportamentos e suas emoções.")
        setPhoto("/assets/images/result3.png")
      }

      if (points > 500 && points <= 750) {
        setResult("Tratamento de Psicanálise.")
        setText("Um dos maiores objetivos da Psicanálise é criar um vínculo entre terapeuta e paciente, a fim de compreender os processos reprimidos pelo subconsciente, que geram sintomas como a angústia ou a ansiedade. Todo esse acompanhamento é realizado por meio da interpretação das ações e pensamentos do indivíduo")
        setPhoto("/assets/images/result4.png")
      }

      if (points > 850) {
        setResult("Procure o mais rápido possível, caso extremamente grave! 💀 ")
        setText("Sinto muito em informar... porém, atualmente você está apresentando um altíssimo grau de loucura e insanidade, procure um psiquiatra o mais rápido possível, caso contrário, a situação pode sair ainda mais do controle e causar danos irreversivéis para a sociedade.")
        setPhoto("/assets/images/result5.png")
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
                    <img src={photo} alt="photo-answer" width={250} height={250} className='photo-quiz' />
                    <h3>
                      {result}
                    </h3>
                    <p>
                      {text}
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

import { useState } from 'react'

type QuickCheckOption = {
  label: string
  text: string
}

type QuickCheckProps = {
  question: string
  options: QuickCheckOption[]
  correctAnswer: string
  explanation: string
}

function QuickCheck({ question, options, correctAnswer, explanation }: QuickCheckProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<string>('')

  const handleSelect = (answer: string) => {
    setSelectedAnswer(answer)
    if (answer === correctAnswer) {
      setFeedback('Correct!')
    } else {
      setFeedback(`Not quite. ${explanation}`)
    }
  }

  return (
    <div className="quiz-card">
      <h3>{question}</h3>
      <div className="quiz-options" role="group" aria-label={question}>
        {options.map((option) => {
          const isSelected = selectedAnswer === option.label
          const isCorrect = option.label === correctAnswer
          const showCorrect = selectedAnswer !== null && isCorrect
          const showIncorrect = selectedAnswer === option.label && selectedAnswer !== correctAnswer

          return (
            <button
              key={option.label}
              type="button"
              className={[
                'quiz-option-button',
                isSelected ? 'selected' : '',
                showCorrect ? 'correct' : '',
                showIncorrect ? 'incorrect' : '',
              ].filter(Boolean).join(' ')}
              onClick={() => handleSelect(option.label)}
              aria-pressed={isSelected}
            >
              <span>{option.text}</span>
            </button>
          )
        })}
      </div>

      {feedback && (
        <p className={`quiz-feedback ${selectedAnswer === correctAnswer ? 'success' : 'error'}`}>
          {feedback}
        </p>
      )}
    </div>
  )
}

export default QuickCheck

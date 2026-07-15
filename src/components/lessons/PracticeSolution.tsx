import { useState } from 'react'

type PracticeSolutionProps = {
  instructions: string
  solutionCode: string
  languageLabel: string
  explanation: string
}

function PracticeSolution({
  instructions,
  solutionCode,
  languageLabel,
  explanation,
}: PracticeSolutionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="practice-solution-card">
      <p className="practice-instructions">{instructions}</p>
      <button
        type="button"
        className="practice-toggle"
        onClick={() => setIsExpanded((current) => !current)}
        aria-expanded={isExpanded}
      >
        {isExpanded ? 'Hide Example Solution' : 'Show Example Solution'}
      </button>

      {isExpanded && (
        <div className="practice-solution-panel">
          <p className="practice-language">Example solution in {languageLabel}</p>
          <pre>
            <code>{solutionCode}</code>
          </pre>
          <p className="practice-explanation">{explanation}</p>
        </div>
      )}
    </div>
  )
}

export default PracticeSolution

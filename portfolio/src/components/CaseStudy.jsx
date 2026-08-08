import ImageGallery from './ImageGallery'

function CaseStudySection({ eyebrow, title, body, tone = 'default' }) {
  return (
    <div
      className={[
        'rounded-xl border p-6',
        tone === 'challenge'
          ? 'border-primary/25 bg-primary/[0.04]'
          : 'border-secondary/25 bg-secondary/[0.04]',
      ].join(' ')}
    >
      <span
        className={[
          'text-xs font-mono uppercase tracking-wide',
          tone === 'challenge' ? 'text-primary' : 'text-secondary',
        ].join(' ')}
      >
        {eyebrow}
      </span>
      <h4 className="mt-2 text-lg font-semibold text-white">{title}</h4>
      <p className="mt-3 text-sm leading-relaxed text-text-secondary">{body}</p>
    </div>
  )
}

export default function CaseStudy({ caseStudy }) {
  const { challenge, solution, screenshots = [], architecture = [] } = caseStudy

  return (
    <div className="space-y-10 border-t border-border pt-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {challenge && (
          <CaseStudySection
            eyebrow="The hardest problem"
            title={challenge.title}
            body={challenge.body}
            tone="challenge"
          />
        )}
        {solution && (
          <CaseStudySection
            eyebrow="What I solved"
            title={solution.title}
            body={solution.body}
            tone="solution"
          />
        )}
      </div>

      {solution?.stats && solution.stats.length > 0 && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {solution.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-card px-5 py-4 text-center"
            >
              <div className="text-2xl font-semibold text-white sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      )}

      {screenshots.length > 0 && (
        <div>
          <h4 className="text-sm font-mono uppercase tracking-wide text-text-secondary">
            Screenshots
          </h4>
          <div className="mt-4">
            <ImageGallery images={screenshots} columns={3} />
          </div>
        </div>
      )}

      {architecture.length > 0 && (
        <div>
          <h4 className="text-sm font-mono uppercase tracking-wide text-text-secondary">
            Architecture
          </h4>
          <div className="mt-4">
            <ImageGallery images={architecture} columns={architecture.length > 1 ? 2 : 1} />
          </div>
        </div>
      )}
    </div>
  )
}

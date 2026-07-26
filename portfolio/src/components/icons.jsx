// A small set of original, monoline icons used only in the Skills grid.
// Kept abstract/geometric rather than reproducing any brand's actual logo.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconOrbit({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
    </svg>
  )
}

export function IconHex({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 2.5 20.5 7.5V16.5L12 21.5L3.5 16.5V7.5Z" />
      <path d="M12 2.5V21.5" opacity="0.35" />
    </svg>
  )
}

export function IconLayers({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 3 21 8 12 13 3 8Z" />
      <path d="M3 13 12 18 21 13" />
      <path d="M3 17.5 12 22.5 21 17.5" opacity="0.5" />
    </svg>
  )
}

export function IconPrism({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 17 12 3 20 17Z" />
      <path d="M8 17 12 9.5 16 17" opacity="0.5" />
    </svg>
  )
}

export function IconDatabase({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <ellipse cx="12" cy="5.5" rx="7.5" ry="2.6" />
      <path d="M4.5 5.5V18.5C4.5 19.9 7.9 21 12 21C16.1 21 19.5 19.9 19.5 18.5V5.5" />
      <path d="M4.5 12C4.5 13.4 7.9 14.5 12 14.5C16.1 14.5 19.5 13.4 19.5 12" />
    </svg>
  )
}

export function IconStack({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <ellipse cx="12" cy="5.5" rx="7.5" ry="2.6" />
      <path d="M4.5 5.5V18.5C4.5 19.9 7.9 21 12 21C16.1 21 19.5 19.9 19.5 18.5V5.5" opacity="0.6" />
      <path d="M4.5 12C4.5 13.4 7.9 14.5 12 14.5C16.1 14.5 19.5 13.4 19.5 12" opacity="0.6" />
    </svg>
  )
}

export function IconPen({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M12.5 4.5H15C16.6569 4.5 18 5.84315 18 7.5C18 9.15685 16.6569 10.5 15 10.5H9" />
      <circle cx="9" cy="15" r="3.5" opacity="0.6" />
    </svg>
  )
}

export function IconBlueprint({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="1.5" />
      <path d="M3.5 9H20.5" opacity="0.5" />
      <path d="M9 9V20.5" opacity="0.5" />
      <path d="M9 14.5H20.5" opacity="0.5" />
    </svg>
  )
}

export function IconCode({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M8.5 7.5 3.5 12L8.5 16.5" />
      <path d="M15.5 7.5 20.5 12L15.5 16.5" />
      <path d="M13.2 5.5 10.8 18.5" opacity="0.6" />
    </svg>
  )
}

export function IconAperture({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="16.3" cy="7.7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconSignal({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M5 5L19 19" />
      <path d="M5 19L19 5" opacity="0.6" />
    </svg>
  )
}

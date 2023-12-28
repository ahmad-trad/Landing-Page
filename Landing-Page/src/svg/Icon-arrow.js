const Arrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={6}
    height={5}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h5v6H0z" transform="matrix(0 1 1 0 0 0)" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="matrix(.025 0 0 .02083 -.1 0)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAoElEQVR4nO3XMQqDUBCE4T97zuQ2gVSSIoWVOaMQBDuD8GwkdXZH5wP7eTMiPjCTF8AL+AB3BMMPwNKeEeHwC9Ah4gL0u/DvdqjyHD6Lm8/i5rMcrvnB4f/AzWdx81ncfKXLiMx3fnVTDr+6qh8g1F8h+Z+1jQ9RhZeowktU4SWq8BJVeIkqvEQVh1giflyKnoiJ3SEmBEVrfgYe2WHsdL7ngqqPKhKi/QAAAABJRU5ErkJggg=="
        id="b"
        width={48}
        height={48}
      />
    </defs>
  </svg>
)
export default Arrow;

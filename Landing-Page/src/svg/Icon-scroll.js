const Scroll = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={10}
    height={105}
    fill="none"
  >
    <g clipPath="url(#a)">
      <path
        fill="url(#b)"
        d="M2.071 104.798h8v8h-8z"
        transform="rotate(-105 2.07 104.798)"
      />
      <path stroke="#000" strokeWidth={0.5} d="M9.25 0v96" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h9.798v104.798H0z" />
      </clipPath>
      <pattern
        id="b"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#c" transform="scale(.02083)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADjklEQVR4nO2ZW4hOURTHf+M6hNzKZUxMbiFTLpkZSbyMB4QXKXlwfSApmihlkHIrwovkMqUIL1I84GUUJWZcIsmEEXKrETFjMEdb69Tu9J3v7LW/72vmq/nX6qt91lpn/c/ea6+19wed6MR+4DP8/807rAICS9aSR5gM/IgQaAamkAfoBTyLBB/KU6CQDo6DMcEHIofowJgB/Ekg8Bco933BHlmbjUAtcAaoAiqBIRkG3xV4nBB8IHJf9NWIJlZUGoAa2UFKlL7XOAYfiGzwIfBG+RKTdPuAWUBBGr99gPdK35+AvloCtcqX2PIC2AoMTuF3p6fP7VoCNRkQCOUncBootfxOkXWt9dUEDNAQqMoCAXs3uQCMFd/dgC0OeRZExNg4ozKLBOwKa5ZQT3nHNOCdcml2cSUwJAcEQqkHxsl7RgAPFbbzNLPQkOBspqzveg8S32SWDfoBdY5257OZyGWi1wPY61BZo9IKLBMfQ4GXDjZfNIVttcOa3mTt+7M99vjfwEKxHy8BBo4fLhEljkFcB4aLTRFwT0miWQogsixbE/R3oMAjxyDMl6+w2uSLShIfgGKx35Gge0VDYLciiBZgpdiZdXpSSeIu0F3qRLpZfK4hMFUZRBuwTWxNbhxW2leL7UT5IHFV2RkFwjhQygEruTUkWiV4g2NpEl+FzR4EAgkAqZ7nFHbXxK44ZhZMj6XCADHyIVFt1YobCrsKsTue4pm5flHjtCcBI+vFh+npnzjaXBKb6TE9kRql0lX6EDB2i8XPJMcu9BcwUPKoMfLsJp64kMEsfAVGx1xkBTGyQvSPRMZP+BIYK1XTl0S9dddz1kH/qOguj4yvIwP4HglDMUkZno1fJ+jesc4N9ri5zfNGT8/22ZZF4mtBgl6T6PW3xl4lXBo4YZz0874E3soZwOByGr1wvy+0xrJ2e13p0DWmE1Odwxb6d4yO8Y/0R4GcN0aRRSzLgITZJsekKVaBdKj28dbUoqxjfgZV2mzLBiNjZuGWPC+TfBhGjmAOIx89C5xZQnHbarjMzLa5lByjSLY9LYlTMVulkbnyLOxOc44e0rzF9fGpxBRG0zIYPLDGGzR3QNnGBOCqgsRGsdtojZnOtd1RLmfjpBmps5Zhm4y1+NxI5wqDpDGrkSoeFsE2uTq/bRU2+4JrCXmIXSn6przCHIuASeq8Q2+p0obAd/IU1ZIb6n9lOkE74R/AxLbm00Ou0QAAAABJRU5ErkJggg=="
        id="c"
        width={48}
        height={48}
      />
    </defs>
  </svg>
)
export default Scroll;

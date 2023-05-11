import * as React from "react"

const RecButton = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={34} height={34} {...props}>
    <g fill="none" fillRule="evenodd" transform="translate(1 1)">
      <path
        stroke="#9B9B9B"
        strokeWidth={1.5}
        d="M16 32c8.822 0 16-7.177 16-16 0-8.822-7.178-16-16-16S0 7.177 0 16c0 8.822 7.178 16 16 16z"
      />
      <circle cx={16.143} cy={16.143} r={3.699} fill="#9B9B9B" />
    </g>
  </svg>
)

export default RecButton

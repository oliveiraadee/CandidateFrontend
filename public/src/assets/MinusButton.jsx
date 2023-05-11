import * as React from "react"

const MinusButton = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={34} height={34} {...props}>
    <g fill="none" fillRule="evenodd" stroke="#9B9B9B">
      <path
        strokeWidth={1.5}
        d="M17 33c8.822 0 16-7.177 16-16 0-8.822-7.178-16-16-16S1 8.177 1 17c0 8.822 7.178 16 16 16z"
      />
      <g transform="translate(10 10)">
        <rect
          width={1}
          height={13}
          x={6.5}
          y={0.5}
          rx={0.5}
          transform="rotate(90 7 7)"
        />
      </g>
    </g>
  </svg>
)

export default MinusButton;
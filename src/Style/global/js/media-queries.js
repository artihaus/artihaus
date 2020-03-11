import { css } from 'styled-components'

const sizes = {
    desktop: 2400,
    laptopL: 1439,
    laptop: 1023,
    tablet: 819,
    mobileL: 767,
    mobile: 424
}

export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label] / 16}em) {
            ${css(...args)}
        }
    `
    return acc
}, {})

// Example for styled components only
// ${media.desktop`background:blue;`}
// ${media.tablet`font-size: .5em;`}

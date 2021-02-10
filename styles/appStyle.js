import { createGlobalStyle } from 'styled-components'

const AppStyle = createGlobalStyle`
    @font-face {
    font-family: 'Dosis';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/dosis/v19/HhyaU5sn9vOmLzlnC_W6EQ.woff2') format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    @font-face {
    font-family: 'Dosis';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/dosis/v19/HhyaU5sn9vOmLzlmC_W6EQ.woff2') format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    @font-face {
    font-family: 'Dosis';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/dosis/v19/HhyaU5sn9vOmLzloC_U.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    @font-face {
    font-family: 'Dosis';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/dosis/v19/HhyaU5sn9vOmLzlnC_W6EQ.woff2') format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    @font-face {
    font-family: 'Dosis';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/dosis/v19/HhyaU5sn9vOmLzlmC_W6EQ.woff2') format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    @font-face {
    font-family: 'Dosis';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/dosis/v19/HhyaU5sn9vOmLzloC_U.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    @font-face {
    font-family: 'Dosis';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/dosis/v19/HhyaU5sn9vOmLzlnC_W6EQ.woff2') format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    @font-face {
    font-family: 'Dosis';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/dosis/v19/HhyaU5sn9vOmLzlmC_W6EQ.woff2') format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    @font-face {
    font-family: 'Dosis';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/dosis/v19/HhyaU5sn9vOmLzloC_U.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url('https://fonts.gstatic.com/s/materialicons/v77/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2') format('woff2');
    }
    .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
    }

    html, body, #root {
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
    }

    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        font-family: Dosis, Arial, Helvetica, sans-serif;

        main {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #002847;
            color: #ffffff;
        }
    }

    #home-button-float {
        position: fixed;
        display: flex;
        color: #ffffff;
        align-items: center;
        justify-content: center;
        bottom: 10px;
        right: 10px;
        background-color: #57284c;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        transition: 0.25s;

        :hover {
            background-color: #ea2a40;
        }
    }
`

export default AppStyle

import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Slab', serif;
    }

    :root{
        font-size: 62.5%;
    }

    body{
        font-size: 1.6rem;
        background-color: ${({theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({theme }) => theme.COLORS.WHITE};
    }

    a{
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover{
        filter: brightness(0.9);
    }
`;
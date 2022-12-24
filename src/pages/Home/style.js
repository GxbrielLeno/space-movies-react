import styled from 'styled-components'
import './css.css'
export const Container = styled.div`

 h1 {   
        text-align: center;
        margin: 4rem 0;
        font-family:gameplay;
        font-size: 80px;
        color: var(--color-primary);
        text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.356);
    }

h3 {
    margin-left:1rem;
    font-size:22px;
    font-family:mineglobal;
    color: var(--text-color);
}
`
export const MovieList = styled.ul`
    margin-left: 3rem;
    margin-right: 3rem;
    list-style: none;
    display: grid;
    grid-template-columns:repeat(5, 1fr);
    column-gap: 2rem;
    row-gap: 4rem;
`
export const Movie = styled.li`
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;

img {
    width: 150px;
    border-radius: 8px;
    margin-bottom: 2rem;
    box-shadow: 1px 1px 10px 3px black;
}

span {
    font-weight:bold;
    font-size: 120%;
    text-align: center;
    font-family: "League Spartan";
    color: var(--text-color);
}

a {
    transition: all 0.3s;
}

a:hover {
    transform: scale(1.1);
}
` 
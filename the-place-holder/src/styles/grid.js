import styled from 'styled-components'

const GridLayout=styled.div`
    display:grid;
    grid-template-columns: 1fr .3fr;
    grid-template-rows: auto auto auto auto; 
    grid-template-areas:
    "heder  heder"
    "util  menu-lateral"
    "util  ."
    "footer footer";

    .util { grid-area: util; }

`
export default GridLayout
import styled from 'styled-components'

const Gamestyle=styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-around;

    div{
        display:flex;
        justify-content:space-around;
    }

    button{
        margin: 100px auto 5px auto;
        background-color: gray;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        font-size: 16px;
        width:10%;
    }button:hover{background-color:black}

    div#reference{
        margin: auto;
        flex-wrap:wrap;
        align-items:center;
        flex-direction:column;
        justify-content:center;
    }

`

export default Gamestyle
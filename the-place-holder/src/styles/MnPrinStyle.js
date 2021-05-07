import styled from 'styled-components'

const MnPrinStyle=styled.div`
margin-top:10%;
display:flex;
flex-direction:column;
justify-content:space-between;
div{
    margin:auto;
    margin-bottom:15px;
}
ul{
    margin:auto;

    display:flex;
    flex-direction:row;
    justify-content:space-around;

    font-size:50px;
    list-style:none;
    li{
        a{
            margin:5px;
            padding:10px;

            background-color:black;
            color:white;
            font-weight:bold;
            text-decoration:none;
        }
        a:hover{transition: 0.3s; background-color:white; color:black; border:2px solid black}

    }
}

`

export default MnPrinStyle
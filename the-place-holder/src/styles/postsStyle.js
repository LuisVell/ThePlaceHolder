import styled from 'styled-components'

const PostDiv= styled.div`

    display:flex;
    flex-flow: row wrap;
    justify-content: space-around;
    
    div{
        border: 3px solid black;
        margin: 5px;
        max-height: 300px;
        max-width: 300px;
        a{text-decoration:none;color: black; }
        h2{
            //text-align:justify;
            margin:20px;
        }
        p{
            color:black;
            margin:20px;
            text-align:justify;
        }
    } 
    div:hover{transition:.5s; background-color:black;a{color:white}p{color:white}}  
`;

const PostHDiv=styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    h1{
        padding: 2px 100px 2px 10px;
        color:white;
        background-color:black;
    }
    form{
        input{
            padding:6px 15px;
            margin-right:5px;
        }
        button{
            background-color: black;
            border: none;
            color: white;
            padding: 6px 15px;
            font-size: 16px;
        }
    }
`

const MenuPosts=styled.div`
    display:flex;
    justify-content: space-around;
    align-items: baseline;
    button{
        background-color: gray;
        border: none;
        color: white;
        padding: 6px 15px;
        font-size: 16px;
    }
    button:hover{background-color:black}
`

export {PostDiv, PostHDiv, MenuPosts}
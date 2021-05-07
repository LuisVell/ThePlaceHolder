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
        a{text-decoration:none;color: blue;}
        h2{
            text-align:justify;
            margin:20px;
        }
        p{
            color:black;
            margin:20px;
            text-align:justify;
        }
    }   
`;

const PostHDiv=styled.div`
    display:flex;
    justify-content: space-between;
    align-items: baseline;
    h1{
        color:gray;
    }
    form{
        input{
            padding:6px 15px;
            margin-right:5px;
        }
        button{
            background-color: green;
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
        background-color: green;
        border: none;
        color: white;
        padding: 6px 15px;
        font-size: 16px;
    }
`

export {PostDiv, PostHDiv, MenuPosts}
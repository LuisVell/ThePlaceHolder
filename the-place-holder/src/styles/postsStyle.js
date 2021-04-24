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

export default PostDiv
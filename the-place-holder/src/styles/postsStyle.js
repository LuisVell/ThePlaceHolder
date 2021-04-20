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
        h2{
            a{text-decoration:none;color: blue;}
            text-align:justify;
            margin:20px;
        }
        p{
            margin:20px;
            text-align:justify;
        }
    }   
`;

export default PostDiv
import styled from 'styled-components'

const PostDiv= styled.div`
    display:flex;
    flex-flow: row wrap;
    justify-content: space-around;
    
    div{
        background-color:gray;
        margin: 5px;
        max-height: 300px;
        max-width: 300px;
        h2{
            a{text-decoration:none;color: blue;}
            background-color:yellow;
        }
        p{
            text-align:justify;
        }
    }   
`;

export default PostDiv
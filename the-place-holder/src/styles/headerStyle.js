import styled from 'styled-components'

const MainHeader = styled.header`
    font-size: 30px;
    display: flex;
    align-items: baseline;
    justify-content:space-between;
    padding: 0px 50px 0px 50px;
    flex-wrap: wrap;
    border-bottom: 1px solid black;
    div{
        display:flex;
        flex-wrap:nowrap
    }
    ul{
        align-content: space-around;
        list-style-type: none;
        li{
            padding: 2px;
            margin: 2px;
            background-color: black;
            display: inline;
            font-size: 25px;
            a{
                text-decoration: none;
                color:white;
            };
            a:hover{transition: 0.3s;background-color: white; color: black;} 
        }
    }
`;
export default MainHeader
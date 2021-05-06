import{useState} from 'react'

import paper from '../imgs/paper.jpg'
import rock from '../imgs/rock.png'
import scissor from '../imgs/scissor.png'

import Gamestyle from '../styles/gameStyle.js'

let P=0;
let W=0;
let L=0;
let D=0;

const PRS=()=>{
    const[status, setStatus]=useState()
    const[PlayerMove, setPM]=useState(null)
    const[Contador, setCont]=useState('Ganhou: 0  Empatou: 0  Perdeu:0')

    //Logica do JOGO
    //substituir LOGs por returns
    const inTTT=()=>{
        let E=Math.floor(Math.random()*3)+1
        let S
        if(P===E){
            S='Empate'
            D++
        }
        if((P===1&&E===3)||(P===2&&E===1)||(P===3&&E===2)){
            S='Ganhou'
            W++
        }
        if(((E===1&&P===3)||(E===2&&P===1)||(E===3&&P===2))){
            S='Perdeu'
            L++
        }
        switch(E){
            case 1:E='Pedra';break;
            case 2:E='Papel';break;
            case 3:E='Tesoura';break;
        }
        setCont('Ganhou: '+W+'  Empatou: '+D+'  Perdeu: '+L)
        setStatus(S+', inimigo jogou: '+E)
    }
    //fim do jogo

    return(
        <Gamestyle>
            <div>
                <img src={rock} onClick={()=>{P=1;setPM('Pedra')}} alt="Pedra" width='20%'></img>
                <img src={paper} onClick={()=>{P=2;setPM('Papel')}} alt="Papel" width='20%'></img>
                <img src={scissor} onClick={()=>{P=3;setPM('Tesoura')}} alt="Tesoura" width='20%'></img>
            </div>
            <button onClick={inTTT}>Jogar</button><br/>
            <div id='reference'>
                <h3>{PlayerMove==null?null:'Sua jogada: '+PlayerMove}</h3>
                <br/>
                <h2>{status}</h2>
                <br/>
                <h2>{Contador}</h2>
            </div>
        </Gamestyle>
    )
}

export default PRS
import{useState, useRef, useEffect} from 'react'

let P=0;
let W=0;
let L=0;
let D=0;

const TTT=()=>{
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
        <div>
            <img src='' onClick={()=>{P=1;setPM('Pedra')}}></img>

            <button onClick={()=>{P=1;setPM('Pedra')}}>Pedra</button>
            <button onClick={()=>{P=2;setPM('Papel')}}>Papel</button>
            <button onClick={()=>{P=3;setPM('Tesoura')}}>Tesoura</button>
            <button onClick={inTTT}>Jogar</button><br/>
            {PlayerMove==null?null:'Sua jogada: '+PlayerMove}
            <br/>
            {status}
            <br/>
            {Contador}
        </div>
    )
}

export default TTT
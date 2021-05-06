import MenulateralStyle from '../styles/menulateralStyle.js'
import {Posts} from '../services/post.js'
import Image from '../services/images.js'

const menuLateral = () =>{
    let posts =Posts()
    return(
        <MenulateralStyle>
            <h4>Ultimos Posts</h4>
            <ul>
                {posts.map((e)=>{
                    if(e.id<5){
                        return(
                            <div>
                                <li>
                                    <a href={'/post/'+e.id}>
                                    <h5>{e.title}</h5>
                                    <p>{e.body}</p>
                                    {Image(300,60)}
                                    </a>
                                </li>
                            </div>
                        )
                    }
                })}
            </ul>
        </MenulateralStyle>
    )
}
export default menuLateral;
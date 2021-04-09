import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import PostAlone from '../components/onlyPost.js'
import { useParams } from 'react-router'

const PostPage = ()=>{
    return(
        <div>
            {Header('Post')}
            {PostAlone(useParams())}
            {Footer('')}
        </div>
    )
}

export default PostPage
import Header from '../components/header.js'
import Footer from '../components/Footer.js'
import PostsRender from '../components/posts'

const Home = ()=> {
    return (
      <div>
        {Header('Home')}
        <PostsRender />
        {Footer('Home')}
      </div>
    );
}

export default Home;
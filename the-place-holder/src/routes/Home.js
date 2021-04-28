import Header from '../components/header.js'
import Footer from '../components/Footer.js'
import PostsRender from '../components/posts'
import menuLateral from '../components/menulateral'
import GridLayout from '../styles/grid'

function Home() {
    return (
      <GridLayout>
        {Header('Home')}
        <div class="util"><PostsRender /></div>
        {menuLateral()}
        {Footer('Home')}
      </GridLayout>
    );
}

export default Home;
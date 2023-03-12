import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";
import './Home.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function Home() {
    const navigate = useNavigate();  
    return (
        <>
            <Header>

                <Header />

            </Header>

            <main className="main">

                <Link to="/" onClick={()=>navigate(`/Home`)}>Home</Link>

                <Tours />

            </main>

            <footer>

                <Footer />

            </footer>
        </>
    );
}

export default Home;
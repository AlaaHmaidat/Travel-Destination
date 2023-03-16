import '../reset.css'
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";
import '../reset.css'
import './Home.css';

function Home() {
    return (
        <>
            <Header>

                <Header />

            </Header>

            <main className="main">
                <Tours />
            </main>

            <footer>

                <Footer />

            </footer>
        </>
    );
}

export default Home;
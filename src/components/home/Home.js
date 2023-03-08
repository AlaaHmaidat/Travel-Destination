import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";

const db = require('../../data/db.json');
function Home() {
    return (
        <>
            <Header>

                <Header />

            </Header>

            <main>
            
                    <Tours arrData={db} />

            </main>

            <footer>

                <Footer />

            </footer>
        </>
    );
}

export default Home;
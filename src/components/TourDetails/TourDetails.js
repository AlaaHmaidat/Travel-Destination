import Header from "../header/Header";
import Footer from "../footer/Footer";
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import './TourDetails.css'
import { useState } from "react";
const db = require('../../data/db.json');


function TourDetails() {
    // Get the id param from the URL.
    let { id } = useParams();

    console.log(id);
    let card = db.filter(obj => {
        return obj.id == id;
    })
    const [showMore, setShowMore] = useState(false);
    const text=card[0].info;

    return (
        <>
       
            <Header>

                <Header />

            </Header>

            <main className="main">
                <Card>
                    <Card.Img variant="top" src={card[0].image} />
                    <Card.Body>
                        <Card.Title>{card[0].name}</Card.Title>
                        <Card.Text>
                            {card[0].info}
                        </Card.Text>
                        {showMore ? text : `${text.substring(0, 250)}`}
                        <button className="btn" onClick={() => setShowMore(!showMore)}>
                        {showMore ? "Show less" : "Show more"}
                        </button>
                    </Card.Body>
                </Card>

            </main>

            <footer>

                <Footer />

            </footer>
        </>
    );
}

export default TourDetails;
import Tour from "./tour/Tour";
const db = require('../../data/db.json');

function Tours() {
    return (
        <>
            {db.map((dataOfDB) => {
                return (
                    <Tour key={dataOfDB.id} data={dataOfDB} />
                )
            })}
        </>
    );
}

export default Tours;
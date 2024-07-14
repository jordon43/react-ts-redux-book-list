import React from "react";
import {Link} from "react-router-dom";

const BookCard: React.FC<{idBook: number}> = ({idBook}) => {
    return(
        <div>
            <div className="cardBlock">
                <Link  to={`/book/${idBook}`}>card {idBook}</Link>
            </div>
        </div>
    )
}

export default BookCard;
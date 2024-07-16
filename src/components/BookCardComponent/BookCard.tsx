import React from "react";
import {Link} from "react-router-dom";
import {BookModel} from "../../models/bookModel";

const BookCard: React.FC<{book: BookModel}> = ({book}) => {
    return(
        <div className="w-1/3" style={{
            flexBasis: '30%'
        }}>
            <div className="cardBlock" >
                <img src="" alt="" style={{
                    backgroundColor: "black",
                }}/>
                {book.volumeInfo.description}
                {/*<Link to={`/book/${book}`}>card </Link>*/}
            </div>
        </div>
    )
}

export default BookCard;
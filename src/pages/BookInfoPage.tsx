import React from "react";
import {useParams} from "react-router-dom";

const BookInfoPage: React.FC = () => {
    const { bookId } = useParams<{bookId: string}>()
    return(
        <div>
            <h1>Book Info {bookId}</h1>
        </div>
    )
}

export default BookInfoPage;
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const BookInfoPage: React.FC = () => {
    const { bookId } = useParams<{bookId: string}>()

    const [bookInfo, setBookInfo]: any = useState({})

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}?key=${process.env.REACT_APP_API_KEY}`)
            .then((res) => {
                setBookInfo(res.data);
                console.log('res', res.data)
            })

    }, [])

    return(
        <div className='container mx-auto flex'>
            <div className="leftSide">
                <img
                    src={bookInfo?.volumeInfo?.imageLinks?.thumbnail}
                />
            </div>
            <div className="mainSide">
                <p>{bookInfo?.volumeInfo?.categories && bookInfo?.volumeInfo?.categories[0]}</p>
                <h1>{bookInfo?.volumeInfo?.title}</h1>
                {bookInfo?.volumeInfo?.authors && bookInfo?.volumeInfo?.authors.map((author: any) => (
                    <p>{author}</p>
                ))}
                <p>{bookInfo?.volumeInfo?.description}</p>
            </div>

        </div>
    )
}

export default BookInfoPage;
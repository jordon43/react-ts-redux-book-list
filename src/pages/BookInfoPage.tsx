import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Box, Typography} from "@mui/material";
import {BooksApi} from "../api";
import {fetchBookWithError} from "../models/fetchBookWithError.model";
import {BookModel} from "../models/book.model";


const BookInfoPage: React.FC = () => {

    const { bookId } = useParams<{bookId: string}>()
    const [bookInfo, setBookInfo] = useState<BookModel | null>(null)


    const fetchBook = async () => {
        if (bookId) {
            const response: fetchBookWithError = await BooksApi.fetchBook(bookId);
            return response;
        }
        return null
    }

    useEffect( () => {
        try{
            //как делать без then()
            fetchBook()
                .then(response => {
                    response && setBookInfo(response?.data)
                })
        }
        catch (error){
            console.error(error)
        }
    }, [])

    return(
        <Box className='container mx-auto flex'>
            <Box className="leftSide w-1/4">
                <img
                    width={200}
                    height={200}
                    src={bookInfo?.volumeInfo?.imageLinks?.thumbnail}
                />
            </Box>
            <Box className="mainSide w-3/4 text-left">
                <Typography className='font-bold'>{bookInfo?.volumeInfo?.categories && bookInfo?.volumeInfo?.categories[0]}</Typography>
                <Typography>{bookInfo?.volumeInfo?.title}</Typography>
                {bookInfo?.volumeInfo?.authors && bookInfo?.volumeInfo?.authors.map((author: any) => (
                    <Typography>{author}</Typography>
                ))}
                <Typography>{bookInfo?.volumeInfo?.description}</Typography>
            </Box>

        </Box>
    )
}

export default BookInfoPage;
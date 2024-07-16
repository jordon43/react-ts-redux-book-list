import React, {useEffect, useState} from "react";
import BookCard from "../components/BookCardComponent/BookCard";
import {useAppDispatch, useAppSelector} from "../hooks";
import {BookModel} from "../models/bookModel";
import {fetchGetBooks} from "../store/bookSlice";


const MainListPage: React.FC = () => {

    const dispatch = useAppDispatch();
    const booksState = useAppSelector((state) => state.testSlice);

    useEffect(() => {
        dispatch(fetchGetBooks())
    }, [])

    return (
        <div className="container mx-auto p-4" style={{
            maxWidth: 1280,
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <h1 className="text-3xl font-bold mb-4 text-center">Search for books</h1>
            <div className="searchBlock mx-auto text-center" style={{
            }}>
                <input type="text" className="mx-auto" style={{
                    border: '1px solid black',
                    maxWidth: 700,
                    padding: '10px',
                    height: 40,
                    width: '100%'
                }}/>
            </div>
            <div className="filterBlock">
                <select name="" id="">
                    <option>All</option>
                    <option>art</option>
                    <option>biography</option>
                </select>
            </div>

            <div className="cards" style={{
                display: 'flex',
                gap: '15px',
                flexWrap: 'wrap'

            }}>
                {
                    booksState.books?.map((book: BookModel) => (
                        <BookCard book={book}/>
                        )
                    )
                }
            </div>

        </div>
    )
}

export default MainListPage;
import React, {useEffect, useState} from "react";
import BookCard from "../components/BookCardComponent/BookCard";
import {useAppDispatch, useAppSelector} from "../hooks";
import axiosInstance from "../axiosConfig";
import {BookModel} from "../models/bookModel";


const MainListPage: React.FC = () => {
    const testData: Array<number> = [0, 1, 2, 3];

    const [data, setData] = useState<Array<BookModel> | null>(null);

    const dispatch = useAppDispatch();
    const books = useAppSelector((state) => state.testSlice);

    useEffect(() => {
        axiosInstance.get(`volumes?q=flowers+inauthor:keyes`)
            .then(res => {
                //TODO Как првильно присваивать разные типы
                console.log('res', res.data.items);
                setData(res.data.items)
                console.log('data', data)
            })
    }, [])


    console.log('books', books)
    return (
        <div className="container mx-auto p-4" style={{
            maxWidth: 1280,
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <h1 className="text-3xl font-bold mb-4 text-center">Search for books</h1>
            <div className="searchBlock">
                <input type="text"/>
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
                gap: '15px'

            }}>
                {
                    data?.map((book: BookModel) => (
                        <BookCard book={book}/>
                        )
                    )
                }
            </div>

        </div>
    )
}

export default MainListPage;
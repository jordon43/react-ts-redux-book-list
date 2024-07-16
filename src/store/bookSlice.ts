import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axiosInstance from "../axiosConfig";
import {BookModel} from "../models/bookModel";

type booksState = {
    books: BookModel[];
}

const initialState: booksState = {
    books: [],
};

const bookSlice = createSlice({
    name: 'bookSlice',
    initialState,
    reducers: {
        fetchGetBooks(state){
            axiosInstance.get(`volumes`)
                .then(res => {
                    console.log('res.data.items', res.data.items);
                    if (res.status === 200){
                        state.books = res.data.items
                    }

                    //TODO Как првильно присваивать разные типы

                    // console.log('res', res.data.items);
                    // setData(res.data.items)
                    // console.log('data', data)
                })
        }
    }
});

export const {
    fetchGetBooks
} = bookSlice.actions;

export default bookSlice.reducer;
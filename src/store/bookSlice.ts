import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axiosInstance from "../axiosConfig";
import {BookModel} from "../models/bookModel";
import {BooksApi} from "../api";

type booksState = {
    books: BookModel[];
    isLoadingBooks: boolean;
    countSearch: number | null
}

type paginationState = {
    perPage: number;
    currentPage: number;
}

type paramsFetchBooks = {
    searchText: string | null,
    category: string | null,
    typeSort: string | null,
    startIndex?: number,
    maxResults?: number,
}


const initialState: booksState & paginationState = {
    books: [],
    isLoadingBooks: false,
    countSearch: null,
    currentPage: 1,
    perPage: 40,
};

// param: Param
// const {startPage, xalypa} = param

export const fetchBooks = createAsyncThunk('volumes', async () => {
    // BooksApi.fetchAllBooks
})


const bookSlice = createSlice({
    name: 'bookSlice',
    initialState,
    reducers: {
        incrementPage(state) {
            state.countSearch && (state.countSearch += 1)
        },
        clearBooksState(state) {
            state.books = []
            state.isLoadingBooks = false
            state.countSearch = null
            state.currentPage = 1
            state.perPage = 40
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchBooks.pending, (state, action) => {
                state.isLoadingBooks = true
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                console.log(action)
                if (action.payload?.data?.items) {

                    state.books.push(...action.payload.data.items)
                    state.countSearch = action.payload.data.totalItems
                } else {
                    state.books = []
                    state.countSearch = 0
                }

                state.isLoadingBooks = false
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.isLoadingBooks = false
            })
    }
});

export const {
    incrementPage,
    clearBooksState
} = bookSlice.actions;




export default bookSlice.reducer;
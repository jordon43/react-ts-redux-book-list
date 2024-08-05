import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {BookModel} from "../models/book.model";
import {BooksApi} from "../api";
import {fetchAllBooksWithError} from "../models/fetchAllBooksWithError.model";


type booksState = {
    books: BookModel[];
    isLoadingBooks: boolean;
    countSearch: number | null;
    params: paramsFetchBooks
}

type paramsFetchBooks = {
    searchText: string,
    category: string,
    typeSort: string,
    perPage: number;
    currentPage: number;
}


export const fetchBooks = createAsyncThunk('volumes', async (params: paramsFetchBooks) => {
    const response: fetchAllBooksWithError  = await BooksApi.fetchAllBooks(params)
    return response
})


const initialState: booksState = {
    books: [],
    isLoadingBooks: false,
    countSearch: null,
    params: {
        searchText: '',
        category: 'all',
        typeSort: 'relevance',
        currentPage: 1,
        perPage: 40
    }
};

const bookSlice = createSlice({
    name: 'bookSlice',
    initialState,
    reducers: {
        incrementPage(state) {
            if (state.countSearch && state.countSearch >= state.params.currentPage + state.params.perPage) {
                state.params.currentPage += state.params.perPage
            }
        },
        clearBooksState(state) {
            state.books = []
            state.isLoadingBooks = false
            state.countSearch = null
            state.params.currentPage = 1
        },
        setCategory(state, action) {
            state.params.category = action.payload
        },
        setTypeSort(state, action){
            state.params.typeSort = action.payload
        },
        setSearchText(state, action) {
            state.params.searchText = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchBooks.pending, (state, action) => {
                state.isLoadingBooks = true
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
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
    clearBooksState,
    setCategory,
    setSearchText,
    setTypeSort
} = bookSlice.actions;


export default bookSlice.reducer;
import {Box, Button, TextField, Typography} from "@mui/material";
import {Search} from "@mui/icons-material";
import React from "react";
import {useAppDispatch, useAppSelector} from "../hooks";
import {clearBooksState, fetchBooks, setCategory, setSearchText, setTypeSort} from "../store/bookSlice";
// @ts-ignore
import SelectCategory from "./SelectCategory";
// @ts-ignore
import SelectSort from "./BookCardComponent/SelectSort";


const HeaderSearch = () => {
    const dispatch = useAppDispatch();
    const booksState = useAppSelector((state) => state.bookSlice);

//Сделать через useCallback and react.Memo itсиняк ytb
    const handleChangeCategory = (value: string) => {
        dispatch(setCategory(value))
        dispatch(clearBooksState())
        dispatch(fetchBooks(booksState.params))
    }

    const handleChangeSort = (value: string) => {
        dispatch(clearBooksState())
        dispatch(setTypeSort(value))
        dispatch(fetchBooks(booksState.params))
    }
    
    const searchBooks = () => {
        dispatch(clearBooksState())
        dispatch(fetchBooks(booksState.params))
    }

    return(
        <>
            <Typography className="text-3xl font-bold mb-4 text-center">Search for books</Typography>
            <Box className="searchBlock mx-auto text-center">
                <TextField
                    value={booksState.params.searchText}
                    onChange={(e) => dispatch(setSearchText(e.target.value))}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={searchBooks}
                >
                    <Search/>
                </Button>
            </Box>
            <Box className="filterBlock">
                <SelectCategory
                    categoryInput={booksState.params.category}
                    handleChangeCategory={(value) => handleChangeCategory(value)}
                />
                <SelectSort
                    sortValue={booksState.params.typeSort}
                    handleChangeSort={(value) => handleChangeSort(value)}
                />
            </Box>
        </>
    )
}

export default HeaderSearch
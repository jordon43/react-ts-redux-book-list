import {Button, TextField} from "@mui/material";
import {Search} from "@mui/icons-material";
import SelectCategory from "./selectCategory";
import SelectSort from "./BookCardComponent/selectSort";
import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "../hooks";
import {clearBooksState, fetchBooks, incrementPage} from "../store/bookSlice";


const HeaderSearch = () => {
    const dispatch = useAppDispatch();
    const booksState = useAppSelector((state) => state.bookSlice);

    const [categoryInput, setCategoryInput] = useState<string>("all");
    const [searchText, setSearchText] = useState<string>('')
    const [sortValue, setSortValue] = useState<string>("relevance");


    const getBooks = () => {
        dispatch(fetchBooks(
            {
                searchText: searchText,
                category: categoryInput,
                typeSort: sortValue
            }))
    }

//Сделать через useCallback and react.Memo itсиняк ytb
    const handleChangeCategory = (value: any) => {
        setCategoryInput(value)
        dispatch(clearBooksState())
        getBooks()

    }

    const handleChangeSort = (value: any) => {
        setSortValue(value)
        dispatch(clearBooksState())
        getBooks()
    }

    const loadMore = () => {
        dispatch(incrementPage())
        getBooks()
    }


    return(
        <>
            <h1 className="text-3xl font-bold mb-4 text-center">Search for books</h1>
            <div className="searchBlock mx-auto text-center">
                <TextField
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={getBooks}
                >
                    <Search/>
                </Button>
            </div>
            <div className="filterBlock">
                <SelectCategory
                    categoryInput={categoryInput}
                    handleChangeCategory={(value) => handleChangeCategory(value)}
                />
                <SelectSort
                    handleChangeSort={(value) => handleChangeSort(value)}
                    sortValue={sortValue}
                />

            </div>
        </>
    )
}

export default HeaderSearch
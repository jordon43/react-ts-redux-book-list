import {MenuItem, Select} from "@mui/material";
import React from "react";


type selectSortModel = {
    sortValue: string
    handleChangeSort: (sortValue: string) => void
}

const selectSort: React.FC<selectSortModel> = (props) => {
    const {sortValue, handleChangeSort} = props
    const sortOption: Array<string> = ['relevance', 'newest']
    return (
        <Select
            label={'sort'}
            value={sortValue}
            onChange={e => handleChangeSort(e.target.value)}
        >
            {
                sortOption.map((option, index) => (
                    <MenuItem key={index} value={option}>
                        {option}
                    </MenuItem>
                ))
            }
        </Select>
    )
}

export default selectSort
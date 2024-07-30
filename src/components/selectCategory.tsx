import React from "react";
import {MenuItem, Select} from "@mui/material";

type paramsSelectCategory = {
    categoryInput: string,
    handleChangeCategory: (value: string) => void,
}


const SelectCategory: React.FC<paramsSelectCategory> = (
    {
        categoryInput,
        handleChangeCategory
    }
) => {
    const categoryOption: Array<string> = [
        'all',
        'art',
        'biography',
        'computers',
        'history',
        'medical',
        'poetry'
    ]

    return(
        <Select
            label={'category'}
            value={categoryInput}
            onChange={(event) => handleChangeCategory(event.target.value)}
        >
            {
                categoryOption.map((option, index) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))
            }
        </Select>
    )
}

export default SelectCategory;
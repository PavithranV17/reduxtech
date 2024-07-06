import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "cart",
    initialState: {
        cList: JSON.parse(localStorage.getItem("cList")) || [],
        sum: JSON.parse(localStorage.getItem("sum")) || 0,
    },

    reducers: {
        add(state, action){
            const addProd = state.cList.concat(action.payload);
            const total = state.sum + action.payload.price

            return { ...state, cList: addProd, sum: total};
        },

        remove(state, action){
            const remProd = state.cList.filter(rItem => rItem.id !== action.payload.id);
            const total = state.sum - action.payload.price

            return { ...state, cList: remProd, sum: total};
        },
    }
});

export const { add, remove } = slice.actions;
export const cartReducer = slice.reducer;
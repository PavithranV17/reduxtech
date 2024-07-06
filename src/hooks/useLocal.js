import { useSelector } from 'react-redux';
import { useEffect } from "react";

export const useLocal = () => {

    const cList = useSelector(state => state.cartState.cList);
    const sum = useSelector(state => state.cartState.sum);

    useEffect(() => {
        localStorage.setItem("cList", JSON.stringify(cList));
        localStorage.setItem("sum", JSON.stringify(sum));
    },[cList, sum]);

}

import { TypedUseSelectorHook } from "react-redux/es/types";
import { RootState, AppDispatch } from "./store";
import {useDispatch, useSelector} from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

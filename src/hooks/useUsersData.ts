import axios, { AxiosPromise } from "axios"
import { UserData } from "../interface/userData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080/usuarios"

const fetchData =async (): AxiosPromise<UserData[]> => {
    const response = axios.get(API_URL);
    return response;
    
}

export function useUsersData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['user-data'],
        retry: 2
    })


    return {
        ...query ,
        data: query.data?.data
    }
}
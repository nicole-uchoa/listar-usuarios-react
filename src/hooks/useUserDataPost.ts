import axios, { AxiosPromise } from "axios"
import { UserData } from "../interface/userData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8080/usuarios"

const postData = async (data: UserData): AxiosPromise<any> => {
    const response = axios.post(API_URL, data);
    return response;
    
}

export function useUsersDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries()
        }
    })

    return mutate;
}
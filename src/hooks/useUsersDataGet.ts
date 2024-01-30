import axios, { AxiosPromise } from "axios"
import { UserData } from "../interface/userData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080/usuarios"

const fetchData = async (filtro: string): AxiosPromise<UserData[]> => {
    console.log('Valor do filtro:', filtro);
    const response = axios.get(`${API_URL}?name=${filtro}`);
    console.log('Resposta da API:', (await response).data);
    return response;

}

export function useUsersData(filtro: string) {
    console.log("filtro", filtro)
    const query = useQuery({
        queryFn: () => fetchData(filtro),
        queryKey: ['user-data', filtro],
        retry: 2
    }
    );

    return {
        ...query,
        data: query.data?.data,
    };
}
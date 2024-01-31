import { useEffect, useState } from "react"
import { useUsersDataMutate } from "../../hooks/useUserDataPost";
import { UserData } from "../../interface/userData";
import "./modal.css"
interface InputProps {
    label: string,
    value: string,
    updateValue(value: string): void
}

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal( {closeModal}: ModalProps ){
    const [name, setName] = useState(""); // hook para criar variável 
    const { mutate, isSuccess }= useUsersDataMutate();
    const submit = () => {
        const userData: UserData = {
            name
        }
        mutate(userData)
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal()
    }, [isSuccess])
    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre novo usuário</h2>
                <form className="input-forms">
                <Input label="usuário" value={name} updateValue={setName}/>
                </form>
                <button onClick={submit} className="btn-post">Adicionar usuário</button>
            </div>

        </div>
    )
}


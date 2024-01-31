import { useState } from "react"
import { useUsersDataMutate } from "../../hooks/useUserDataPost";
import { UserData } from "../../interface/userData";
import './form.css'
import 'bootstrap/dist/css/bootstrap.min.css';

interface InputProps {
    label: string,
    value: string,
    updateValue(value: string): void
}
const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input class="form-control"  value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateForm() {
    const [name, setName] = useState(""); // hook para criar variável 
    const { mutate } = useUsersDataMutate();
    const submit = () => {
        const userData: UserData = {
            name
        }
        mutate(userData)
    }
    return (
        <div className="modal-overflow">
            <div className="modal-body">
                <h2>Cadastre um novo usuário</h2>
                <form>
                    <div class="form-group">
                        <Input label="Inserir novo usuário" value={name} updateValue={setName} />
                    </div>
                    <button  onClick={submit} class="btn btn-secondary">Adicionar</button>
                    <a href='/' class="btn btn-secondary">Página principal</a>
                </form>
            </div>

        </div>
    )
}


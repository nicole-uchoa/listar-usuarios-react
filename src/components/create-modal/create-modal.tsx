import { useState } from "react"

interface InputProps {
    label: string,
    value: string,
    updateValue(value: string): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function createModal(){
    const [name, setName] = useState(""); // hook para criar variável 

    return(
        <div className="modal-overflow">
            <div className="modal-body">
                <h2>Cadastre novo usuário</h2>
                <form className="input-forms">
                <Input label="usuário" value={name} updateValue={setName}/>
                </form>
            </div>

        </div>
    )
}
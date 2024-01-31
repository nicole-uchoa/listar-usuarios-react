// import './list.css'

interface ListProps {
    name: string
}

export function List({ name }: ListProps){
    return(
        <div className="lista">
            <ul>
                <li>{name}</li>
            </ul>
        </div>
    )
}
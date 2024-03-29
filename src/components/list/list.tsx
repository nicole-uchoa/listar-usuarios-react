interface ListProps {
    name: string
}

export function List({ name }: ListProps){
    return(
        <div >
            <ul className="list-group">
                <li className="list-group-item w-25 p-3 border-top-0 border-right-0 border-left-0">{name}</li>
            </ul>
        </div>
    )
}
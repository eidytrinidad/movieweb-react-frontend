import { Link } from 'react-router-dom'

export const DeleteBtn = ({id}) => {
    return (
        <Link to={`/admin/editar/${id}`} >
           Borrar
        </Link>
    )
}


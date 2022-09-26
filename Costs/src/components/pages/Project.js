import styles from './Project.module.css'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
 
function Project() {

    const { id } = useParams() /* Cria uma constante para ele saber que você esta querendo o id que está vindo da URL */
    
    const [project, setProject] = useState([]) /* Inicia com um array vazio */

    useEffect(() => {

        fetch(`http://localhost:5000/projects/${id}`, { /* Chama o projeto de acordo o ID*/
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(resp => resp.json()) /* Pega a resposta e tranforma em json */
        .then((data) => { /* Pega a resposta para ser utilizado para algum fim */
            setProject(data) /* e por fim setProject recebe o dado em forma de objeto */
        })
        .catch((err) => console.log(err)) /* catch preve algum eventual erro */
    }, [id])

    return <p>{project.name}</p>
}

export default Project
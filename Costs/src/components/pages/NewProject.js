import { useNavigate } from 'react-router-dom' /* Hook que redireciona o usuario quando o usuario clicar em algo */

import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {

    const navigate = useNavigate()

    function createPost(project) {
        //initialize cost and services
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })  
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                // redirect
                navigate('/project', {state: {message: 'Projeto criado com sucesso!'}}) /* Quando for criado o projeto com sucesso ele será enviado para a barra projects, exibindo uma mensagem de sucesso*/
            })
            .catch((err) => console.log(err))
        }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProject
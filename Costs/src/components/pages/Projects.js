import { useLocation } from 'react-router-dom' /* useLocation é usado para pegar algum dado de outro component */

import { useState, useEffect } from 'react'

import Message from "../layout/Message"
import Container from '../layout/Container'
import Loading from '../layout/Loading'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'

import styles from './Projects.module.css'

function Projects() {
    const [projects, setProjects] = useState([]) /* Inicia com um array vazio */
    const [removeLoading, setRemoveLoading] = useState(false) /* Começar com false por conta do loader sempre inicia depois retorna para true e remove o loader*/
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation() /* Constante criada para captar o que vier da mensagem  */
    let message = '' /* Começa com a mensagem vazia */
    if (location.state) { /* Faz a verificação se a mensagem existe */
        message = location.state.message /* Se existir ele armazena o dado dela em message */
    }

    useEffect (() => {
        setTimeout(() => {                
             fetch('http://localhost:5000/projects', { /* API */
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
              })
                .then(resp => resp.json()) /* Pega o dados e transforma em json */
                .then((data) => {
                    console.log(data)
                    setProjects(data) /* Pega os dados e usa para algo */
                    setRemoveLoading(true)
                }) 
                .catch((err) => console.log(err)) /* Caso de erro */
                }, 300)
        }, [])

    function removeProject(id) {

        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })  
         .then(resp => resp.json) /* Pega o dados e transforma em json */
         .then(() => {
            setProjects(projects.filter((project) => project.id !== id)) /* Dessa forma ele percorre cada um dos projetos que tem o id que você ta deletando assim excluindo no front e no back(banco de dados) */
            setProjectMessage('Projeto removido com sucesso!')
         })
         .catch(err => console.log(err)) /* Caso de erro */
        
    } 

    /*{message && <Message type="succes" msg={message} - Você cria uma validação para saber qual mensagem devera aparecer de forma dinamica de acordo com o dado coletado de message/>} */

    /* category={project?.category?.name} è feito dessa forma pois > Porque como tem alguns projetos com a categoria indefinida, o código quebra, colocando "?.", ele roda mesmo com as categorias indefinidas */

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to='/newproject' text="Criar projeto"/>
            </div>
            {message && <Message type="succes" msg={message} />}
            {projectMessage && <Message type="succes" msg={projectMessage} />}
            <Container customClass="start">
                {projects.length > 0 && /* Cria a condição e se for verdadeira executa o codigo abaixo */
                projects.map((project) => ( /* Faz a listagem de todos o projetos criados */
                <ProjectCard 
                  id={project.id} 
                  name={project.name}
                  budget={project.budget}
                  category={project?.category?.name}
                  key={project.id}
                  handleRemove={removeProject}
                 />
                ))}
                {!removeLoading && <Loading />}
                {removeLoading && projects.length === 0 && (
                    <p>Não há projetos cadastrados</p>
                )}
            </Container>
        </div>
    )
}

export default Projects
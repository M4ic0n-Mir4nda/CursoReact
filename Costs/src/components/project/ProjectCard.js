import styles from './ProjectCard.module.css'
import { Link } from 'react-router-dom' /* Gera um link para redirecionar a outra Page */
import { BsPencil, BsFillTrashFill } from 'react-icons/bs' /* Icones */

function ProjectCard( {id, name, budget, category, handleRemove}) {

    /* Linha 16 - <span className={`${styles[category.toLowerCase()]}`}></span> {category}: Por meio de JS você acessa a categoria pelos estilos(styles), porem ela será acessada com as inicias letras em maiusculas, para resolver o problema com o toLowerCase() de JS você transforma todo o texto em minusculo dessa forma podendo chamar a classe de CSS */

    /* Linha 26 a 28 - <Link to={`/project/${id}`}>: Redireciona para a edição dos projetos */

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> RS{budget}
            </p>
            <p className={styles.category_text}>
                <span className={`${styles[category.toLowerCase()]}`}></span> {category}
            </p>
            <div className={styles.project_card_actions}>
                <Link to={`/project/${id}`}>
                    <BsPencil /> Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    )
}

export default ProjectCard
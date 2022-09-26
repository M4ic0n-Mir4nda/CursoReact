import {useState, useEffect} from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

function ProjectForm( { handleSubmit, btnText, projectData} ) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect (() => {
        fetch("http://localhost:5000/categories", { /* Faz um request com o 'fetch para a url cattegories*/
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then((resp) => resp.json()) /* Transforma os dados em json */
        .then((data) => {
            setCategories(data) /* Pega o dados e armazena no hook em setCategories */
        })
        .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project) /* Executa o metodo e passa o projeto no formulario como argumento */
        //console.log(project)
    }

    function handleChange(e) {
        setProject({...project, [e.target.name]: e.target.value}) /* Qualquer texto que for preenchido, será alterado alguma propriedade de texto */
    }

    function handleCategory(e) {
        setProject({
            ...project,
            category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        }
        }) /* Qualquer texto que for preenchido, será alterado alguma propriedade de texto */
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome do projeto"
                name="name"
                id="name"
                placeholder="Insira o nome do projeto"
                handleOnChance={handleChange}
                value={project.name ? project.name : ''} /* Se o valor vier prenchido é colocado, se não vem vazio */
            />
            <Input
                type="number"
                text="Orçamento do projeto"
                name="budget"
                id="budget"
                placeholder="Insira o orçamento total"
                handleOnChance={handleChange}
                value={project.budget ? project.budget : ''} /* Se o valor vier prenchido é colocado, se não vem vazio */
            />
            <Select
             name="category_id"
             text="Selecione uma categoria"
             options={categories}
             handleOnChance={handleCategory}
             value={project.category ? project.category.id : ''} /* Se o valor vier prenchido é colocado, se não vem vazio */
            />
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm
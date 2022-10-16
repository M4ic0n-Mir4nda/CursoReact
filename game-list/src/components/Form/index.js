import './Form.css'
import Button from '../Button';
import Input from '../Input';
import List from '../List';

import { useState } from 'react'

const Form = (props) => {

    const modalidades = [
        'FPS',
        'Puzzle',
        'Moba',
        'RPG',
        'MMORPG',
        'Aventura',
        'Corrida',
        'Outro'
    ]

    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[game, setGame] = useState('')
    const[modalidade, setModalidade] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        props.submitData([{
            name,
            email,
            game,
            modalidade
        }])
        setName('')
        setEmail('')
        setGame('')
        setModalidade('')
    }

    return (
        <div className='form' id='form'>
            <h1>Preencha os dados para criar uma lista</h1>
            <form onSubmit={handleSubmit}>
                <Input 
                 label='Nome' 
                 placeholder='Digite o seu nome'
                 valor={name}
                 handleChange={valor => setName(valor)}
                />

                <Input 
                 label='Jogo' 
                 placeholder='Qual o seu jogo favorito'
                 valor={game}
                 handleChange={valor => setGame(valor)} 
                />
                <List 
                 label="Gênero" 
                 modalidades={modalidades}
                 valor={modalidade}
                 handleChange={valor => setModalidade(valor)} 
                />
                <Button>
                    Adicionar Jogo
                </Button>
            </form>
        </div>
    )
}

export default Form;
import './Itens.css'
import Item from '../../Item'

const Itens = (props) => {
    return (
        <div className='itens'>
        <table>
            <tbody>
                {props.games.map(item =>
                <Item
                    key={item}
                    nome={item.name}
                    jogo={item.game} 
                    modalidade={item.modalidade}   
                />)}
            </tbody>
        </table>
        </div>
    )
}

export default Itens;
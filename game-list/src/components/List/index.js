import './List.css'

const List = (props) => {
    return (
        <div className='list'>
            <label>
                {props.label}
            </label>
            <select value={props.valor} onChange={event => props.handleChange(event.target.value)} required >
                <option value=''></option>
                {props.modalidades.map(tipo => <option key={tipo}>{tipo}</option>)}
            </select>
        </div>
    )
}

export default List;
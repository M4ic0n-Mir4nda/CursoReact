import './Input.css'

const Input = (props) => {
    return (
        <div className='input'>
            <label>{props.label}</label>
            <input value={props.valor} placeholder={`${props.placeholder}...`} required onChange={event => props.handleChange(event.target.value)}/>
        </div>
    )
}

export default Input;
import styles from './Select.module.css'

function Select( { text, name, options, handleOnChance, value } ) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select
                name={name}
                id={name}
                onChange={handleOnChance}
                value={value || ''} /* Se o valor vier prenchido é colocado, se não vem vazio */
            >
                <option >Selecione uma opção</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select
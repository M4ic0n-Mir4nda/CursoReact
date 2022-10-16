const Item = (props) => {
    return (
        <>
            <tr>
                <td>{props.nome}</td>
                <td>{props.jogo}</td>
                <td>{props.modalidade}</td>
            </tr>
        </>
    )
}

export default Item;
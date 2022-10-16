import './Table.css'

const Table = (props) => {
    return (
        <div className='table'>
            <table>
                <tbody>
                    <tr>
                        <td className='titulo'>Nome</td>
                        <td className='titulo'>Jogo</td>
                        <td className='titulo'>Gênero</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;
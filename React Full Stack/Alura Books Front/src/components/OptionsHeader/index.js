import styled from 'styled-components';

const Option = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const Options = styled.ul`
    display: flex;
`

const textOptions = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function OptionsHeader() {
    return (
        <Options>
            { textOptions.map( (option) => (
                <Option><p>{option}</p></Option>
            )) }
        </Options>
    )
}

export default OptionsHeader;
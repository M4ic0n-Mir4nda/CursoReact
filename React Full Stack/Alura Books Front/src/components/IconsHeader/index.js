import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';
import styled from 'styled-components';

const Icon = styled.li`
    margin-right: 40px;
    width: 25px;
`

const Icons = styled.ul`
    display: flex;
    align-items: center;
`

const icons = [perfil, sacola];

function IconsHeader() {
    return (
        <Icons>
            { icons.map( (icon) => (
                <Icon><img src={icon} alt="icone menu"></img></Icon>
            )) }
        </Icons>
    )
}

export default IconsHeader;
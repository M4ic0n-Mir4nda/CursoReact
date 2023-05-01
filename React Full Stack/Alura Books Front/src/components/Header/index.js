import Logo from '../../components/Logo';
import OptionsHeader from '../../components/OptionsHeader';
import IconsHeader from '../../components/IconsHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #FFFF;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo/>
            <OptionsHeader/>
            <IconsHeader/>
        </HeaderContainer>
    )
}

export default Header;
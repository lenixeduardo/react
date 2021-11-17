import * as S from './styles';
import logo  from '../../assets/logo.png';


function Header(){

    return(

<S.Container>
        <S.LeftSide>
        <img src={logo} alt="logo"/>
        </S.LeftSide>

        <S.RightSide>
    <button>INICIO</button>
    <span className="dividir"/>
    <button>NOVA TAREFA</button>
    <span className="dividir"/>
    <button>SAIR</button>
        </S.RightSide>
      </S.Container>


    )
}

export default Header;
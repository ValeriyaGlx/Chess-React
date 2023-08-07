import React, {FC} from "react";
import logoBlack from '../../assets/logo/pawn-black.png'
import logoWhite from '../../assets/logo/pawn-white.png'
import chess from '../../assets/logo/chess.png'
interface HeaderProps {
    move: string,
    restart: () => void
}


const Header: FC<HeaderProps> = ({move, restart}) => {
    return (
        <header className={'header'}>
            <div className={'header-logo'}>
                <img src={chess}/>
            </div>
            <h2 className={'move'}>
                <img className={'move-logo'} src={move === 'white' ? logoWhite : logoBlack}/>
                Move  <span style={{color: move === 'white' ? '#dcd9d9' : '#1f1f1f'}}>{move}</span>
                <img className={'move-logo'} src={move === 'white' ? logoWhite : logoBlack}/></h2>
            <button onClick={restart} className={'new-game'}><span>SURE?</span><span>NEW GAME</span></button>
        </header>

    )
}

export default Header;
import {Figure} from "../../models/figures/Figure";
import {FC} from "react";

interface LostFigureProps {
    figures: Figure[]
}
const LostFigure: FC<LostFigureProps> = ({figures}) => {
    return (
        <div className={'lost'}>
            {figures.map(figure =>
                <div key={figure.id}>
                    {figure.logo && <img src={figure.logo} alt={'figure'} />}
                </div>
            )}

        </div>
    )
}

export default LostFigure;
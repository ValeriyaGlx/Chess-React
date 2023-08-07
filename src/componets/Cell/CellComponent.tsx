import {Cell} from "../../models/Cell";
import {FC} from "react";

interface CellProps {
    cell: Cell,
    selected: boolean,
    clickCell: (cell: Cell) => void
}

const CellComponent: FC<CellProps> = ({cell,selected, clickCell}) => {
    return (
        <div
        className={["cell", cell.colors, selected ? 'selected' : ''].join(' ')}
        onClick={() => {clickCell(cell)}}
        style = {{background: cell.avalible && cell.figure ? '#38180B' : ''}}
        >
            {cell.avalible && !cell.figure && <div className={'availibale'}/>}
            {cell.figure?.logo && <img src={cell.figure.logo} alt={"queen"}/>}
        </div>
    )
}

export default CellComponent
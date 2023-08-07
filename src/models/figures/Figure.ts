import {Colors} from "../Colors";
import logo from '../../assets/black-bishop.png'
import {Cell} from "../Cell";
import {King} from "./King";

export enum FiguresNames {
    FIGURE = '',
    PAWN = 'Пешка',
    KNIGHT = 'Конь',
    BISHOP = 'Слон',
    KING = 'Король',
    QUEEN = 'Ферзь',
    ROOK = 'Ладья',
}
export class Figure {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: FiguresNames;
    id: number;
    isFirstStep?: boolean;

    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = FiguresNames.FIGURE;
        this.id = Date.now();
    }

    canMove(target: Cell) : boolean {
        if(target.figure?.color === this.color)
            return false;
        if(target.figure?.name === FiguresNames.KING)
            return false;
        return true;
    }

    moveFigure(target: Cell) {}
}
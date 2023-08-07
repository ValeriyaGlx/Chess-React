import {Figure, FiguresNames} from "./Figure";
import blackLogo from '../../assets/black-king.png';
import whiteLogo from '../../assets/white-king.png';
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import {Board} from "../Board";

export class King extends Figure {
    board: Board;
    public isFirstStep: boolean;

    constructor(color: Colors, cell: Cell, board: Board) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FiguresNames.KING;
        this.isFirstStep = false;
        this.board = board;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false;
        }

        const dx = Math.abs(this.cell.x - target.x);
        const dy = Math.abs(this.cell.y - target.y);
        const kingColor = this.cell.figure?.color
        if ((dx === 1 && dy === 1) || (dx === 1 && dy === 1) || (dx === 0 && dy === 1) || (dx === 1 && dy === 0)) {
            return true;
        }
        if (!this.isFirstStep) {
            if (kingColor === 'white') {
                if (target.x === this.cell.x - 2
                    && target.y === this.cell.y
                    && this.board.getCell(0, 7).figure?.name === FiguresNames.ROOK) {
                    return true;
                }
                if (target.x === this.cell.x + 2
                    && target.y === this.cell.y
                    && this.board.getCell(7, 7).figure?.name === FiguresNames.ROOK) {
                    return true;
                }
            } else {
                if (target.x === this.cell.x - 2
                    && target.y === this.cell.y
                    && this.board.getCell(0, 0).figure?.name === FiguresNames.ROOK) {
                    return true
                }

                if (target.x === this.cell.x + 2
                    && target.y === this.cell.y
                    && this.board.getCell(7, 0).figure?.name === FiguresNames.ROOK
                ) {
                    return true;
                }
            }
        }
        return false;
    }


    moveFigure(target: Cell) {
        super.moveFigure(target);
        // this.isFirstStep = true;
    }

}
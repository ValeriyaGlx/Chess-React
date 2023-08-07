import CellComponent from "../Cell/CellComponent"
import {Board} from "../../models/Board";

import React, {FC, useEffect, useState} from "react";
import {Cell} from "../../models/Cell";
import {FiguresNames} from "../../models/figures/Figure";
import {Rook} from "../../models/figures/Rook";
import {Colors} from "../../models/Colors";
import {Player} from "../../models/Player";


interface BoardProps {
    board: Board,
    setBoard: (board: Board) => void,
    swapPlayer: () => void;
    currentPlayer: Player;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard, swapPlayer, currentPlayer}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);
    const [stepCell, setStepCell] = useState<Cell | null>(null);

    function clickCell (cell: Cell) {
        if(selectedCell && cell !== selectedCell && selectedCell.figure?.canMove(cell)) {
          selectedCell.moveFigure(cell);
          setSelectedCell(null);
          setStepCell(cell);
          swapPlayer();
        } else {
            if(cell.figure && cell.figure.color === currentPlayer.color) {
                setSelectedCell(cell);
            }
        }
    }


    function highlightCells() {
      board.highlightCells(selectedCell);
      updateBoard();
    }


    useEffect(() => {
        highlightCells();

        if(stepCell?.figure?.name === FiguresNames.KING
        && !stepCell.figure.isFirstStep) {
            console.log(stepCell)
            makeCastling(stepCell);
            stepCell.figure.isFirstStep = true;
        }
    }, [selectedCell]);

    function makeCastling(cell: Cell) {
        if (cell.figure) {
            if(cell.x === 6) {
                board.getCell(7, cell.y).figure = null;
                new Rook(cell.y === 7 ? Colors.WHITE : Colors.BLACK, board.getCell(5, cell.y));
                return;
            }

            if(cell.x === 2) {
                board.getCell(0, cell.y).figure = null;
                new Rook(cell.y === 7 ? Colors.WHITE : Colors.BLACK, board.getCell(3, cell.y));
                return;
            }

        }
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard();
        setBoard(newBoard);
    }

    return (
        <div>
            <div
                className="board"
            >
                {board.cells.map((row, index) =>
                    <React.Fragment key={index}>
                        {row.map(cell =>
                            <CellComponent
                                cell={cell}
                                key={cell.id}
                                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                                clickCell={clickCell}
                            />
                        )}
                    </React.Fragment>)}
            </div>
        </div>

    )
}

export default BoardComponent
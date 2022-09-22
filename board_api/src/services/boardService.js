const Board = require("../database/Board");

const getAllBoards = () => {
    const allBoards = Board.getAllBoards();
    return allBoards;
};
const getOneBoard = () => {
    return;
};
const createNewBoard = (newBoard) => {
    const boardToInsert = { 
    ... newBoard,
    };

    console.log("boardToInsert", boardToInsert);

    const createdBoard = Board.createNewBoard(boardToInsert);
    return createdBoard;
    
};
const UpdateOneBoard = () => {
    return;
};
const deleteOneBoard = () => {
    return;
};

module.exports = {
    getAllBoards,
    getOneBoard,
    createNewBoard,
    UpdateOneBoard,
    deleteOneBoard,
}
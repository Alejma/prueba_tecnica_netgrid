const DB = require("./db.json");
const { saveToDatabase }  = require("./utils");

const getAllBoards = () => {
    return DB.boards;
};

const createNewBoard = (newBoard) => {
    const isAlreadyAdded =
    DB.boards.findIndex((Board) => Board.title === newBoard.title) > -1;
/*     const isAlreadyAdded = 
    DB.boards.findIndex((board) => board.title === newBoard.title) > -1; */
    if (isAlreadyAdded) {
        return;
    };
    DB.boards.push(newBoard);
    saveToDatabase(DB);
    return newBoard;
};

module.exports = {  getAllBoards, createNewBoard }; 
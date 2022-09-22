const boardService = require("../services/boardService");

const getAllBoards = (req,res) => {
    const allBoards = boardService.getAllBoards();
    res.send({status: "OK", data: allBoards});
};

const getOneBoard = (req,res) => {
    const board = boardService.getOneBoard(req.params.boardId);
    res.send(`Get board ${req.params.boardId}`);
};

const createNewBoard = (req,res) => {
    const {body} = req;
    if (!body.title ||
        !body.stage
    ){
        return;
    }

    const newBoard ={
        stage: body.stage,
        title: body.title,
    };
    
    const createdBoard = boardService.createNewBoard(newBoard);
    res.status(201).send({status: "OK", data: createdBoard});
};

const UpdateOneBoard = (req, res) => {
    const updateboard = boardService.updateOneBoard(req.params.boardId);
    res.send(`Update board ${req.params.boardId}`);
};

const deleteOneBoard = (req, res) => {
    boardService.deleteOneBoard(req.params.boardId);
    res.send(`Delete board ${req.params.boardId}`);
};

module.exports = {
    getAllBoards,
    getOneBoard,
    createNewBoard,
    UpdateOneBoard,
    deleteOneBoard,
}
const express = require('express');
const router = express.Router();
const boardController = require('../../controllers/boardController');

router
    .get("/", boardController.getAllBoards)  
    .get("/:boardId", boardController.getOneBoard)
    .post("/", boardController.createNewBoard)
    .patch("/:boardId", boardController.UpdateOneBoard)
    .delete("/:boardId", boardController.deleteOneBoard);
module.exports = router;

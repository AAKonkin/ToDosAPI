import ToDo from '../Model/ToDo.js';

class todoController {
    async addNew(req, res) {
        try{
            if(!req.body) return res.status(400).json('EMPTY_REQUEST_BODY');
            const {active, content} = req.body;
            const NewToDo = new ToDo({active, content});
            NewToDo.save(err => {
                if(err) return res.status(400).json('SAVING_ERROR');
                res.status(200).json(`NEW_ITEM: ${NewToDo}`);
            });
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
    async getAll(req, res) {
        try{
            await ToDo.find({}, (err, todos) => {
                if(err) return res.status(400).json('EMPTY_LIST');                
                res.status(200).json(todos);
            });
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
    async getOne(req, res) {
        try{
            const id = req.params.id;
            await ToDo.find({_id: id}, (err, todo) => {
                if(err) return res.status(400).json('NOT_FOUND');
                res.status(200).json(todo);
            });
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
    async updateOne(req, res) {
        try{
            if(!req.body) return res.status(400).json('EMPTY_REQUEST_BODY');
            const id = req.params.id;
            const {active, content} = req.body;
            await ToDo.findOneAndUpdate({_id: id}, {active, content}, {new: true}, (err, todo) => {
                if(err) return res.status(400).json(NOT_FOUND_FOR_UPDATE);
                res.status(200).json(`UPDATED_ITEM: ${todo}`)
            });
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
    async deleteOne(req, res) {
        try{
            const id = req.params.id;
            await ToDo.findOneAndDelete({_id: id}, (err, todo) => {
                if(err) return res.status(400).json('NOT_FOUND');
                res.status(200).json(`DELETED_ITEM: ${todo}`);
            });
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
}

export default new todoController;
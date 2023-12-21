import User from "../models/User";
import Repository from "../models/Repository";

class RepositoriesController {
    async index(req, res) {
        try {
            const { user_id } = req.params;

            const user = await User.findById(user_id);

            if (!user) {
                return res.status(404).json();
            }

            const repositories = await Repository.find({
                userId: user_id
            });

            return res.json(repositories);
        }   
        catch(err) {
            console.error(err);
            return res
                .status(500)
                .json({ error: 'Internal server error' });
        } 
    }

    async create(req, res) {
        try {
            const { user_id } = req.params;

            const user = await User.findById(user_id);

            if (!user) {
                return res.status(404).json();
            }

            

        }   
        catch(err) {
            console.error(err);
            return res
                .status(500)
                .json({error: 'Internal server error'});
        }     
    }
}

export default new RepositoriesController();
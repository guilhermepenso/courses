import User from "../models/User";

class UsersController {
    async index(req, res) {
        try {
            const users = await User.find();
            return res.json(users);
        }   catch(err) {
            console.error(err);
            return res.status(500).json({error: 'Internal server error'});
        } 
    }
    
    async show(req, res) {
        
    }
    
    async create(req, res) {
        try {
            
        }   catch(err) {

        }     
    }
    
    async update(req, res) {
        
    }

    
    async destroy(req, res) {
        
    }
}

export default new UsersController();
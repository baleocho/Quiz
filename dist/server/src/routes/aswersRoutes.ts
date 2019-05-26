import { Router } from 'express';
import { aswersControllers } from '../controllers/aswersControllers'


class AswersRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', aswersControllers.selectAswers);
        this.router.get('/:id', aswersControllers.selectAswer);
        this.router.post('/', aswersControllers.insertAswers);
    }
}
const aswersRoutes = new AswersRoutes();
export default aswersRoutes.router;
import * as express from 'express';
import Route from '../interfaces/route.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreateUserRoleDto from '../dto/user-role.dto';
import UserRoleController from '../controllers/user-role.controller';

 
class UserRoleRoute implements Route {
  public path = '/roles';
  public router = express.Router();
  private controller: UserRoleController = new UserRoleController();
 
  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(this.path, validationMiddleware(CreateUserRoleDto), this.controller.create);
    this.router.get(this.path, this.controller.getAll);
    this.router.get(`${this.path}/:id`, this.controller.getById);
  }
}

export default UserRoleRoute;
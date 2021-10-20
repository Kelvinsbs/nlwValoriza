import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();

router.post("/users", createUserController.handle);

// router.use(ensureAdmin) //Se for feito dessa forma, todas as rotas abaixo dessa linha, obrigatoriamente irão passar pelo middware, e sera feita a validação
router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle)

export { router } 
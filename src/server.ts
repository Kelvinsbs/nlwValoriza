import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";
import cors from "cors";

import "./database";

const app = express();
app.use(cors()); //habilitar que outras fontes que não sejam back-end acessem essa aplicação

app.use(express.json());

app.use(router);
// tratar os erros sempre dps das rotas (pq as rotas são os caminhos, e os erros acontecem só dps, oq faz bastante sentido)
app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if(err instanceof Error){
            return response.status(400).json({
                error: err.message
            })
        }

        return response.status(500).json({
            status: "error",
            message: "Internal Server Error"
    })
})
app.listen(3000, () => console.log("toc toc toc na porta 3000"))
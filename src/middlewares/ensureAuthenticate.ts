import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"

interface IPayload {
    sub: string;
}

export function ensureAuthenticate(
    request: Request,
    response: Response,
    next: NextFunction
){
    // Receber o token
    const authToken = request.headers.authorization

    // validar token esta preenchido
    if(!authToken){
        return response.status(401).end()
    }

    const [, token] = authToken.split(" ");

    try{
        // validar token valido
        const { sub } = verify(token, "649238590355d1c08ff3c5ad5af3d155") as IPayload;

        // recuperar informacoes do usuario
        request.user_id = sub;
        
        return next();
    }catch(erro){
        return response.status(401).end();
    }

    
    
    
}
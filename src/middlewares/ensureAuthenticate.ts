import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"


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
    console.log(token)
    
    verify(token, "649238590355d1c08ff3c5ad5af3d155");

    
    
    // validar token valido
    
    // recuperar informacoes do usuario
    
    
    return next();
}
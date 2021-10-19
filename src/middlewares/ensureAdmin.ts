import { Request, Response, NextFunction } from "express";



export function ensureAdmin(request: Request, response: Response, next: NextFunction){
    // Aqui ele vai verificar se o usuario e admin

    const admin = true;

    if(admin){
        return next();
    }

    return  response.status(401).json({
        error: "Usuário sem permissão para executar essa ação."
    });
}
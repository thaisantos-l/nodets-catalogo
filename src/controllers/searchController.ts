import { Request, Response } from 'express';
import { Pet } from '../models/pet.ts';
import { createMenuObject } from '../helpers/createMenuObject.ts';

export const search = (req: Request, res: Response) => {

    // res.render('pages/search');
 let query: string = req.query.q as string;

 if(!query) {
    res.redirect('/');
    return;
 }

 let list = Pet.getFromName(query);
    res.render('pages/page', {
        menu:createMenuObject(''),
        list,
        query
    });

}
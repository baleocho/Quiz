import {Request, Response} from 'express';
import pool from '../database';
import { text } from '@angular/core/src/render3';

class AswersControllers{
    public async selectAswers(req: Request, res: Response) {
        const aswers = await pool.query('SELECT * FROM aswers_tb');
        res.json(aswers);
    }
    public async selectAswer(req: Request, res: Response) {
        const { id } = req.params;
        const aswer = await pool.query('SELECT * FROM aswers_tb WHERE id = ?', [id]);
        if(aswer.length > 0){
            return res.json(aswer[0]);
        }
        res.status(404).json({text: 'Answers not found'});
    }
    public async insertAswers(req: Request, res: Response) {
        console.log(req.body);
        await pool.query('INSERT INTO aswers_tb SET ?', [req.body]);
        res.json({text : 'Answers inserted '});
    }
}
export const aswersControllers = new AswersControllers();
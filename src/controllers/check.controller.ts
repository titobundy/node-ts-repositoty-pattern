import { Request, Response } from 'express';
import { route, GET } from 'awilix-express';
import { TestService } from '../test.service';

@route('/check')
export class CheckController {

    constructor(private readonly testService:TestService) {
    }
    
    @GET()
    public index(req: Request, res: Response): void {
        res.send({
            NODE_ENV: process.env.NODE_ENV
        });
    }

    @route('/test')
    @GET()
    public test(req: Request, res: Response): void {
        res.send(this.testService.get());
    }
}
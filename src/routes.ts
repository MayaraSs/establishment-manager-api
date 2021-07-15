import express, { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

export const router = express.Router();

interface Establishment {
  name: string;
  locale: string;
  cnpj: string;
  id: string;
}

const establishments: Array<Establishment> = [];

router.post('/login', async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    res.status(200).send({
      name: 'Mayara',
      email: 'stein.mayara@gmail.com',
      token: 'mock-token',
    });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.get('/establishments', async (req: Request, res: Response) => {
  try {
    console.log(establishments);
    res.status(200).send(establishments);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.post('/establishment', async (req: Request, res: Response) => {
  try {
    console.log(req.body);

    const establishment = {
      name: req.body.name,
      cnpj: req.body.cnpj,
      locale: req.body.locale,
    };

    establishments.push({ id: uuidv4(), ...establishment });

    res.status(201);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.delete('/establishment/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    establishments.map((e, i) => {
      if (e.id === id) {
        console.log(i);
        establishments.splice(i, 1);

        // delete establishments[i];
      }
    });
    res.status(201);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

export default router;

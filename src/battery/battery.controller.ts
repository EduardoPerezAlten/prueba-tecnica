import { Router, Request, Response } from 'express';
import * as batteryService from './battery.service';

const router = Router();

router.get('/status', (_req: Request, res: Response) => {
  const status = batteryService.stringOutput('status');
  res.json(status);
});

router.post('/charge', (req: Request, res: Response) => {
  const amount = Number(req.body.amount);

  if ( !amount || amount <= 0) {
    throw new Error('Amount must be a positive number.')
  }

  batteryService.charge(amount);
  res.json(batteryService.stringOutput('charge'));
});

router.post('/discharge', (req: Request, res: Response) => {
	const amount = Number(req.body.amount);

	if ( !amount || amount <= 0) {
		throw new Error('Amount must be a positive number.');
	}

	batteryService.discharge(amount);
	res.json(batteryService.stringOutput('discharge'));
});

router.get('/history', (_req: Request, res: Response) => {
	const status = batteryService.stringOutput('history');
	res.json(status);
});

export default router;
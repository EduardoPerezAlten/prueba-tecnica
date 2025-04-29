import express, { Application } from 'express';
import batteryController from './battery/battery.controller';

const app: Application = express();

app.use(express.json());

app.use('/battery', batteryController);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

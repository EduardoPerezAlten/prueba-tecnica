import express, { Application } from 'express';
//import batteryController from './battery/battery.controller';
import batteryModule from './battery/battery.module';

const app: Application = express();

app.use(express.json());

// app.use('/battery', batteryController);

app.use('/', batteryModule);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

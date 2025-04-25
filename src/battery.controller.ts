
import {
    Controller,
    Get,
    Post,
  } from '@nestjs/common';
import { BatteryService } from './battery.service';
import { Battery } from './battery.interface';
import './utils';


@Controller('battery')
export class BatteryController {
  constructor( private readonly batteryService: BatteryService, private battery: Battery ) {}

  @Get('/battery/status')
  getBatteryStatus() {
    console.log(this.batteryService.getStatus);
  }
  @Post('/battery/charge')
  addBatteryCharge( value: number ) {
    console.log(this.batteryService.lowBatteryCharge( this.battery, value, opType = 1 ));
  }
  @Post('/battery/discharge')
  lowBatteryCharge( value: number ) {
    console.log(this.batteryService.lowBatteryCharge( this.battery, value, opType = 2 ));
  }
  @Get('/battery/history')
  getBatteryModifications() {
    console.log(this.batteryService.getHistory());
  }

}
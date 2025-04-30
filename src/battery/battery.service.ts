import { Battery, BatteryHistory } from './battery.interface';

const battery: Battery = {
	charge: 100,
	max_charge_value: 100,
	changedAt: new Date().toISOString(),
}
const history: BatteryHistory[] = [];

export function getStatus(): Battery {
    return battery;
}

export function charge(amount: number): void {
	let oldBattery = battery;
	if (amount + battery.charge > battery.max_charge_value) {
		throw new Error(`Amount is to higher. Battery is at ${battery.charge} and the max is 100`);
	} else {
		battery.charge += amount;
		battery.changedAt = new Date().toISOString();
		let newBattery = battery;
		history.push({
			newBattery: newBattery,
			oldBattery: oldBattery,
			opType: 'charge',
		});
	}
}

export function discharge(amount: number): void {
	let oldBattery = battery;
	if (amount > battery.charge){
		throw new Error('Amount must be lower than the current battery charge.');
	} else if (battery.charge - amount < 0) {
		throw new Error("Can't lower the charge bellow 0");
	} else {
		battery.charge -= amount;
		battery.changedAt = new Date().toISOString();
		let newBattery = battery;
		history.push({
		newBattery: newBattery,
		oldBattery: oldBattery,
		opType: 'discharge',
	});
	}	
}

export function stringOutput(type: 'status' | 'charge' | 'discharge' | 'history'): Object{
	let output: Object = ''; 
	let historyOutput: Object[] = [];
	if (type === 'discharge' || type === 'charge') {
		output = {
			amount: battery.charge,
		}
	} else if (type === 'status') {
		let percentage: number = (battery.charge/battery.max_charge_value)*100;
		output = {
			percentage: `${percentage}%`,
			máxChargeValue: `${battery.max_charge_value} kWh`,
			lastMod: battery.changedAt,
		}
	} else if (type === 'history') {
		let index: number = history.length -1;
		let count: number = 0;
		while (index >= 0 && count < 20) {
			historyOutput.push({
					opType: history[index].opType,
					charge: `${history[index].newBattery.charge} kWh`,
					timestamp: history[index].newBattery.changedAt,
			})
			index--;
			count++;
		}
		return historyOutput;
	}
	return output;
}
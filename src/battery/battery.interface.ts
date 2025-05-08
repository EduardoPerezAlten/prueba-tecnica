// Skeleton for the battery object
export interface Battery {
    charge: number;
    max_charge_value: number;
    changedAt: string;
}

// Skeleton for the historycal of battery changes
export interface BatteryHistory {
    newBattery: Battery;
    oldBattery: Battery;
    opType: 'charge' | 'discharge',
}

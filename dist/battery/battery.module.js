"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const battery_controller_1 = __importDefault(require("./battery.controller"));
const batteryModule = (0, express_1.Router)();
batteryModule.use('/', battery_controller_1.default);
exports.default = batteryModule;

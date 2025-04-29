"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const battery_module_1 = __importDefault(require("./battery/battery.module"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/battery', battery_module_1.default);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

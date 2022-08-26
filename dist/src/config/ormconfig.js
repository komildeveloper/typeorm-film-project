"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const path_1 = __importDefault(require("path"));
const typeorm_1 = require("typeorm");
exports.dataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.TYPEORM_HOST,
    port: 5432,
    password: process.env.TYPEORM_PASSWORD,
    database: 'postgres',
    username: process.env.TYPEORM_USERNAME,
    synchronize: true,
    entities: [path_1.default.join(__dirname, '..', 'entities', '*.entity.{ts,js}')],
});

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actors = void 0;
const typeorm_1 = require("typeorm");
const films_entity_1 = require("./films.entity");
let Actors = class Actors {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Actors.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Actors.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'bigint' }),
    __metadata("design:type", Number)
], Actors.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => films_entity_1.Films, (film) => film.actor),
    __metadata("design:type", Array)
], Actors.prototype, "films", void 0);
Actors = __decorate([
    (0, typeorm_1.Entity)()
], Actors);
exports.Actors = Actors;

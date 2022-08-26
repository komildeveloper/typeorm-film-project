"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFilm = void 0;
const ormconfig_1 = require("../config/ormconfig");
const films_entity_1 = require("../entities/films.entity");
const createFilm = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, actorId } = req.body;
    const createFilm = yield ormconfig_1.dataSource
        .createQueryBuilder()
        .insert()
        .into(films_entity_1.Films)
        .values({ title, actor: actorId })
        .returning(['id', 'title'])
        .execute();
    res.json(createFilm);
});
exports.createFilm = createFilm;

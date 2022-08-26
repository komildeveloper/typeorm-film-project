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
exports.deleteActor = exports.updateActor = exports.createActor = exports.getActors = void 0;
const ormconfig_1 = require("../config/ormconfig");
const actors_entity_1 = require("../entities/actors.entity");
ormconfig_1.dataSource
    .initialize()
    .then(() => console.log('Connected'))
    .catch((err) => console.log(err.message));
const getActors = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const getActors = yield ormconfig_1.dataSource.getRepository(actors_entity_1.Actors).find({
        relations: {
            films: true,
        },
    });
    res.json(getActors);
});
exports.getActors = getActors;
const createActor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, age } = req.body;
    const createActor = yield ormconfig_1.dataSource
        .createQueryBuilder()
        .insert()
        .into(actors_entity_1.Actors)
        .values({ name, age })
        .returning(['id', 'name'])
        .execute();
    res.json(createActor);
});
exports.createActor = createActor;
const updateActor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, age } = req.body;
    const updateActor = yield ormconfig_1.dataSource
        .createQueryBuilder()
        .update(actors_entity_1.Actors)
        .set({ name, age })
        .where('id = :id', { id })
        .returning(['id', 'name'])
        .execute();
    res.json(updateActor);
});
exports.updateActor = updateActor;
const deleteActor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deleteActor = yield ormconfig_1.dataSource
        .createQueryBuilder()
        .delete()
        .from(actors_entity_1.Actors)
        .where('id = :id', { id })
        .returning(['id'])
        .execute();
    res.json(deleteActor);
});
exports.deleteActor = deleteActor;

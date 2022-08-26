"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const actor_controller_1 = require("../controllers/actor.controller");
const film_controller_1 = require("../controllers/film.controller");
const router = (0, express_1.Router)();
router.route('/actors').get(actor_controller_1.getActors).post(actor_controller_1.createActor, film_controller_1.createFilm);
router.route('/actors/:id').put(actor_controller_1.updateActor).delete(actor_controller_1.deleteActor);
exports.default = router;

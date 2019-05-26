"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const aswersControllers_1 = require("../controllers/aswersControllers");
class AswersRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', aswersControllers_1.aswersControllers.selectAswers);
        this.router.get('/:id', aswersControllers_1.aswersControllers.selectAswer);
        this.router.post('/', aswersControllers_1.aswersControllers.insertAswers);
    }
}
const aswersRoutes = new AswersRoutes();
exports.default = aswersRoutes.router;

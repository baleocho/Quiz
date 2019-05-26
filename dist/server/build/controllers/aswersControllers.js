"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class AswersControllers {
    selectAswers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const aswers = yield database_1.default.query('SELECT * FROM aswers_tb');
            res.json(aswers);
        });
    }
    selectAswer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const aswer = yield database_1.default.query('SELECT * FROM aswers_tb WHERE id = ?', [id]);
            if (aswer.length > 0) {
                return res.json(aswer[0]);
            }
            res.status(404).json({ text: 'Answers not found' });
        });
    }
    insertAswers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO aswers_tb SET ?', [req.body]);
            res.json({ text: 'Answers inserted ' });
        });
    }
}
exports.aswersControllers = new AswersControllers();

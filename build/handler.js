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
const hello_handler_1 = require("./lib/hello_handler");
exports.handle = (event, context, callback) => __awaiter(void 0, void 0, void 0, function* () {
    const helloHandler = new hello_handler_1.HelloHandler();
    try {
        const message = yield helloHandler.sayHello(context.functionName);
        callback(undefined, message);
    }
    catch (error) {
        callback(error);
    }
});

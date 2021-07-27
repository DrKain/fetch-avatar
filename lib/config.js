"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var Config = /** @class */ (function () {
    function Config() {
        this.store = {};
    }
    /**
     * Store an API key or token for use in fetch-avatar
     * @param key Provider Name
     * @param value API Key or token
     */
    Config.prototype.set = function (key, value) {
        this.store[key] = value;
    };
    /**
     * Get an API Key or token for the desired provider
     * @param key Provider Name
     * @returns string
     */
    Config.prototype.get = function (key) {
        return this.store[key] || null;
    };
    return Config;
}());
exports.config = new Config();

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.BaseLabelized = void 0;
var Base_1 = require("./Base");
var BaseLabelized = /** @class */ (function (_super) {
    __extends(BaseLabelized, _super);
    function BaseLabelized() {
        return _super.call(this) || this;
    }
    ;
    return BaseLabelized;
}(Base_1.Base));
exports.BaseLabelized = BaseLabelized;

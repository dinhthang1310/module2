"use strict";
exports.__esModule = true;
exports.GoodsManager = void 0;
var GoodsManager = /** @class */ (function () {
    function GoodsManager() {
    }
    GoodsManager.display = function () {
        console.log(GoodsManager.goodses);
    };
    GoodsManager.add = function (goods) {
        this.goodses.push(goods);
    };
    GoodsManager["delete"] = function (id) {
        for (var i = 0; i < this.goodses.length; i++) {
            if (id == this.goodses[i].getID()) {
                this.goodses.splice(id, 1);
                console.log("xoa ".concat(i));
            }
        }
    };
    GoodsManager.goodses = [];
    return GoodsManager;
}());
exports.GoodsManager = GoodsManager;

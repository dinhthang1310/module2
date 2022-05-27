"use strict";
exports.__esModule = true;
exports.Goods = void 0;
var Goods = /** @class */ (function () {
    function Goods(ID, Name, type, gia, soluong, ngaytao) {
        this.ID = ID;
        this.Name = Name;
        this.type = type;
        this.gia = gia;
        this.soluong = soluong;
        this.ngaytao = ngaytao;
    }
    Goods.prototype.getID = function () {
        return this.ID;
    };
    Goods.prototype.setID = function (value) {
        this.ID = value;
    };
    Goods.prototype.getName = function () {
        return this.Name;
    };
    Goods.prototype.setName = function (value) {
        this.Name = value;
    };
    Goods.prototype.getType = function () {
        return this.type;
    };
    Goods.prototype.setType = function (value) {
        this.type = value;
    };
    Goods.prototype.getGia = function () {
        return this.gia;
    };
    Goods.prototype.setGia = function (value) {
        this.gia = value;
    };
    Goods.prototype.getSoluong = function () {
        return this.soluong;
    };
    Goods.prototype.setSoluong = function (value) {
        this.soluong = value;
    };
    Goods.prototype.getNgaytao = function () {
        return this.ngaytao;
    };
    Goods.prototype.setNgaytao = function (value) {
        this.ngaytao = value;
    };
    return Goods;
}());
exports.Goods = Goods;

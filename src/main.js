"use strict";
exports.__esModule = true;
var goods_1 = require("./goods");
var goodsManager_1 = require("./goodsManager");
var goods1 = new goods_1.Goods(1, "iphone", "dien thoai", 2000, 3, "10-10-2020");
var goods2 = new goods_1.Goods(2, "coca", "nuoc giai khat", 1000, 10, "14-1-2020");
var goods3 = new goods_1.Goods(3, "oishi", "banh keo", 500, 15, "11-10-2020");
var goods4 = new goods_1.Goods(4, "samsung", "maytinh", 3000, 31, "12-12-2020");
// let goodsManager = new GoodsManager()
goodsManager_1.GoodsManager.add(goods1);
goodsManager_1.GoodsManager.add(goods2);
goodsManager_1.GoodsManager.add(goods3);
goodsManager_1.GoodsManager.add(goods4);
// GoodsManager.display()
goodsManager_1.GoodsManager.display();
goodsManager_1.GoodsManager["delete"](2);

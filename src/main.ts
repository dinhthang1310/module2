import {Goods} from "./goods";
import {GoodsManager} from "./goodsManager";

let goods1 = new Goods(1,"iphone","dien thoai",2000,3,"10-10-2020");
let goods2 = new Goods(2,"coca","nuoc giai khat",1000,10,"14-1-2020");
let goods3 = new Goods(3,"oishi","banh keo",500,15,"11-10-2020");
let goods4 = new Goods(4,"samsung","maytinh",3000,31,"12-12-2020");
// let goodsManager = new GoodsManager()

GoodsManager.add(goods1)
GoodsManager.add(goods2)
GoodsManager.add(goods3)
GoodsManager.add(goods4)

// GoodsManager.display()
GoodsManager.display()
GoodsManager.delete(1)







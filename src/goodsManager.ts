import {Goods} from "./goods";

export class GoodsManager {
    static goodses =[];

    constructor() {
    }

    static display() {
        console.log(GoodsManager.goodses)
    }

    static add(goods) {
        this.goodses.push(goods)
    }

    static delete(id) {
        for (let i = 0; i < this.goodses.length; i++) {
            if (id == this.goodses[i].getID()) {
                this.goodses.splice(id, 1)
                console.log(`xoa ${i}`)
            }
        }
    }

    // static delete(goods) {
    //     this.goodses.splice(goods,1)
    // }

    // edit() {
    //
    // }

//
}
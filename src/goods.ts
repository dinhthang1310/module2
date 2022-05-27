export class Goods {
    ID: number;
    Name: string;
    type: string;
    gia: number;
    soluong: number;
    ngaytao: string;


    constructor(ID: number, Name: string, type: string, gia: number, soluong: number, ngaytao: string) {
        this.ID = ID;
        this.Name = Name;
        this.type = type;
        this.gia = gia;
        this.soluong = soluong;
        this.ngaytao = ngaytao;
    }

    getID(): number {
        return this.ID;
    }

    setID(value: number) {
        this.ID = value;
    }

    getName(): string {
        return this.Name;
    }

    setName(value: string) {
        this.Name = value;
    }

    getType(): string {
        return this.type;
    }

    setType(value: string) {
        this.type = value;
    }

    getGia(): number {
        return this.gia;
    }

    setGia(value: number) {
        this.gia = value;
    }

    getSoluong(): number {
        return this.soluong;
    }

    setSoluong(value: number) {
        this.soluong = value;
    }

    getNgaytao(): string {
        return this.ngaytao;
    }

    setNgaytao(value: string) {
        this.ngaytao = value;
    }
}
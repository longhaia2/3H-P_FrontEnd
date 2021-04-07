export class Nguphap{
  // tslint:disable-next-line:variable-name
  private _idNguPhap: number;
  // tslint:disable-next-line:variable-name
  private _cauTruc: string;
  // tslint:disable-next-line:variable-name
  private _yNghia: string;
  // tslint:disable-next-line:variable-name
  private _viDu: string;


  constructor(idNguPhap: number, cauTruc: string, yNghia: string, viDu: string) {
    this._idNguPhap = idNguPhap;
    this._cauTruc = cauTruc;
    this._yNghia = yNghia;
    this._viDu = viDu;
  }

  get idNguPhap(): number {
    return this._idNguPhap;
  }

  set idNguPhap(value: number) {
    this._idNguPhap = value;
  }

  get cauTruc(): string {
    return this._cauTruc;
  }

  set cauTruc(value: string) {
    this._cauTruc = value;
  }

  get yNghia(): string {
    return this._yNghia;
  }

  set yNghia(value: string) {
    this._yNghia = value;
  }

  get viDu(): string {
    return this._viDu;
  }

  set viDu(value: string) {
    this._viDu = value;
  }
}

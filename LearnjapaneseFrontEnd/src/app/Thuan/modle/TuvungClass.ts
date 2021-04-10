export class Tuvung {
  // tslint:disable-next-line:variable-name
  private _id: number;
  // tslint:disable-next-line:variable-name
  private _tuVung: string;
  // tslint:disable-next-line:variable-name
  private _hanTu: string;
  // tslint:disable-next-line:variable-name
  private _amHan: string;
  // tslint:disable-next-line:variable-name
  private _nghia: string;
  constructor(id: number, tuVung: string, hanTu: string, amHan: string, nghia: string) {
    this._id = id;
    this._tuVung = tuVung;
    this._hanTu = hanTu;
    this._amHan = amHan;
    this._nghia = nghia;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get tuVung(): string {
    return this._tuVung;
  }

  set tuVung(value: string) {
    this._tuVung = value;
  }

  get hanTu(): string {
    return this._hanTu;
  }

  set hanTu(value: string) {
    this._hanTu = value;
  }

  get amHan(): string {
    return this._amHan;
  }

  set amHan(value: string) {
    this._amHan = value;
  }

  get nghia(): string {
    return this._nghia;
  }

  set nghia(value: string) {
    this._nghia = value;
  }
}

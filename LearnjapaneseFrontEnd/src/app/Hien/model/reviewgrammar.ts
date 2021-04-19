export class Reviewgrammar {
  private _content: string;
  private _ansA: string;
  private _ansB: string;
  private _ansC: string;
  private _ansD: string;
  private _ansCorrect: string;


  constructor(content: string, ansA: string, ansB: string, ansC: string, ansD: string, ansCorrect: string) {
    this._content = content;
    this._ansA = ansA;
    this._ansB = ansB;
    this._ansC = ansC;
    this._ansD = ansD;
    this._ansCorrect = ansCorrect;
  }


  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get ansA(): string {
    return this._ansA;
  }

  set ansA(value: string) {
    this._ansA = value;
  }

  get ansB(): string {
    return this._ansB;
  }

  set ansB(value: string) {
    this._ansB = value;
  }

  get ansC(): string {
    return this._ansC;
  }

  set ansC(value: string) {
    this._ansC = value;
  }

  get ansD(): string {
    return this._ansD;
  }

  set ansD(value: string) {
    this._ansD = value;
  }

  get ansCorrect(): string {
    return this._ansCorrect;
  }

  set ansCorrect(value: string) {
    this._ansCorrect = value;
  }


}

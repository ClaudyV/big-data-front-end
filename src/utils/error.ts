export class ErrorPageDef extends Error {
  constructor(message: string, public statusText: string) {
    super(message);
    this.statusText = statusText;
  }
}

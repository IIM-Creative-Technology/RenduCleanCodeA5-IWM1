export class ClientError extends Error {
  private _status: number
  get status(): number { return this._status }

  constructor(message: string, status: number) {
    super(message)
    this._status = status
    this.name = 'ClientError'
  }
}

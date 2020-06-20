class Token {
  constructor() {
    this.token = null;
    this.expiresIn = 0;
  }

  get exists() {
    return !!this.token;
  }

  processPayload({ token, expiresIn }) {
    this.token = token;
    this.expiresIn = expiresIn;
  }

  getToken() {
    return this.token;
  }

  clean() {
    this.token = null;
    this.expiresIn = 0;
  }
}

export default new Token();

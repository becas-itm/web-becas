class Token {
  constructor() {
    this.token = null;
    this.expiresIn = 0;
  }

  get exists() {
    return !!this.token;
  }

  processPayload = payload => {
    if (payload) {
      this.token = payload.token;
      this.expiresIn = payload.expiresIn;
    }
  };

  getToken() {
    return this.token;
  }

  clean() {
    this.token = null;
    this.expiresIn = 0;
  }
}

export default new Token();

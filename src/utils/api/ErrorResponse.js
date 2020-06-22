export default class ErrorResponse extends Error {
  constructor(axiosError) {
    super();
    this.name = 'ErrorResponse';
    this.axiosError = axiosError;
  }

  get statusCode() {
    return this.axiosError?.response?.status;
  }

  get unauthorized() {
    return this.statusCode === 401;
  }

  get forbidden() {
    return this.statusCode === 403;
  }

  get validationFailed() {
    const status = this.statusCode;
    return (
      status >= 400 && status < 500 && this.axiosError?.response?.data?.detail
    );
  }

  get network() {
    return !!this.axiosError.request;
  }

  get details() {
    return this.axiosError?.response?.data?.detail;
  }
}

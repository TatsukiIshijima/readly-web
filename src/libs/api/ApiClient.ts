class ApiClient {
  private readonly baseURL: string;
  private authTokenProvider: AuthTokenProvider;

  constructor(baseURL: string, authTokenProvider: AuthTokenProvider) {
    this.baseURL = baseURL;
    this.authTokenProvider = authTokenProvider;
  }

  private authInterceptor(options: RequestInit = {}): RequestInit {
    const token = this.authTokenProvider.getAuthToken();
    if (token) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return options;
  }

  private async request(
    url: string,
    options: RequestInit = {}
  ): Promise<Response> {
    options = this.authInterceptor(options);
    const response = await fetch(`${this.baseURL}${url}`, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response;
  }

  async get<T>(url: string, options: RequestInit = {}): Promise<T> {
    options.method = 'GET';
    options.headers = {
      ...options.headers,
      'Content-Type': 'application/json',
    };
    const response = await this.request(url, options);
    return await response.json();
  }

  async post<T>(
    url: string,
    body: BodyInit,
    options: RequestInit = {}
  ): Promise<T> {
    options.method = 'POST';
    options.headers = {
      ...options.headers,
      'Content-Type': 'application/json',
    };
    options.body = body;
    const response = await this.request(url, options);
    return await response.json();
  }

  async delete<T>(url: string, options: RequestInit = {}): Promise<T> {
    options.method = 'DELETE';
    options.headers = {
      ...options.headers,
      'Content-Type': 'application/json',
    };
    const response = await this.request(url, options);
    return await response.json();
  }
}

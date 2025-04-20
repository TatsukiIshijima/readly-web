import { ApiClient } from '@/libs/api/ApiClient';

export class AppContainer {
  apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }
}

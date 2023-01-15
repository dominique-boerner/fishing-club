import PocketBase from 'pocketbase';
import { environment } from '../environments/environment';

/**
 * PocketBaseService
 * @description - Handles interactions with PocketBase and authentication.
 */
class PocketBaseService {
  pocketBase = new PocketBase(environment.api.url);

  constructor() {
    this.authenticate();
  }

  private authenticate() {
    this.pocketBase
      .collection('users')
      .authWithPassword(environment.api.username, environment.api.password);
  }
}

/**
 * Returns a single instance of PocketBaseService.
 */
export const pocketBaseServiceInstance = new PocketBaseService();

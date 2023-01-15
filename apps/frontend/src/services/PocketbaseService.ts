import PocketBase from 'pocketbase';
import { environment } from '../environments/environment';

/**
 * PocketBaseService
 * @description - Handles interactions with PocketBase and authentication.
 */
class PocketBaseService {
  pocketBase = new PocketBase(environment.api.url);

  /**
   * Get the current user which is logged in
   */
  getCurrentUser() {
    return pocketBaseServiceInstance.pocketBase.authStore.model;
  }

  /**
   * Authenticate the user with username and password
   */
  authenticate(username: string, password: string) {
    this.pocketBase.collection('users').authWithPassword(username, password);
  }
}

/**
 * Returns a single instance of PocketBaseService.
 */
export const pocketBaseServiceInstance = new PocketBaseService();

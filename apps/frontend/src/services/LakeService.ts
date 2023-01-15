import { Lake } from '@fishing-club/fishing-club-types';
import { pocketBaseServiceInstance } from './PocketbaseService';
import { environment } from '../environments/environment';

/**
 * LakeService
 * @description - Handles api requests for lakes.
 */
class LakeService {
  pocketBase = pocketBaseServiceInstance.pocketBase;

  /**
   * Get every lake from the database.
   */
  async getLakes() {
    return this.pocketBase.collection('lakes').getList<Lake>(1, 50);
  }

  /**
   * Remove a lake from the database.
   * @param {string} id - the id of the lake to remove.
   */
  removeLake(id: string) {
    return this.pocketBase.collection('lakes').delete(id);
  }
}

/**
 * Returns a single instance of LakeService.
 */
export const lakeServiceInstance = new LakeService();

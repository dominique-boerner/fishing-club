import { Lake } from '@fishing-club/fishing-club-types';
import PocketBase from 'pocketbase';

/**
 * LakeService
 * @description - Handles api requests for lakes.
 */
class LakeService {
  pb = new PocketBase('http://localhost:8090');

  async getLakes() {
    return this.authenticate().then(() => {
      return this.pb.collection('lakes').getList<Lake>(1, 50);
    });
  }

  removeLake(id: string) {
    console.log(id);
    return this.authenticate().then(() => {
      return this.pb.collection('lakes').delete(id);
    });
  }

  private async authenticate() {
    const authData = this.pb
      .collection('users')
      .authWithPassword('default', 'defaultuser');
  }
}

export const lakeServiceInstance = new LakeService();

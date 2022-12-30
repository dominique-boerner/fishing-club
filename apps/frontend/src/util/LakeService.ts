import axios from 'axios';
import { Lake } from '@fishing-club/fishing-club-types';
import { environment } from '../environments/environment';

/**
 * LakeService
 * @description - Handles api requests for lakes.
 */
export class LakeService {
  static getLakes() {
    return axios.get<Lake[]>(
      `${environment.api.url}:${environment.api.port}/lake`
    );
  }

  static removeLake(id: string) {
    return axios.delete<Lake[]>(
      `${environment.api.url}:${environment.api.port}/lake?id=${id}`
    );
  }
}

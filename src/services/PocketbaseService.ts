import PocketBase from "pocketbase";
import { environment } from "@/environments/environment";

/**
 * PocketBaseService
 * @description - Handles interactions with PocketBase and authentication.
 */
class PocketBaseService {
  pocketBase = new PocketBase(environment.api.url);

  /**
   * Authenticate the user with username and password
   */
  async authenticate(username: string, password: string) {
    return this.pocketBase
      .collection("users")
      .authWithPassword(username, password);
  }
}

/**
 * Returns a single instance of PocketBaseService.
 */
export const pocketBaseServiceInstance = new PocketBaseService();

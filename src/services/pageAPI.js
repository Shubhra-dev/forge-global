import { BASE_URL } from "./BASE_URL";
import { publicGet } from "./publicGet";

export async function getAssetManager() {
  return await publicGet(`${BASE_URL}/asset-manager`);
}

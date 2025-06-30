import { BASE_URL } from "./BASE_URL";
import { publicGet } from "./publicGet";

export async function privateCompanies() {
  return await publicGet(`${BASE_URL}/private-company`);
}

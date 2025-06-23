import { BASE_URL } from "./BASE_URL";
import { publicGet } from "./publicGet";

export async function privateMarketTrends() {
  return await publicGet(`${BASE_URL}/private-market-trends`);
}

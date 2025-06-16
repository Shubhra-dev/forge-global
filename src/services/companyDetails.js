import { BASE_URL } from "./BASE_URL";
import { publicGet } from "./publicGet";

export async function showCompany(slug) {
  return await publicGet(`${BASE_URL}/companies/${slug}/show`);
}
export async function fundingRoundDetails(id) {
  return await publicGet(`${BASE_URL}/companies/${id}/funding-round-details`);
}

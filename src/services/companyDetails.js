import { BASE_URL } from "./BASE_URL";
import { publicGet } from "./publicGet";

export async function showCompany(slug) {
  return await publicGet(`${BASE_URL}/companies/${slug}/show`);
}
export async function fundingRoundDetails(id) {
  return await publicGet(`${BASE_URL}/companies/${id}/funding-round-details`);
}
export async function companyDetailsShow(id) {
  return await publicGet(`${BASE_URL}/companies/${id}/company-details`);
}
export async function getFAQ(id) {
  return await publicGet(`${BASE_URL}/companies/${id}/company-faqs`);
}
export async function getInvestors(id) {
  return await publicGet(`${BASE_URL}/companies/${id}/company-investors`);
}
export async function getLeadershipAndBoard(id) {
  return await publicGet(
    `${BASE_URL}/companies/${id}/leadership-and-board-members`
  );
}
export async function getSimilarCompanies(id) {
  return await publicGet(`${BASE_URL}/companies/${id}/similar-companies`);
}
export async function getCompanyMedia(id) {
  return await publicGet(`${BASE_URL}/companies/${id}/company-news`);
}

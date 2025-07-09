import { BASE_URL } from "./BASE_URL";
import { publicGet } from "./publicGet";

export async function getAssetManager() {
  return await publicGet(`${BASE_URL}/asset-manager`);
}
export async function getAccreditedInvestor() {
  return await publicGet(`${BASE_URL}/accredited-investors`);
}
export async function getAngleInvestor() {
  return await publicGet(`${BASE_URL}/seed-and-angel-investors`);
}
export async function getFamilyOffices() {
  return await publicGet(`${BASE_URL}/family-offices`);
}
export async function getVentureCapital() {
  return await publicGet(`${BASE_URL}/venture-capital-firms`);
}
export async function getWealthManager() {
  return await publicGet(`${BASE_URL}/wealth-managers`);
}
export async function getForgePro() {
  return await publicGet(`${BASE_URL}/forge-pro`);
}

import { publicGet } from "./publicGet";
import { BASE_URL } from "./BASE_URL";

export async function getFilterVariables() {
  return await publicGet(`${BASE_URL}/company-filter-data`);
}
export async function getSubsectors(id) {
  return await publicGet(
    `${BASE_URL}/sub-sectors${id !== "" ? `?sector_id=${id}` : ""}`
  );
}
export async function getCompanies(
  sector_id,
  sub_sector_id,
  post_money_valuation,
  per_page,
  page,
  search
) {
  return await publicGet(
    `${BASE_URL}/companies?search=${search}&sector_id=${sector_id}&sub_sector_id=${sub_sector_id}&post_money_valuation=${post_money_valuation}&per_page=${per_page}&page=${page}&order_column=name&order_type=asc`
  );
}

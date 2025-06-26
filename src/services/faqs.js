import { BASE_URL } from "./BASE_URL";
import { publicGet } from "./publicGet";

export async function getPageFaqs(page) {
  return await publicGet(`${BASE_URL}/faqs?page=${page}`);
}

import { BASE_URL } from "./BASE_URL";
import { publicGet } from "./publicGet";

export async function featuredPosts() {
  return await publicGet(`${BASE_URL}/insights/featured-posts`);
}
export async function postCategories() {
  return await publicGet(`${BASE_URL}/insights/post-categories`);
}
export async function allPosts(postCategoryId) {
  return await publicGet(
    `${BASE_URL}/insights/posts${postCategoryId === "" ? "" : `?post_category_id=${postCategoryId}`}`
  );
}
export async function postDetails(slug) {
  return await publicGet(`${BASE_URL}/posts/${slug}`);
}

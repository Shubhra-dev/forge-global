import { BASE_URL } from "./BASE_URL";

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

export async function subcribeNewletter(data) {
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `${BASE_URL}/subscription?email=${data}`,
      requestOptions
    );
    if (response.status === 422) {
      throw new Error("This email address is already subscribed.");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

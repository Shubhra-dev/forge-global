export async function publicGet(endpoint, customHeaders = {}) {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...customHeaders,
  };

  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Request failed:", error);
    throw error; // Rethrow to let the caller handle it
  }
}

export async function fetchUtil(
  endpoint: string,
  options: RequestInit = {}
): Promise<any> {
  const baseUrl = "";

  const url = baseUrl + endpoint;

  const token = "";

  const headers = {
    ...options.headers,
    Authorization: `Bearer ${token}`,
  };

  const response = await fetch(url, { ...options, headers });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

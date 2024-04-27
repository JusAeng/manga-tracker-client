import configEnv from "../config";

export async function fetchUtil(
  endpoint: string,
  options: RequestInit = {}
): Promise<any> {
  const baseUrl = configEnv.BASE_URL || "";

  const url = baseUrl + endpoint;

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTQyNzYxNTUsInJvbGUiOiJ1c2VyIiwidXNlcklkIjoiOGE5OTRiNzYyYzM4OGRhOTM0YWI0NzM2In0.qhkUCrYsJ4WdS_450myn2C6nuwD_SEcf2_7zD8FkQto";

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

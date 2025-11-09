const API_URL = "https://learn-anything-with-ai.p.rapidapi.com";

const headers = {
  "Content-Type": "application/json",
  "x-rapidapi-host": "learn-anything-with-ai.p.rapidapi.com",
  "x-rapidapi-key": "c66357fcbfmshfabc113790f4506p17f05djsn7d0254f271ae"
};

export async function generateContent(body) {
  const response = await fetch(`${API_URL}/content/generate-content`, {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  });

  const data = await response.json();
  return data;
}

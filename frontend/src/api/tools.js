const API = import.meta.env.VITE_API;

export async function getTools(token) {
  try {
    const response = await fetch(API + "/tools", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function getTool(id, token) {
  try {
    const response = await fetch(API + "/tools/" + id, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function addTool(
  token,
  name,
  series,
  oring,
  connection,
  length,
  weight,
  voltage,
) {
  if (!token) {
    throw Error("You must be signed in to create a tool.");
  }

  const response = await fetch(API + "/tools", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(
      name,
      series,
      oring,
      connection,
      length,
      weight,
      voltage,
    ),
  });

  if (!response.ok) {
    const result = await response.json();
    throw Error(result.message);
  }
}

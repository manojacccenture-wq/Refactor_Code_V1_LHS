export async function submitContact(data: any) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/contact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!res.ok) {
      throw new Error("Request failed");
    }

    return await res.json();
  } catch (error) {
    throw new Error("Something went wrong. Please try again.");
  }
}
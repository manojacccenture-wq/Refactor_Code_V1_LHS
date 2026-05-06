export async function submitContact(data: any) {
  // const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;

  // if (!BASE_URL) {
  //   throw new Error("API base URL is not defined");
  // }

  try {
    // const res = await fetch(
    //   `${BASE_URL}/Account/send`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   }
    // );

        const res = await fetch(
      `http://103.61.225.80/LHSWEBAPI/api/Account/send`,
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
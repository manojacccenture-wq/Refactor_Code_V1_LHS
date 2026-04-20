export async function submitApplication(data: any) {
  const formData = new FormData();

  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("phone", data.phone);
  formData.append("coverLetter", data.coverLetter || "");
  formData.append("resume", data.resume);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/apply`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}
import { request } from "../request";

export const loginApiCall = async (email: string, password: string) => {
  try {
    const response = await fetch(`${request.login}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const jsonresponse = await response.json();

    console.log("jsonresponse", jsonresponse);

    return {
      response: response,
      jsonresponse: jsonresponse,
    };
  } catch (error) {
    console.error("Error in loginApiCall:", error);
    console.log("Something went wrong... login api failed.");
    throw error; // Rethrow the error to be handled by the calling function
  }
};

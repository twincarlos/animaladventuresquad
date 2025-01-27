"use server";

export async function addSubscriber (initialState, formData) {
  const email = formData.get("email");
  
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const apiServer = process.env.MAILCHIMP_API_SERVER;
  const listId = process.env.MAILCHIMP_LIST_ID;

  const url = `https://${apiServer}.api.mailchimp.com/3.0/lists/${listId}/members`;
  
  const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
      }),
    });

  const data = await response.json();
  return data;
};

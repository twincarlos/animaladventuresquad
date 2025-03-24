"use server";

export async function mailchimp (formData) {
  const email = formData.get("email");  

  const data = {
    email_address: email,
    status: "subscribed"
  };
  
  const response = await fetch(`https://us7.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/`, {
    method: "POST",
    headers: {
      "Authorization": `apiKey ${process.env.MAILCHIMP_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
};

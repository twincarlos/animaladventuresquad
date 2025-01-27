"use server";

export async function mailchimp (formData) {
  const firstName = formData.get("first-name");
  const lastName = formData.get("last-name");
  const subject = formData.get("subject");
  const message = formData.get("message");
  const email = formData.get("email");  

  const data = {
    email_address: email,
    status: "subscribed",
    merge_fields: {
      FNAME: firstName,
      LNAME: lastName,
      SUBJECT: subject,
      MESSAGE: message
    }
  };

  console.log(data);
  
  const response = await fetch(`https://us20.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/`, {
    method: "POST",
    headers: {
      "Authorization": `apiKey ${process.env.MAILCHIMP_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
};

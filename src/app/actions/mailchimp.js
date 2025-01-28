"use server";
import emailjs from "emailjs-com";

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
      LNAME: lastName
    }
  };
  
  const response = await fetch(`https://us7.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/`, {
    method: "POST",
    headers: {
      "Authorization": `apiKey ${process.env.MAILCHIMP_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  await emailjs.send(
                process.env.SERVICE_ID,
                process.env.TEMPLATE_ID,
                {
                    senderEmail: email,
                    receiverEmail: process.env.RECEIVER_EMAIL,
                    subject,
                    message,
                },
                process.env.USER_ID
            );};

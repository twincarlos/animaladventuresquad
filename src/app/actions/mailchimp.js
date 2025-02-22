"use server";
import emailjs from "emailjs-com";

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

export async function sendEmail (formData) {
  const firstName = formData.get("first-name");
  const lastName = formData.get("last-name");
  const subject = formData.get("subject");
  const message = formData.get("message");
  const email = formData.get("email");
  /*
  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          service_id: process.env.SERVICE_ID,
          template_id: process.env.TEMPLATE_ID,
          user_id: process.env.USER_ID,
          accessToken: process.env.PRIVATE_KEY,
          template_params: {
            user_name: firstName + " " + lastName,
            user_email: email,
            message,
          }
        })
});
*/
  emailjs.send("service_qeplqak","template_d0i45ur",{
user_name: "Carlos",
user_email: "twincarlos98@gmail.com",
message: "Message",
}, "Q6Pk1XW8n87bht3Et");
};

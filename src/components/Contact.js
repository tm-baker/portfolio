import React from "react";
import { MailIcon } from "@heroicons/react/solid";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "test", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-20 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <MailIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Contact
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Let's connect! My inbox is always open.
          </p>
        </div>
        <div className="flex flex-wrap">
        </div>
      </div>
    </section>
  );
}

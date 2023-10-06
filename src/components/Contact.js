import React from "react";
import { MailIcon } from "@heroicons/react/solid";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/api/index.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify({ "name": name, "email": email, "message": message }),
    })
      .then(function(response){console.log(encode({ "name": name, "email": email, "message": message })); console.log(response);setSuccess(true);})
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative bg-light-pink">
      <div className="container px-5 py-20 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-5">
          <MailIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
            Contact
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Let's connect! My inbox is always open.
          </p>
        </div>
        <div className="flex flex-wrap">
          {!success ? <form
            name="test"
            onSubmit={handleSubmit}
            className="flex flex-col w-full">
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-700 focus:pink-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="text-white bg-tealish font-medium border-0 py-2 px-6 focus:outline-none hover:bg-pink-800 rounded text-lg">
              Submit
            </button>
          </form> :
            <div className="flex flex-col w-full">
              Thanks for reaching out. Looking forward to chatting with you soon!
            </div>}
        </div>
      </div>
    </section>
  );
}

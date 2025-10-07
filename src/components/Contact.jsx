import React, { useState } from "react";

const Contact = () => {
  const [messageArea, setMessageArea] = useState("");
  const [name, setName] = useState("");
  return (
    <div className="bg-black">
      <section className="bg-base-300 px-12 py-10 max-w-5xl mx-auto">
        <h2 className="text-3xl  mb-6 text-center rounded text-white">
          Let's Connect!
        </h2>
        <div className="px-6 py-4 rounded bg-base-100">
          <p className="text text-gray-200 mb-8">
            My inbox is a quiet little corner—just how I like it. But if you’ve
            got something thoughtful to share, I’d truly love to hear it. Send
            me a note below and it’ll go straight to my email. No clutter, no
            fuss—just honest connection.
          </p>

          <form
            action="https://formsubmit.co/kreetisharma1210@gmail.com" // Replace with your actual email or EmailJS endpoint
            method="POST"
            className="space-y-6"
          >

            <div>
              <label className="block text-white mb-2 text-lg font-medium">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="input input-bordered w-full bg-gray-800 text-white"
                placeholder="Your good name!"
              />
            </div>

            <div>
              <label className="block text-white mb-2 text-lg font-medium">
                Your Message
              </label>
              <textarea
                value={messageArea}
                onChange={(e) => setMessageArea(e.target.value)}
                required
                className="textarea textarea-bordered w-full bg-gray-800 text-white"
                rows="5"
              ></textarea>
            </div>

            <div className="flex justify-end gap-4">
              <button
                className="btn btn-outline bd-primary"
                onClick={() => {
                  setMessageArea("");
                  setName(" ");
                }}
              >
                Clear
              </button>
              <button type="submit" className="btn  bg-white text-black">
                Send Message
              </button>
            </div>
          </form>
        </div>
        <section className="max-w-5xl mx-auto mt-15">
          <div className=" px-10 py-8 text-center outline rounded bg-base-100">
            <h2 className="text-3xl  mb-2 text-white-500">Find me elsewhere</h2>
            <p className="text-sm text-gray-400 mb-4">
              Here are some important links to find me:
            </p>
            <div className="flex gap-4 items-center justify-center align-center flex-wrap">
              <a
                href="https://www.linkedin.com/in/kreeti-sharma-353072195/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-primary"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/kreeti1210"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-grey-400"
              >
                GitHub
              </a>
              <a
                href="https://peerlist.io/kreeti1210"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-success"
              >
                Peerlist
              </a>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Contact;

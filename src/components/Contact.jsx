import React from 'react'

const Contact = () => {
  return (
    <div className="bg-black">
      <section className="bg-base-300 px-10 py-15 max-w-5xl mx-auto">
        <h2 className="text-3xl  mb-6 text-center rounded text-white">
          Let's Connect!
        </h2>
        <div className="px-10 py-4 rounded">
          <p className="text text-gray-400 mb-8">
            I prefer to keep my inbox private—but if you’ve got something to
            say, I’d love to hear it. Drop me a message below and it’ll land
            directly in my email. No spam, no noise—just real talk.
          </p>

          <form
            action="https://formsubmit.co/kreetisharma1210@gmail.com" // Replace with your actual email or EmailJS endpoint
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://yourwebsite.com/thank-you"
            />

            <div>
              <label className="block text-white mb-2 text-lg font-medium">
                Your Name
              </label>
              <input
                type="text"
                name="name"
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
                name="message"
                required
                className="textarea textarea-bordered w-full bg-gray-800 text-white"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
        <section className="py-10 px-10 max-w-5xl mx-auto mt-15">
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
}

export default Contact
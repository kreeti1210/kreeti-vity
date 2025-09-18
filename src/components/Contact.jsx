import React from 'react'

const Contact = () => {
  return (
    <div>
      <section className="px-6 py-10 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-indigo-600">
          Let's Connect
        </h2>

        <p className="text-lg text-gray-300 mb-8">
          I prefer to keep my inbox private—but if you’ve got something to say,
          I’d love to hear it. Drop me a message below and it’ll land directly
          in my email. No spam, no noise—just real talk.
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
              placeholder="John Doe"
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
              placeholder="Say hello..."
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </section>
      <section className="px-6 py-10 max-w-4xl mx-auto mb-15">
        <div >
          <h2 className="text-3xl font-bold mb-4 text-indigo-500">
            Find me elsewhere
          </h2>
          <p className="text-lg text-gray-300 mb-4">
          Here are some important links to find me:
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="https://www.linkedin.com/in/kreeti-sharma-353072195/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-info"
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
    </div>
  );
}

export default Contact
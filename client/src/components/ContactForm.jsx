import React from 'react'
import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa'

const ContactForm = () => {
  return (
    <div className="w-full flex flex-col md:flex-row py-10 md:gap-2">
      <form className="form-control md:w-1/2 max-w-full mx-2 md:pl-20">
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          placeholder="Enter name"
          className="input input-bordered  w-full mb-6"
        />
        <label htmlFor="password">Email</label>
        <input
          type="Email"
          placeholder="Enter Email"
          className="input input-bordered w-full mb-6"
        />
        <textarea
          className="textarea textarea-bordered"
          placeholder="Enter Message"
        ></textarea>
        <button className="btn mt-6">Envoyer</button>
      </form>
      <div className="flex flex-col items-center md:w-1/2 gap-y-14 md:pl-10 pt-10">
        <div className="flex items-center gap-2 justify-start">
          <FaLocationArrow /> <p>Rue de Paris</p>
        </div>
        <div className="flex items-center gap-2 justify-start">
          <FaPhone /> <p>01 49 11 11 11</p>
        </div>
        <div className="flex items-center gap-2 justify-start">
          <FaEnvelope />
          <a href="mailto:fisnik.crz7@gmail.com" className="link">
            email@example.com
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactForm

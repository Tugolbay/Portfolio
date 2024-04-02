import { useState } from "react";
import {
  FaGithub,
  FaEnvelopeOpen,
  FaTelegram,
  FaWhatsapp,
  FaPhoneSquareAlt,
  FaLinkedin,
} from "react-icons/fa";
import "./Contact.css";
import { FiSend } from "react-icons/fi";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
    myemail: "kasymbekovv1221@gmail.com",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const url = "https://formspree.io/f/mrgnqovn";
    await fetch(url, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });
    form.reset();
    setFormData({ name: "", myemail: "", email: "", tel: "", message: "" });
    alert("Сообщение отправлено!");
  };

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In<span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Gmail me</span>
                <h4 className="info__desc">kasymbekovv1221@gmail.com</h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+996703874862</h4>
              </div>
            </div>
            <div className="contact__social">
              <a
                href="https://web.telegram.org/k/#-4090543346/@Tygolbay"
                className="contact__social-link"
              >
                <FaTelegram />
              </a>
              <a href="" className="contact__social-link">
                <FaWhatsapp />
              </a>
              <a
                href="https://www.linkedin.com/in/tugolbay-kasymbekov-335b2b29b/"
                className="contact__social-link"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Tugolbay"
                className="contact__social-link"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form__control"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form__input-div">
              <input
                type="number"
                placeholder="Your tel number"
                className="form__control"
                name="tel"
                value={formData.tel}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              className="form__control textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="button" type="submit">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

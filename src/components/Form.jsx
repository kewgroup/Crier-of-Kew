import "./Form.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_xxx",   // 🔹 substitua pelo seu Service ID exato
        "template_xxx",  // 🔹 substitua pelo seu Template ID exato
        form.current,
        "YOUR_PUBLIC_KEY" // 🔹 substitua pela sua Public Key exata
      )
      .then(
        () => {
          alert("Formulário enviado com sucesso!");
          setIsSubmitting(false);
          form.current.reset(); // limpa os campos
        },
        (error) => {
          console.error("Erro ao enviar:", error);
          alert("❌ Ocorreu um erro ao enviar, verifique sua configuração.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <h2 id="suporte" className="form-title">Suporte</h2>
          


          <div className="form-group">
            <label htmlFor="user_name" className="form-label">Nome:</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              placeholder="Digite seu nome"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="user_email" className="form-label">Email:</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              placeholder="Digite seu email"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Mensagem:</label>
            <textarea
              name="message"
              id="message"
              placeholder="Digite sua mensagem"
              required
              className="form-textarea"
            ></textarea>
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="form-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

import { useState } from "react";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AiFillYoutube, AiOutlineMail, AiOutlinePhone } from "react-icons/Ai";
import { IoLocationOutline } from "react-icons/io5";

import { ContactForm, ContactInfo } from "./style";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";


interface ContactFormInputs {
  name: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
}

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  // const phoneRegExp = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3} \)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1} $/
  ///^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const schema = yup.object({
    name: yup.string().required("Digite o seu nome"),
    email: yup.string().email().required("Digite um e-mail válido"),
    phoneNumber: yup.string().required("Informe um número de telefone válido."),
    subject: yup.string().required("Informe o assunto da mensagem"),
    message: yup.string().required("Digite a sua mensagem aqui."),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: yupResolver(schema),
  });

  function sendEmail() {
    // e.preventDefault();
    const templateParams = {
      from_name: name,
      message: message,
      email: email,
      phone: phoneNumber,
      subject: subject,
    };
    emailjs
      .send(
        "service_ijni6if",
        "template_ys4o50r",
        templateParams,
        "DrMaMBYS9LOVxveTk"
      )
      .then(
        (response) => {
          alert("E-mail enviado com sucesso.");
          console.log("Email enviado", response.status, response.text);
          setName("");
          setEmail("");
          setPhoneNumber("");
          setMessage("");
          setSubject("");
        },
        (error) => {
          console.log("Error", error.status, error);
        }
      );
  }

  return (
    <>
       
      <div className="contact-container">
     
        <ContactInfo>
          <div className="contact-info-container">
            <div className="info-contact-control">
              <div className="title-icon">
                <AiOutlineMail />
                <h4>E-mail</h4>
              </div>
              <div>
                <p>dniemeyers@gmail.com</p>
              </div>
            </div>
            <div className="info-contact-control">
              <div className="title-icon">
                <IoLocationOutline />
                <h4>Endereço</h4>
              </div>
              <div>
                <p>
                  Nova Iguaçu - RJ
                </p>
              </div>
            </div>
            <div className="info-contact-control">
              <div className="title-icon">
                <AiOutlinePhone />
                <h4>Telefone</h4>
              </div>
              <div>
                <p>(21)97411-2744</p>
              </div>              
            </div>
          </div>
        </ContactInfo>
        <ContactForm>
          <div className="contact-title">
            <h1>Entre em contato</h1>
            
          </div>

          <form
            onSubmit={handleSubmit(sendEmail)}
            className="form"
            autoComplete="off"
          >
            <input
              {...register("name")}
              type="text"
              className="input"
              placeholder="&#xf007;    Nome"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <span className="input-error">
              {errors?.name?.message as string}
            </span>

            <input
              {...register("email")}
              type="text"
              className="input"
              placeholder="&#xf0e0;    Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <span className="input-error">
              {errors?.email?.message as string}
            </span>
            <InputMask
              mask={"(99) 99999-9999"}
              {...register("phoneNumber")}
              type="text"
              className="input"
              placeholder="&#xf095;    Telefone"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
            <span className="input-error">
              {errors?.phoneNumber?.message as string}
            </span>
            <h1 className="subject">Assunto</h1>
            <input
              type="text"
              className="subject-content"
              placeholder="Informe o assunto"
              {...register("subject")}
              id="subject"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            />
            <span className="input-error">
              {errors?.subject?.message as string}
            </span>
            <textarea
              {...register("message")}
              className="textarea"
              placeholder="Mensagem"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <span className="input-error">
              {errors?.message?.message as string}
            </span>
            
            <input type="submit" className="button" value="Enviar" />

            

          </form>
        </ContactForm>
      </div>
      
    </>
  );
}

export default Contact;
import React from "react";
import { post } from "../api/defaultAPI";
import { Form } from "react-bulma-components";
const { Input, Field, Control, Label } = Form;

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setMail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isValid, setIsValid] = React.useState(true);
  const [messageStatus, setMessageStatus] = React.useState(null);

  function emailIsValid(e) {
    const currentEmail = e.target.value;
    const currentIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(currentEmail);
    setIsValid(currentIsValid);
    setMail(currentEmail);
  }

  async function handleSubmit(e) {
    if (!isValid || email === "" || message.length < 5 || name.length < 2) return setMessageStatus("failed");
    if (messageStatus === "success") return
    setMessageStatus("pending");
    let res;
    try {
      res = await post("mail", { email, name, message });
      res ? setMessageStatus("success") : setMessageStatus("failed");
    } catch (error) {
      console.error(error);
      setMessageStatus("failed");
    }
  }
  console.log(messageStatus);
  return (
    <div style={{padding:"16px"}}>
      <Field className="control">
        <label className="label">Nom</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className={"input " + (name.length > 2 ? "is-success" : "")}
            name="name"
            type="text"
            placeholder="Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          {name.length > 2 && (
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          )}
        </div>
      </Field>
      <Field>
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className={`input ${email === "" ? "" : isValid ? "is-success" : "is-danger"}`}
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={emailIsValid}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <span className={isValid ? "" : "hidden"}>
              <i className="fas fa-check"></i>
            </span>
            <span className={!isValid ? "" : "hidden"}>
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </span>
          {!isValid && email !== "" && (
            <span className="help is-danger">This email is invalid</span>
          )}
        </div>
      </Field>

      <Field>
        <label className="label">Message</label>

        <textarea
          className={"textarea has-fixed-size " + (message.length > 5 ? "is-success" : "")}
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Field>
      <Field>
        <div className="control is-large">
          {messageStatus === null ? (
            <button className="button is-link" onClick={handleSubmit}>
              Envoyer
            </button>
          ) : messageStatus === "pending" ? (
            <><span className="help is-info">Envoi en cours</span>
            <button className="button is-link is-loading" onClick={handleSubmit}>
              Envoyer
            </button></>
          ) : messageStatus === "success" ? (
            <><span className="help is-success">Le message a pas été transmis</span>
            <button className="button is-success" onClick={handleSubmit}>
              Envoyer
            </button></>
          ) : (
            <>
              <span className="help is-danger">Le message n'a pas été transmis</span>
              <button className="button is-warning" onClick={handleSubmit}>
                Envoyer
              </button>
            </>
          )}
        </div>
      </Field>
    </div>
  );
}

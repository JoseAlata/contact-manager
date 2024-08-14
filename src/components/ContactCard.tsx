import { useState } from "react";
import { Contact } from "../types/types";

interface ContactCardProps {
  contact: Contact;
  handleEditClick: (contact: Contact) => void;
  deleteContact: (id: string) => void;
}

function ContactCard({
  contact,
  handleEditClick,
  deleteContact,
}: ContactCardProps) {
  function getRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }
  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Texto copiado al portapapeles");
      })
      .catch((err) => {
        console.error("Error al copiar el texto: ", err);
      });
  };
  const [backgroundColor] = useState(getRandomRgbColor());

  return (
    <div className='contact-card' style={{ backgroundColor }}>
      <div className='contact-card__info'>
        <h3 className='contact-card__name'>{contact.name}</h3>
        <p
          className='contact-card__email'
          onClick={() => {
            handleCopy(contact.email);
          }}
          title='Click para copiar el email'
        >
          <span className='material-symbols-outlined'>mail</span>
          {contact.email}
        </p>
        <p
          className='contact-card__phone'
          onClick={() => {
            handleCopy(contact.email);
          }}
          title='Click para copiar el teléfono'
        >
          <span className='material-symbols-outlined'>call</span>
          {contact.phone}
        </p>
      </div>
      <div className='contact-card__actions'>
        <a
          className='contact-card__btn-delete'
          onClick={() => deleteContact(contact.id)}
        >
          <span className='contact-card__icon-delete material-symbols-outlined'>
            delete
          </span>
        </a>
        <a
          onClick={() => handleEditClick(contact)}
          className='contact-card__btn-edit'
        >
          <span className='contact-card__icon-edit  material-symbols-outlined'>
            edit
          </span>
        </a>
      </div>
    </div>
  );
}

export default ContactCard;

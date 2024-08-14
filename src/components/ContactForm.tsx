import { useEffect, useState } from "react";
import { Contact } from "../types/types";

interface ContactProps {
  onAddContact: (contact: Contact) => void;
  onEditContact: (contact: Contact) => void;
  contactToEdit: Contact | undefined;
}

function ContactForm({
  onAddContact,
  onEditContact,
  contactToEdit,
}: ContactProps) {
  const [contact, setContact] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (contactToEdit) {
      setContact(contactToEdit);
    }
  }, [contactToEdit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (contactToEdit) {
      onEditContact(contact);
      console.log("contacto editado");
    } else {
      onAddContact({ ...contact, id: Date.now().toString() });
      console.log("contacto agregado");
    }
    setContact({
      id: "",
      name: "",
      email: "",
      phone: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className='contact-form'>
      <h2 className='contact-form__title'>
        {contactToEdit ? "Editar" : "Agregar"} Contacto
      </h2>
      <form onSubmit={handleSubmit} className='contact-form__form'>
        <label htmlFor='name' className='contact-form__label'>
          Nombre
        </label>
        <input
          type='text'
          id='name'
          value={contact.name}
          placeholder='Nombre'
          onChange={handleChange}
          name='name'
          className='contact-form__input'
          required
        />
        <label htmlFor='email' className='contact-form__label'>
          Correo
        </label>
        <input
          type='email'
          id='email'
          value={contact.email}
          placeholder='Correo'
          name='email'
          onChange={handleChange}
          className='contact-form__input'
          required
        />
        <label htmlFor='phone' className='contact-form__label'>
          Telefono
        </label>
        <input
          type='tel'
          value={contact.phone}
          placeholder='Telefono'
          name='phone'
          id='phone'
          onChange={handleChange}
          className='contact-form__input'
          required
        />
        <button type='submit' className='contact-form__submit'>
          {contactToEdit ? "Editar" : "Agregar"} Contacto
        </button>
      </form>
    </div>
  );
}

export default ContactForm;

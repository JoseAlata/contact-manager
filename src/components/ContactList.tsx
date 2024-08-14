import { Contact } from "../types/types";
import ContactCard from "./ContactCard";

interface ContactListProps {
  contacts: Contact[];
  handleEditClick: (contact: Contact) => void;
  deleteContact: (id: string) => void;
}

function ContactList({
  contacts,
  deleteContact,
  handleEditClick,
}: ContactListProps) {
  return (
    <div className='contact-list'>
      <h2 className='contact-list__title'>Lista de Contactos</h2>
      <div className='contact-list__cards'>
        {contacts.map((contact: Contact) => {
          return (
            <ContactCard
              key={contact.id}
              contact={contact}
              handleEditClick={handleEditClick}
              deleteContact={deleteContact}
            ></ContactCard>
          );
        })}
      </div>
    </div>
  );
}

export default ContactList;

import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { Contact } from "./types/types";
import Header from "./components/Header";

function App() {
  const [contacts, setContacts] = useState<Contact[]>(() => {
    const savedContacts = window.localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : [];
  });
  const [contactToEdit, setContactToEdit] = useState<Contact | undefined>(
    undefined
  );

  useEffect(() => {
    console.log("contacts: ", contacts);
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact: Contact) => {
    if (contactToEdit) {
    }
    setContacts([...contacts, contact]);
  };

  const editContact = (updatedContact: Contact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
    setContactToEdit(undefined);
  };
  const deleteContact = (id: string) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleEditClick = (contact: Contact) => {
    setContactToEdit(contact);
  };
  return (
    <>
      <Header />
      <main className='main'>
        <ContactForm
          onAddContact={addContact}
          onEditContact={editContact}
          contactToEdit={contactToEdit}
        ></ContactForm>
        <ContactList
          contacts={contacts}
          handleEditClick={handleEditClick}
          deleteContact={deleteContact}
        ></ContactList>
      </main>
    </>
  );
}

export default App;

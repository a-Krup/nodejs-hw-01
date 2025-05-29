import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('Контактів для видалення немає.');
      return;
    }

    const removedContact = contacts[contacts.length - 1];
    const updatedContacts = contacts.slice(0, -1);

    await writeContacts(updatedContacts);

    console.log('Останній контакт було видалено:', removedContact);
  } catch (error) {
    console.error('Помилка при видаленні останнього контакту:', error.message);
  }
};

removeLastContact();

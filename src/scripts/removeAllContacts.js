import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('Усі контакти було успішно видалено.');
  } catch (error) {
    console.error('Помилка при видаленні всіх контактів:', error.message);
  }
};

removeAllContacts();

import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
    try {
    // Перетворюємо оновлені контакти в формат JSON
    const data = JSON.stringify(updatedContacts, null, 2);
    
    // Записуємо дані у файл
    await fs.writeFile(PATH_DB, data, 'utf-8');
    
    console.log('Contacts have been successfully updated.');
  } catch (error) {
    console.error('Error writing contacts:', error);
    throw new Error('Failed to write contacts');
  }
};

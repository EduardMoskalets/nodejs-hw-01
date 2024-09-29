import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
    try {
    // Читаємо файл за шляхом PATH_DB
    const data = await fs.readFile(PATH_DB, 'utf-8');
    
    // Парсимо JSON та повертаємо результат
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading contacts:', error);
    throw new Error('Failed to read contacts');
  }
};

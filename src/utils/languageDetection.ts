import { franc } from 'franc';
import langs from 'langs';

export const detectLanguage = (text: string): { name: string; code: string } | null => {
  if (!text.trim()) return null;

  const langCode = franc(text);
  
  if (langCode === 'und') {
    return null;
  }

  const language = langs.where('3', langCode);
  if (!language) return null;

  return {
    name: language.name,
    code: language.name
  };
};
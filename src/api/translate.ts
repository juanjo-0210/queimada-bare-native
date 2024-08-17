import axios from 'axios';

export const translate = async (parraf: string) => {
  const options = {
  method: 'POST',
  url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
  headers: {
    'x-rapidapi-key': 'dbdbe9b280msh899191986d4e072p194bf5jsn1fa9273a6d12',
    'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  data: {
    q: parraf,
    source: 'en',
    target: 'es'
  }
};

try {
	const response = await axios.request(options);
	return response.data.data.translations.
translatedText

} catch (error) {
	console.error(error);
}
}
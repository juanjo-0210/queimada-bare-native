import axios from 'axios';

export interface GptResponse {
  data: GptResponse | PromiseLike<GptResponse>;
  text: string;
  finish_reason: string;
  model: string;
  server: string;
}

export const gptConsult = async (consult: string): Promise<GptResponse> => {

  const options = {
  method: 'POST',
  url: 'https://chatgpt-api8.p.rapidapi.com/',
  headers: {
    'x-rapidapi-key': '2804040300mshc3102b8dc03da60p1be9f9jsn411e08946b15',
    'x-rapidapi-host': 'chatgpt-api8.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  data: [
    {
      content: "Eres un experto en juegos de mesa y solo puedes responder consultas relacionadas con este tema",
      role: 'system'
    },
    {
      content: consult ,
      role: 'user'
    }
  ]
};

  try {
	const response: GptResponse = await axios.request(options);
	return response.data
} catch (error) {
	console.error(error);
}
}
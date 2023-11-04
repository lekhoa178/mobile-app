import { BASE_URL } from '../../appconfig';

class ApiService {
  async getAllSynset() {
    const response = await fetch(BASE_URL + '/dictionary/synset');
    const json = await response.json();

    return json;
  }
}

export default ApiService();

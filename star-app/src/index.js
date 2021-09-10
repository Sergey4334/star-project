class SwapiService {

  _apiBase = 'https://swapi.dev/api';

  async getResorce(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Responce Could not fetch ${url}` `,resivd ${res.status}`);
    }

    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResorce(`/people`);
    return res.results;
  }

  getPerson(id) {
    return this.getResorce(`/people/${id}`);
  }

  async getAllPlanets() {
    const res = await this.getResorce(`/planets`);
    return res.results;
  }

  getPlanets(id) {
    return this.getResorce(`/planets/${id}`);
  }

  async getAllStarShips() {
    const res = await this.getResorce(`/starships`);
    return res.results;
  }

  getStarship(id) {
    return this.getResorce(`/starships/${id}`);
  }
};

const swapi = new SwapiService();

swapi.getAllPlanets().then((s) => {
  console.log(s);
});

export function orderAZ(films) {
  let showFilms = films;
  let aZ = films.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    return -1;
  });
  showFilms = aZ;
  return showFilms;
}

export function orderZA(films) {
  let showFilms = films;
  let zA = films.sort((a, b) => {
    if (a.title < b.title) {
      return 1;
    }
    return -1;
  });
  showFilms = zA;
  return showFilms;
}

export function orderAntigua(films) {
  let showFilms = films;
  let antigua = films.sort((a, b) => {
    if (a.release_date < b.release_date) {
      return -1;
    }
    return 1;
  });
  showFilms = antigua;
  return showFilms;
}

export function orderReciente(films) {
  let showFilms = films;
  let reciente = films.sort((a, b) => {
    if (a.release_date < b.release_date) {
      return 1;
    }
    return -1;
  });
  showFilms = reciente;
  return showFilms;
}

export function newArrayPeople(films) {
  let peoplelist = [];
  for (let i = 0; i < films.length; i++) {
    for (let j = 0; j < films[i].people.length; j++) {
      let variable = {
        id: `${films[i].people[j].id}`,
        name: `${films[i].people[j].name}`,
        img: `${films[i].people[j].img}`,
        age: `${films[i].people[j].age}`,
        gender: `${films[i].people[j].gender}`,
        hair_color: `${films[i].people[j].hair_color}`,
        specie: `${films[i].people[j].specie}`,
        eye_color: `${films[i].people[j].eye_color}`,
      };
      peoplelist.push(variable);
    }
  }
  return peoplelist;
}

export function peopleforMovie(films, id) {
  let peoplelist = [];
  for (let i = 0; i < films.length; i++) {
    if (films[i].id == id) {
      for (let j = 0; j < films[i].people.length; j++) {
        let variable = {
          id: `${films[i].people[j].id}`,
          name: `${films[i].people[j].name}`,
          img: `${films[i].people[j].img}`,
          age: `${films[i].people[j].age}`,
          gender: `${films[i].people[j].gender}`,
          hair_color: `${films[i].people[j].hair_color}`,
          specie: `${films[i].people[j].specie}`,
          eye_color: `${films[i].people[j].eye_color}`,
        };
        peoplelist.push(variable);
      }
    }
  }
  return peoplelist;
}

export function SearchDirector(directores, name) {
  let newDirector = [];
  for (let i = 0; i < directores.length; i++) {
    if (directores[i].name == name) {
      let arrayDirect = {
        id: `${directores[i].id}`,
        name: `${directores[i].name}`,
        description: `${directores[i].description}`,
        img: `${directores[i].img}`,
      };
      newDirector.push(arrayDirect);
    }
  }
  return newDirector;
}

export function filterBySpecie(people, valueFilter) {
  const peopleSpecie = people.filter((x) => x.specie === valueFilter);
  return peopleSpecie;
}

export function filterByGender(people, valueFilter) {
  const peopleGender = people.filter((y) => y.gender === valueFilter);
  return peopleGender;
}

export function relatedDirector(films, director) {
  let newDirector = [];
  for (let i = 0; i < films.length; i++) {
    if (films[i].director === director) {
      let arrayDirect = films[i];
      newDirector.push(arrayDirect);
    }
  }
  return newDirector;
}

export function locations(films) {
  const locations = films.map((x) => x.locations);
  const totalLocations = locations.reduce((x, y) => x.concat(y), []);
  return totalLocations;
}

export function vehicles(films) {
  const vehicles = films.map((x) => x.vehicles);
  const totalVehicles = vehicles.reduce((x, y) => x.concat(y), []);
  return totalVehicles;
}

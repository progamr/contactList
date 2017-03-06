var api = {
  getRovers() {
    var url = 'https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=g3t8iO5AJUigYRxENGLNxDumkwBQG5G5ARzUz3fL';
    return fetch(url).then((res) => res.json());
  }
}

module.exports = api;

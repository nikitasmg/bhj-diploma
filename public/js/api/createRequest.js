/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
<<<<<<< HEAD
const createRequest = (options = {}) => {

=======
const createRequest = async (options = {}) => {
  const { url, method, data, callback } = options;

  try {
    if (method === 'GET') {
      let sholdAddToUrl = '';
      for (key in data) {
        sholdAddToUrl += `${key}=${data[key]}&`;
      }
      const _baseUrl = url + '?' + sholdAddToUrl;
      const request = await fetch(_baseUrl, {
        method: method,
      });

      const response = await request.json();
      callback(response.error, response);
    } else {
      const dataForm = new FormData();
      for (key in data) {
        dataForm.append([key], options.data[key]);
      }

      const request = await fetch(url, {
        method: method,
        body: dataForm,
      });

      const response = await request.json();
      callback(response.error, response);
    }
  } catch (error) {
    console.log(error);
  }
>>>>>>> ef8dd36 (initial commit)
};

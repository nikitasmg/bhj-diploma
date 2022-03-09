/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = async (options = {}) => {
  const { url, method, data, callback } = options;

  let sholdAddToUrl = '';
  for (key in data) {
    sholdAddToUrl += `${key}=${data[key]}&`;
  }
  const _baseUrl = url + '?' + sholdAddToUrl;
  const dataForm = new FormData();
  for (key in data) {
    dataForm.append([key], options.data[key]);
  }

  try {
    if (method === 'GET') {
      const request = await fetch(_baseUrl, {
        method: method,
      });

      const response = await request.json();
      callback(response.error, response);
    } else {
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
};

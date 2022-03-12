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
  let response, request;
  for (key in data) {
    dataForm.append(key, options.data[key]);
  }

  try {
    if (method === 'GET') {
      request = await fetch(_baseUrl, {
        method: method,
      });
    } else {
      request = await fetch(url, {
        method: method,
        body: dataForm,
      });
    }
    response = await request.json();
    callback(response.error, response);
  } catch (error) {
    callback(error);
  }
};

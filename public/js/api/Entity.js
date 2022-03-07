/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * */
class Entity {
  /**
   * Запрашивает с сервера список данных.
   * Это могут быть счета или доходы/расходы
   * (в зависимости от того, что наследуется от Entity)
   * */
  static list(url, data, callback) {
    createRequest({
      url: url,
      method: 'GET',
      data,
      callback: (err, response) => {
        if (response && response.success) {
          callback(response);
        } else {
          console.log(err);
        }
      },
    });
  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create(url, data, callback) {
    createRequest({
      url: url,
      method: 'PUT',
      data: data,
      callback: (err, response) => {
        if (response && response.success) {
          callback();
        } else {
          console.log(err);
        }
      },
    });
  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove(url, data, callback) {
    createRequest({
      url: url,
      method: 'DELETE',
      data: data,
      callback: (err, response) => {
        if (response && response.success) {
          callback();
        } else {
          console.log(err);
        }
      },
    });
  }
}

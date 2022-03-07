/**
 * Класс Account наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/account'
 * */
class Account extends Entity {
  /**
   * Получает информацию о счёте
   * */
<<<<<<< HEAD
  static get(id = '', callback){

=======
  static get(id, callback) {
    createRequest({
      url: '/account/' + id,
      method: 'GET',
      callback: (err, response) => {
        if (response && response.success) {
          callback(response.data);
        } else {
          console.log(err);
        }
      },
    });
>>>>>>> ef8dd36 (initial commit)
  }
}

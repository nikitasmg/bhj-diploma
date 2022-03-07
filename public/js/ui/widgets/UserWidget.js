/**
 * Класс UserWidget отвечает за
 * отображение информации о имени пользователя
 * после авторизации или его выхода из системы
 * */

class UserWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
<<<<<<< HEAD
  constructor(element){

=======
  constructor(element) {
    if (!element) {
      throw new Error('element is not defined');
    }
    this.element = element;
>>>>>>> ef8dd36 (initial commit)
  }

  /**
   * Получает информацию о текущем пользователе
   * с помощью User.current()
   * Если пользователь авторизован,
   * в элемент .user-name устанавливает имя
   * авторизованного пользователя
   * */
<<<<<<< HEAD
  update(){

=======
  update() {
    const user = User.current();
    const { name } = JSON.parse(user);
    const userName = document.querySelector('.user-name');

    userName.textContent = name;
>>>>>>> ef8dd36 (initial commit)
  }
}

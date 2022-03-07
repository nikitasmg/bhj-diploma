/**
 * Класс AccountsWidget управляет блоком
 * отображения счетов в боковой колонке
 * */

class AccountsWidget {
  /**
   * Устанавливает текущий элемент в свойство element
   * Регистрирует обработчики событий с помощью
   * AccountsWidget.registerEvents()
   * Вызывает AccountsWidget.update() для получения
   * списка счетов и последующего отображения
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
<<<<<<< HEAD
  constructor( element ) {

=======
  constructor(element) {
    if (!element) {
      throw new Error('element is not defined');
    }
    this.element = element;
    this.registerEvents(element);
    this.update();
>>>>>>> ef8dd36 (initial commit)
  }

  /**
   * При нажатии на .create-account открывает окно
   * #modal-new-account для создания нового счёта
   * При нажатии на один из существующих счетов
   * (которые отображены в боковой колонке),
   * вызывает AccountsWidget.onSelectAccount()
   * */
<<<<<<< HEAD
  registerEvents() {

=======
  registerEvents(element) {
    const accountModal = App.getModal('createAccount');
    element.addEventListener('click', (e) => {
      const target = e.target;
      if (target.classList.contains('create-account')) {
        accountModal.open();
      }
      if (target.closest('li')) {
        this.onSelectAccount(target.closest('li'));
      }
    });
>>>>>>> ef8dd36 (initial commit)
  }

  /**
   * Метод доступен только авторизованным пользователям
   * (User.current()).
   * Если пользователь авторизован, необходимо
   * получить список счетов через Account.list(). При
   * успешном ответе необходимо очистить список ранее
   * отображённых счетов через AccountsWidget.clear().
   * Отображает список полученных счетов с помощью
   * метода renderItem()
   * */
  update() {
<<<<<<< HEAD

=======
    const user = User.current();
    if (user) {
      Account.list('/account', null, (response) => {
        this.clear();
        this.renderItem(response.data);
      });
    }
>>>>>>> ef8dd36 (initial commit)
  }

  /**
   * Очищает список ранее отображённых счетов.
   * Для этого необходимо удалять все элементы .account
   * в боковой колонке
   * */
  clear() {
<<<<<<< HEAD

=======
    const elements = document.querySelectorAll('.account');
    elements.forEach((el) => {
      el.remove();
    });
>>>>>>> ef8dd36 (initial commit)
  }

  /**
   * Срабатывает в момент выбора счёта
   * Устанавливает текущему выбранному элементу счёта
   * класс .active. Удаляет ранее выбранному элементу
   * счёта класс .active.
   * Вызывает App.showPage( 'transactions', { account_id: id_счёта });
   * */
<<<<<<< HEAD
  onSelectAccount( element ) {

  }

=======
  onSelectAccount(element) {
    const elements = document.querySelectorAll('.account');
    elements.forEach((el) => {
      el.classList.remove('active');
    });
    element.classList.add('active');
    const id = element.getAttribute('data-id');
    App.clear();
    App.showPage('transactions', { account_id: id });
  }

  formateNumber(data) {
    const int = String(Math.trunc(data));
    if (int.length <= 3) return int;
    let space = 0;
    let number = '';

    for (let i = int.length - 1; i >= 0; i--) {
      if (space == 3) {
        number = ',' + number;
        space = 0;
      }
      number = int.charAt(i) + number;
      space++;
    }

    return number;
  }
>>>>>>> ef8dd36 (initial commit)
  /**
   * Возвращает HTML-код счёта для последующего
   * отображения в боковой колонке.
   * item - объект с данными о счёте
   * */
<<<<<<< HEAD
  getAccountHTML(item){

=======
  getAccountHTML(item) {
    const { id, name, sum } = item;
    const localeSum = this.formateNumber(sum);
    return `<li class="account" data-id="${id}">
    <a href="#">
        <span>${name}</span> /
        <span>${localeSum} ₽</span>
    </a>
</li>`;
>>>>>>> ef8dd36 (initial commit)
  }

  /**
   * Получает массив с информацией о счетах.
   * Отображает полученный с помощью метода
   * AccountsWidget.getAccountHTML HTML-код элемента
   * и добавляет его внутрь элемента виджета
   * */
<<<<<<< HEAD
  renderItem(data){

=======
  renderItem(data) {
    let items = '';
    data.map((el) => {
      items += this.getAccountHTML(el);
    });
    this.element.insertAdjacentHTML('beforeend', items);
>>>>>>> ef8dd36 (initial commit)
  }
}

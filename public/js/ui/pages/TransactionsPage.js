/**
 * Класс TransactionsPage управляет
 * страницей отображения доходов и
 * расходов конкретного счёта
 * */
class TransactionsPage {
  /**
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * Сохраняет переданный элемент и регистрирует события
   * через registerEvents()
   * */
  constructor(element) {
    if (!element) {
      throw new Error('element is not defined');
    }
    this.element = element;
    this.registerEvents();
    this.title = document.querySelector('.content-title');
    this.lastOptions = {account_id:null}
  }


  /**
   * Вызывает метод render для отрисовки страницы
   * */
  update() {
    if(this.lastOptions.account_id) {
      this.render(this.lastOptions);
    }
   
  }

  /**
   * Отслеживает нажатие на кнопку удаления транзакции
   * и удаления самого счёта. Внутри обработчика пользуйтесь
   * методами TransactionsPage.removeTransaction и
   * TransactionsPage.removeAccount соответственно
   * */
  registerEvents() {
    this.element.addEventListener('click', (e) => {
      const target = e.target;
      if (target.classList.contains('remove-account')) {
        this.removeAccount();
      }
      if (target.closest('.transaction__remove')) {
        this.removeTransaction(target.getAttribute('data-id'));
      }
    });
  }

  /**
   * Удаляет счёт. Необходимо показать диаголовое окно (с помощью confirm())
   * Если пользователь согласен удалить счёт, вызовите
   * Account.remove, а также TransactionsPage.clear с
   * пустыми данными для того, чтобы очистить страницу.
   * По успешному удалению необходимо вызвать метод App.updateWidgets() и App.updateForms(),
   * либо обновляйте только виджет со счетами и формы создания дохода и расхода
   * для обновления приложения
   * */
  removeAccount() {
    const result = confirm('Действительно удалить?');
    const needToDelete = document.querySelector('.account.active');

    if (result) {
      Account.remove(
        { id: needToDelete.getAttribute('data-id') },
        (err, response) => {
          this.clear();
          if (response.success) {
            App.updateWidgets();
            App.updateForms();
          }
        }
      );
    }
  }

  /**
   * Удаляет транзакцию (доход или расход). Требует
   * подтверждеия действия (с помощью confirm()).
   * По удалению транзакции вызовите метод App.update(),
   * либо обновляйте текущую страницу (метод update) и виджет со счетами
   * */
  removeTransaction(id) {
    const result = confirm('Действительно удалить?');
    if (result) {
      Transaction.remove({ id: id }, () => {
        App.update()
      });
    }
  }

  /**
   * С помощью Account.get() получает название счёта и отображает
   * его через TransactionsPage.renderTitle.
   * Получает список Transaction.list и полученные данные передаёт
   * в TransactionsPage.renderTransactions()
   * */
  render(options) {
    if(options) {
      this.lastOptions.account_id = options.account_id
      Account.get(options.account_id, (err, response) => {
        this.renderTitle(response.data.name);
      });
      Transaction.list(options, (err, response) => {
        this.renderTransactions(response.data);
      });
    }
  }

  /**
   * Очищает страницу. Вызывает
   * TransactionsPage.renderTransactions() с пустым массивом.
   * Устанавливает заголовок: «Название счёта»
   * */
  clear() {
    this.renderTransactions([]);
    this.title.textContent = 'Название счёта';
  }

  /**
   * Устанавливает заголовок в элемент .content-title
   * */
  renderTitle(name) {
    this.title.textContent = name;
  }

  /**
   * Форматирует дату в формате 2019-03-10 03:20:41 (строка)
   * в формат «10 марта 2019 г. в 03:20»
   * */
  formatDate(date) {
    const months = [
      'Января',
      'Февраля',
      'Марта',
      'Апреля',
      'Мая',
      'Июня',
      'Июля',
      'Августа',
      'Сентября',
      'Октября',
      'Ноября',
      'Декабря',
    ];

    const myDate = new Date(date);
    const fullDate =
      myDate.getDate() +
      ' ' +
      months[myDate.getMonth()] +
      ' ' +
      myDate.getFullYear() +
      ' в ' +
      myDate.getHours() +
      ':' +
      myDate.getMinutes();

    return fullDate;
  }

  /**
   * Формирует HTML-код транзакции (дохода или расхода).
   * item - объект с информацией о транзакции
   * */
  getTransactionHTML(item) {
    const { id, sum, type, created_at, name } = item;

    const formattedDate = this.formatDate(created_at);

    return `<div class="transaction transaction_${type} row">
    <div class="col-md-7 transaction__details">
      <div class="transaction__icon">
          <span class="fa fa-money fa-2x"></span>
      </div>
      <div class="transaction__info">
          <h4 class="transaction__title">${name}</h4>
          <!-- дата -->
          <div class="transaction__date">${formattedDate}</div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="transaction__summ">
      <!--  сумма -->
          ${sum} <span class="currency">₽</span>
      </div>
    </div>
    <div class="col-md-2 transaction__controls">
        <!-- в data-id нужно поместить id -->
        <button class="btn btn-danger transaction__remove" data-id="${id}">
            <i class="fa fa-trash"></i>  
        </button>
    </div>
</div>`;
  }

  /**
   * Отрисовывает список транзакций на странице
   * используя getTransactionHTML
   * */
  renderTransactions(data) {
    const content = document.querySelector('.content');
    let result = '';
    data.forEach((element) => {
      result += this.getTransactionHTML(element);
    });
    content.innerHTML = result;
  }
}

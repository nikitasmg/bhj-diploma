/**
 * Класс CreateTransactionForm управляет формой
 * создания новой транзакции
 * */
class CreateTransactionForm extends AsyncForm {
  /**
   * Вызывает родительский конструктор и
   * метод renderAccountsList
   * */
  constructor(element) {
    super(element);
    this.renderAccountsList();
  }

  /**
   * Получает список счетов с помощью Account.list
   * Обновляет в форме всплывающего окна выпадающий список
   * */
  renderAccountsList() {
    const accountSelect = this.element.querySelector('.accounts-select');
    Account.list(null, (err, response) => {
      let result = '';
      response.data.forEach((element) => {
        result += `<option value="${element.id}">${element.name}</option>`;
      });
      accountSelect.innerHTML = result;
    });
  }

  /**
   * Создаёт новую транзакцию (доход или расход)
   * с помощью Transaction.create. По успешному результату
   * вызывает App.update(), сбрасывает форму и закрывает окно,
   * в котором находится форма
   * */
  onSubmit(data) {
    const { name, sum, account_id } = data;
    let type = 'income';
    let currentModal = this.element.closest('.modal').dataset.modalId
    const modal = App.getModal(currentModal)
   
    if (this.element.id === 'new-expense-form') {
      type = 'expense';
    }
    Transaction.create(
      {
        type: type,
        name: name,
        sum: sum,
        account_id: account_id,
      },
      (err, response) => {
        if (response) {
          this.element.reset();
          modal.close();
          App.update();
        }
      }
    );
  }
}

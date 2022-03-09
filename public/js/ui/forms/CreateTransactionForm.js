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
    const accountSelect = this.element.querySelectorAll('.accounts-select');
    Account.list(null, (err, response) => {
      let result = '';
      response.data.forEach((element) => {
        result += `<option value="${element.id}">${element.name}</option>`;
      });
      accountSelect.forEach((el) => {
        el.innerHTML = result;
      });
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
    const incomeModal = App.getModal('newIncome');
    const expenseModal = App.getModal('newExpense');

    if (this.element.id === 'new-income-form') {
      Transaction.create(
        {
          type: 'income',
          name: name,
          sum: sum,
          account_id: account_id,
        },
        (err, response) => {
          if (response.success) {
            this.element.reset();
            incomeModal.close();
            App.update();
          }
        }
      );
    } else {
      Transaction.create(
        {
          type: 'expense',
          name: name,
          sum: sum,
          account_id: account_id,
        },
        (err, response) => {
          if (response.success) {
            this.element.reset();
            incomeModal.close();
            App.update();
          }
        }
      );
    }
  }
}

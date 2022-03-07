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
<<<<<<< HEAD
    super(element)
=======
    super(element);
    this.renderAccountsList();
>>>>>>> ef8dd36 (initial commit)
  }

  /**
   * Получает список счетов с помощью Account.list
   * Обновляет в форме всплывающего окна выпадающий список
   * */
  renderAccountsList() {
<<<<<<< HEAD

=======
    const accountSelect = document.querySelectorAll('.accounts-select');
    Account.list('/account', null, (response) => {
      let result = '';
      response.data.forEach((element) => {
        result += `<option value="${element.id}">${element.name}</option>`;
      });
      accountSelect.forEach((el) => {
        el.innerHTML = result;
      });
    });
>>>>>>> ef8dd36 (initial commit)
  }

  /**
   * Создаёт новую транзакцию (доход или расход)
   * с помощью Transaction.create. По успешному результату
   * вызывает App.update(), сбрасывает форму и закрывает окно,
   * в котором находится форма
   * */
  onSubmit(data) {
<<<<<<< HEAD

  }
}
=======
    const { name, sum, account_id } = data;
    const incomeModal = App.getModal('newIncome');
    const expenseModal = App.getModal('newExpense');

    if (this.element.id === 'new-income-form') {
      Transaction.create(
        '/transaction',
        {
          type: 'income',
          name: name,
          sum: sum,
          account_id: account_id,
        },
        () => {
          App.updateWidgets();
          App.updatePages();
          App.updateForms();
          incomeModal.close();
          this.element[0].value = '';
          this.element[1].value = '';
        }
      );
    } else {
      Transaction.create(
        '/transaction',
        {
          type: 'expense',
          name: name,
          sum: sum,
          account_id: account_id,
        },
        () => {
          App.update();
          expenseModal.close();
          this.element[0].value = '';
          this.element[1].value = '';
        }
      );
    }
  }
}
>>>>>>> ef8dd36 (initial commit)

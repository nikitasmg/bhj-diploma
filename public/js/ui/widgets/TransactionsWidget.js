/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor(element) {
    if (!element) {
      throw new Error('element is not defined');
    }
    this.element = element;
    this.registerEvents();
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    const incomeModal = App.getModal('newIncome');
    const expenseModal = App.getModal('newExpense');

    this.element.addEventListener('click', (e) => {
      const target = e.target;
      const income = 'create-income-button';
      if (target.classList.contains(income)) {
        incomeModal.open();
      } else {
        expenseModal.open();
      }
    });
  }
}

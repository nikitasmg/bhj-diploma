/**
 * Класс CreateAccountForm управляет формой
 * создания нового счёта
 * */
class CreateAccountForm extends AsyncForm {
  /**
   * Создаёт счёт с помощью Account.create и закрывает
   * окно в случае успеха, а также вызывает App.update()
   * и сбрасывает форму
   * */
  onSubmit(data) {
    const accountModal = App.getModal('createAccount');
    Account.create(data, (err, response) => {
      if (response.success) {
        this.element.reset();
        accountModal.close();
        App.update();
      }
    });
  }
}

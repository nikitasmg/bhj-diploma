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
<<<<<<< HEAD

  }
}
=======
    const accountModal = App.getModal('createAccount');
    Account.create('/account', data, () => {
      this.element[0].value = '';
      accountModal.close();
      App.update();
    });
  }
}
>>>>>>> ef8dd36 (initial commit)

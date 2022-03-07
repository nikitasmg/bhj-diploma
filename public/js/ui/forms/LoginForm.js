/**
 * Класс LoginForm управляет формой
 * входа в портал
 * */
class LoginForm extends AsyncForm {
  /**
   * Производит авторизацию с помощью User.login
   * После успешной авторизации, сбрасывает форму,
   * устанавливает состояние App.setState( 'user-logged' ) и
   * закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
<<<<<<< HEAD

  }
}
=======
    const loginModal = App.getModal('login');
    User.login(data, () => {
      App.setState('user-logged');
      loginModal.close();
    });

    this.element[0].value = '';
    this.element[1].value = '';
  }
}
>>>>>>> ef8dd36 (initial commit)

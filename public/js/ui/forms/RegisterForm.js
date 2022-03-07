/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
<<<<<<< HEAD

  }
}
=======
    const loginRegister = App.getModal('register');
    User.register(data, () => {
      App.setState('user-logged');
      loginRegister.close();
    });
  }
}
>>>>>>> ef8dd36 (initial commit)

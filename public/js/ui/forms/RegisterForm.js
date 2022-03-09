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
    const loginRegister = App.getModal('register');
    User.register(data, () => {
      loginRegister.close();
      App.setState('user-logged');
    });
    this.element.reset();
  }
}

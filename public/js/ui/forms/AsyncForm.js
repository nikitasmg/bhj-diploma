/**
 * Класс AsyncForm управляет всеми формами
 * приложения, которые не должны быть отправлены с
 * перезагрузкой страницы. Вместо этого данные
 * с таких форм собираются и передаются в метод onSubmit
 * для последующей обработки
 * */
class AsyncForm {
  /**
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * Сохраняет переданный элемент и регистрирует события
   * через registerEvents()
   * */
  constructor(element) {
<<<<<<< HEAD

=======
    if (!element) {
      throw new Error();
    }
    this.element = element;
    this.registerEvents();
>>>>>>> ef8dd36 (initial commit)
  }

  /**
   * Необходимо запретить отправку формы и в момент отправки
   * вызывает метод submit()
   * */
  registerEvents() {
<<<<<<< HEAD

=======
    // const submitButton = document.querySelector();
    this.element.addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.target;
      if (target.getAttribute('form') === this.element.id) {
        this.submit(this.element);
      }
    });
>>>>>>> ef8dd36 (initial commit)
  }

  /**
   * Преобразует данные формы в объект вида
   * {
   *  'название поля формы 1': 'значение поля формы 1',
   *  'название поля формы 2': 'значение поля формы 2'
   * }
   * */
  getData() {
<<<<<<< HEAD

  }

  onSubmit(options){

  }
=======
    const returnForm = {};
    const form = this.element;

    for (let i = 0; i < form.length; i++) {
      if (form[i]['name']) {
        returnForm[form[i]['name']] = form[i]['value'];
      }
    }
    return returnForm;
  }

  onSubmit(options) {}
>>>>>>> ef8dd36 (initial commit)

  /**
   * Вызывает метод onSubmit и передаёт туда
   * данные, полученные из метода getData()
   * */
  submit() {
<<<<<<< HEAD

  }
}
=======
    this.onSubmit(this.getData());
  }
}
>>>>>>> ef8dd36 (initial commit)

/**
 * Класс Modal отвечает за
 * управление всплывающими окнами.
 * В первую очередь это открытие или
 * закрытие имеющихся окон
 * */
class Modal {
  /**
   * Устанавливает текущий элемент в свойство element
   * Регистрирует обработчики событий с помощью Modal.registerEvents()
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
<<<<<<< HEAD
  constructor(element){

=======
  constructor(element) {
    if (!element) {
      throw new Error();
    }
    this.element = element;
    this.registerEvents();
>>>>>>> ef8dd36 (initial commit)
  }

  /**
   * При нажатии на элемент с data-dismiss="modal"
   * должен закрыть текущее окно
   * (с помощью метода Modal.onClose)
   * */
  registerEvents() {
<<<<<<< HEAD

=======
    this.element.addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.target;

      if (target.getAttribute('data-dismiss') === 'modal') {
        this.onClose(this.element);
      }
    });
>>>>>>> ef8dd36 (initial commit)
  }

  /**
   * Срабатывает после нажатия на элементы, закрывающие окно.
   * Закрывает текущее окно (Modal.close())
   * */
  onClose(e) {
<<<<<<< HEAD

=======
    this.close(e);
>>>>>>> ef8dd36 (initial commit)
  }
  /**
   * Открывает окно: устанавливает CSS-свойство display
   * со значением «block»
   * */
  open() {
<<<<<<< HEAD

=======
    this.element.style.display = 'block';
>>>>>>> ef8dd36 (initial commit)
  }
  /**
   * Закрывает окно: удаляет CSS-свойство display
   * */
<<<<<<< HEAD
  close(){

  }
}
=======
  close() {
    this.element.style.display = '';
  }
}
>>>>>>> ef8dd36 (initial commit)

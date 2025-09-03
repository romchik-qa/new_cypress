import * as main_page from "../locators/main_page.json"
import * as recovery_password_page from "../locators/recovery_password_page.json"
import * as result_page from "../locators/result_page.json"
import * as data from "../helpers/default_data.json"

describe('Тесты для страницы авторизации login.qa.studio', () => {  // Группа тестов
  
  beforeEach(() => {                                            // Выполняется перед каждым тестом
    cy.visit('https://login.qa.studio/');                                              // Открываем сайт
  });

  afterEach('Конец теста', function () {                        // выполняется после каждого теста
    cy.get(result_page.close).should('be.visible');             // Проверяется
  });


  it('Проверка на позитивный кейс авторизации', function () {   
        cy.get(main_page.email).type(data.login);               // Вводим верный email
        cy.get(main_page.password).type(data.password);         // Вводим верный пароль
        cy.get(main_page.login_button).click();                 // Жмём кнопку "Войти"
        cy.get(result_page.title)                               // Ищем элемент с сообщением
        .should('be.visible')                                   // Проверяем, что он виден
        .contains('Авторизация прошла успешно');                // Проверяем, что текст совпадает
    })
  
  it('Проверка логики восстановления пароля', function () {     
        cy.get(main_page.fogot_pass_btn).click();               // Жмем на кнопку "Восстановление пароля"
        cy.get(recovery_password_page.email).type(data.login);  // Вводим почту
        cy.get(recovery_password_page.send_button).click();     // Жмём кнопку "Отправить код"
        cy.get(result_page.title)                               // Ищем элемент с сообщением
        .should('be.visible')                                   // Проверяем, что он виден
        .contains('Успешно отправили пароль на e-mail');        // Проверяем, что текст совпадает
    })

  it('Проверка на негативный кейс авторизации', function () {  
        cy.get(main_page.email).type(data.login);               // Вводим верный email
        cy.get(main_page.password).type('qa_one_love2');        // Вводим неверный пароль
        cy.get(main_page.login_button).click();                 // Жмём кнопку "Войти"
        cy.get(result_page.title)                               // Ищем элемент с сообщением
        .should('be.visible')                                   // Проверяем, что он виден
        .contains('Такого логина или пароля нет');              // Проверяем, что текст совпадает
    })

  it('Проверка на негативный кейс авторизации', function () {  
        cy.get(main_page.email).type('german2@dolnikov.ru');    // Вводим неверный email
        cy.get(main_page.password).type(main_page.password);    // Вводим верный пароль
        cy.get(main_page.login_button).click();                 // Жмём кнопку "Войти"
        cy.get(result_page.title)                               // Ищем элемент с сообщением
        .should('be.visible')                                   // Проверяем, что он виден
        .contains('Такого логина или пароля нет');              // Проверяем, что текст совпадает
    })
  it('Проверка на негативный кейс авторизации: логин без @', function () {  
        cy.get(main_page.email).type('germandolnikov.ru');      // Вводим верный email без @
        cy.get(main_page.password).type(main_page.password);    // Вводим верный пароль
        cy.get(main_page.login_button).click();                 // Жмём кнопку "Войти"
        cy.get(result_page.title)                               // Ищем элемент с сообщением
        .should('be.visible')                                   // Проверяем, что он виден
        .contains('Нужно исправить проблему валидации');        // Проверяем, что текст совпадает
    })

  it('Проверка на приведение к строчным буквам в логине:', function () {  
        cy.get(main_page.email).type('GerMan@Dolnikov.ru');     // Вводим верный email, но в разном регистре
        cy.get(main_page.password).type(main_page.password);    // Вводим верный пароль
        cy.get(main_page.login_button).click();                 // Жмём кнопку "Войти"
        cy.get(result_page.title)                               // Ищем элемент с сообщением
        .should('be.visible')                                   // Проверяем, что он виден
        .contains('Авторизация прошла успешно');                // Проверяем, что текст совпадает
    })




});

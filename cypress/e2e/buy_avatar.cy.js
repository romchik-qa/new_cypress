import * as data from "../helpers/default_data_pokemon.json"

describe('Сквозной e2e автотест для покемонов: на покупку нового аватара для своего тренера', () => { 
  
  it('Покупка нового аватара для своего тренера', function () { 
        cy.visit('https://pokemonbattle.ru/login');                                         // открываем страницу сайта

        cy.get('#k_email').should('not.be.disabled').type(data.login);                      // вводим логин
        cy.get('#k_password').type(data.password);                                          // вводим пароль
        cy.get('.MuiButton-root').click();                                                  // нажимаем кнопку "Войти"
        cy.wait(2000);                                                                      // ждём 2 секунды для загрузки страницы
        cy.get('.header_card_trainer').click();                                             // кликаем на карточку тренера
        cy.wait(2000);                                                                      // ждём 2 секунды
        cy.get('[data-qa="shop"]').click();                                                 // переходим в магазин
        cy.wait(2000);                                                                      // ждём 2 секунды
        cy.get(':nth-child(2) > .shop__button').click();                                    // выбираем аватар 2
        cy.wait(2000);                                                                      // ждём 2 секунды
        cy.get('.card_number').type('4111111111111111');                                    // вводим номер карты
        cy.get('.card_csv').type('125');                                                    // вводим CVV карты
        cy.get('.card_date').type('1025');                                                  // вводим срок действия карты
        cy.get('.card_name').type('NAME');                                                  // вводим имя владельца карты
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // нажимаем кнопку "Оплатить"
        cy.get('.threeds_number').type('56456');                                            // вводим код подтверждения СМС
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // подтверждаем оплату
        cy.contains('Покупка прошла успешно').should('be.visible');                         // проверяем сообщение об успешной покупке
        cy.get('.style_1_base_link_blue').click();                                          // возвращаемся в магазин
        cy.wait(2000);                                                                      // ждём 2 секунды
        cy.get(':nth-child(3) > .shop__button').click();                                    // покупаем свой любимый аватар :)
        cy.wait(2000);                                                                      // ждём 2 секунды
        cy.get('.card_number').type('4111111111111111');                                    // вводим номер карты
        cy.get('.card_csv').type('125');                                                    // вводим CVV карты
        cy.get('.card_date').type('1025');                                                  // вводим срок действия карты
        cy.get('.card_name').type('NAME');                                                  // вводим имя владельца карты
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // нажимаем кнопку "Оплатить"
        cy.get('.threeds_number').type('56456');                                            // вводим код подтверждения СМС
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // подтверждаем оплату
        cy.contains('Покупка прошла успешно').should('be.visible');                         // проверяем сообщение об успешной покупке
        cy.get('.style_1_base_link_blue').click();                                          // возвращаемся в магазин
  })

});

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!****************************************!*\
  !*** ./cypress/e2e/UserCreation.cy.js ***!
  \****************************************/


describe('template first', () => {
  it('passes', () => {
    cy.visit('https://invo.dev.teleteachers.us/portal/login.cypress.io');
    cy.wait(5000);
    cy.get('input[name=username]').type("madhulatha+invo@ensarsolutions.com");
    cy.get('input[name=password]').type("Tele@123");
    cy.get('button[type=submit]').click();
    cy.wait(5000);
    cy.get('.ant-menu-submenu-title').invoke('attr', 'style', 'visibility: visible;');
    cy.get('.ant-menu-submenu-title').click({
      force: true
    });
    cy.get('a[href="/portal/setup/users"]').click({
      force: true
    });
    cy.get('button[type="button"] span:nth-child(2)').click();
    cy.get('input[placeholder="First Name"]').type('MadhuLatha');
    cy.get('input[placeholder="Last Name"]').type('Admin');
    cy.get('input[placeholder="Email Address"]').type('madhulatha+invo+2@ensarsolutions.com');
    cy.wait(5000);
    cy.get('#rc_select_6').click({
      force: true
    });
    cy.get('div[title="Organization Admin"] div[class="ant-select-item-option-content"]').click();
    cy.wait(5000);
    cy.get('#rc_select_7').click({
      force: true
    });
    cy.get('div[title="Invo Organization Admin"] div[class="ant-select-item-option-content"]').click();
    cy.get('div[name="customerId"] div[class="ant-select-selection-overflow"]').click();
    cy.get('div[title="A2 IMPACT Program 1"] div[class="ant-select-item-option-content"]').click();
    cy.wait(5000);
    //cy.get('div[name="locationId"] div[class="ant-select-selection-overflow"]').click();
    //cy.get('div[class="ant-select-dropdown ant-select-dropdown-hidden css-ibennm ant-select-dropdown-placement-bottomLeft"] div div[class="rc-virtual-list"] div[class="rc-virtual-list-holder"] div div[title="All"] div[class="ant-select-item-option-content"]').click();
    cy.wait(5000);
    cy.get('div[name="locationId"] div[class="ant-select-selection-overflow"]').click().then(() => {
      cy.get('div.ant-select-dropdown div.rc-virtual-list-holder div[title="All"] div[class="ant-select-item-option-content"]').click();
    });
    cy.get('button[class="ant-btn css-ibennm ant-btn-primary"]').scrollIntoView().should('be.visible').click();
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NUcsQ0FBQyxDQUFDO0FBQ0YsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jeXByZXNzYXV0b21hdGlvbi8uL2N5cHJlc3MvZTJlL1VzZXJDcmVhdGlvbi5jeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkZXNjcmliZSgndGVtcGxhdGUgZmlyc3QnLCAoKSA9PiB7XHJcbiAgICBpdCgncGFzc2VzJywgKCkgPT4ge1xyXG4gICAgICBjeS52aXNpdCgnaHR0cHM6Ly9pbnZvLmRldi50ZWxldGVhY2hlcnMudXMvcG9ydGFsL2xvZ2luLmN5cHJlc3MuaW8nKTtcclxuICAgICAgY3kud2FpdCg1MDAwKTtcclxuICAgICAgY3kuZ2V0KCdpbnB1dFtuYW1lPXVzZXJuYW1lXScpLnR5cGUoXCJtYWRodWxhdGhhK2ludm9AZW5zYXJzb2x1dGlvbnMuY29tXCIpO1xyXG4gICAgICBjeS5nZXQoJ2lucHV0W25hbWU9cGFzc3dvcmRdJykudHlwZShcIlRlbGVAMTIzXCIpO1xyXG4gICAgICBjeS5nZXQoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5jbGljaygpO1xyXG4gICAgICBjeS53YWl0KDUwMDApO1xyXG4gICAgICBjeS5nZXQoJy5hbnQtbWVudS1zdWJtZW51LXRpdGxlJykuaW52b2tlKCdhdHRyJywgJ3N0eWxlJywgJ3Zpc2liaWxpdHk6IHZpc2libGU7Jyk7XHJcblxyXG5cclxuY3kuZ2V0KCcuYW50LW1lbnUtc3VibWVudS10aXRsZScpLmNsaWNrKCB7Zm9yY2U6IHRydWV9KTtcclxuY3kuZ2V0KCdhW2hyZWY9XCIvcG9ydGFsL3NldHVwL3VzZXJzXCJdJykuY2xpY2soeyBmb3JjZTogdHJ1ZSB9KTtcclxuY3kuZ2V0KCdidXR0b25bdHlwZT1cImJ1dHRvblwiXSBzcGFuOm50aC1jaGlsZCgyKScpLmNsaWNrKCk7XHJcbmN5LmdldCgnaW5wdXRbcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCJdJykudHlwZSgnTWFkaHVMYXRoYScpO1xyXG5jeS5nZXQoJ2lucHV0W3BsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCJdJykudHlwZSgnQWRtaW4nKTtcclxuXHJcbmN5LmdldCgnaW5wdXRbcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCJdJykudHlwZSgnbWFkaHVsYXRoYStpbnZvKzJAZW5zYXJzb2x1dGlvbnMuY29tJyk7XHJcbmN5LndhaXQoNTAwMCk7XHJcbmN5LmdldCgnI3JjX3NlbGVjdF82JykuY2xpY2soe2ZvcmNlOiB0cnVlfSk7XHJcblxyXG5cclxuIGN5LmdldCgnZGl2W3RpdGxlPVwiT3JnYW5pemF0aW9uIEFkbWluXCJdIGRpdltjbGFzcz1cImFudC1zZWxlY3QtaXRlbS1vcHRpb24tY29udGVudFwiXScpLmNsaWNrKCk7XHJcbiBjeS53YWl0KDUwMDApO1xyXG4gY3kuZ2V0KCcjcmNfc2VsZWN0XzcnKS5jbGljayh7Zm9yY2U6IHRydWV9KTtcclxuIGN5LmdldCgnZGl2W3RpdGxlPVwiSW52byBPcmdhbml6YXRpb24gQWRtaW5cIl0gZGl2W2NsYXNzPVwiYW50LXNlbGVjdC1pdGVtLW9wdGlvbi1jb250ZW50XCJdJykuY2xpY2soKTtcclxuXHJcbmN5LmdldCgnZGl2W25hbWU9XCJjdXN0b21lcklkXCJdIGRpdltjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uLW92ZXJmbG93XCJdJykuY2xpY2soKTtcclxuY3kuZ2V0KCdkaXZbdGl0bGU9XCJBMiBJTVBBQ1QgUHJvZ3JhbSAxXCJdIGRpdltjbGFzcz1cImFudC1zZWxlY3QtaXRlbS1vcHRpb24tY29udGVudFwiXScpLmNsaWNrKCk7XHJcbmN5LndhaXQoNTAwMCk7XHJcbi8vY3kuZ2V0KCdkaXZbbmFtZT1cImxvY2F0aW9uSWRcIl0gZGl2W2NsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb24tb3ZlcmZsb3dcIl0nKS5jbGljaygpO1xyXG4vL2N5LmdldCgnZGl2W2NsYXNzPVwiYW50LXNlbGVjdC1kcm9wZG93biBhbnQtc2VsZWN0LWRyb3Bkb3duLWhpZGRlbiBjc3MtaWJlbm5tIGFudC1zZWxlY3QtZHJvcGRvd24tcGxhY2VtZW50LWJvdHRvbUxlZnRcIl0gZGl2IGRpdltjbGFzcz1cInJjLXZpcnR1YWwtbGlzdFwiXSBkaXZbY2xhc3M9XCJyYy12aXJ0dWFsLWxpc3QtaG9sZGVyXCJdIGRpdiBkaXZbdGl0bGU9XCJBbGxcIl0gZGl2W2NsYXNzPVwiYW50LXNlbGVjdC1pdGVtLW9wdGlvbi1jb250ZW50XCJdJykuY2xpY2soKTtcclxuY3kud2FpdCg1MDAwKTtcclxuY3kuZ2V0KCdkaXZbbmFtZT1cImxvY2F0aW9uSWRcIl0gZGl2W2NsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb24tb3ZlcmZsb3dcIl0nKS5jbGljaygpLnRoZW4oKCkgPT4ge1xyXG4gICAgY3kuZ2V0KCdkaXYuYW50LXNlbGVjdC1kcm9wZG93biBkaXYucmMtdmlydHVhbC1saXN0LWhvbGRlciBkaXZbdGl0bGU9XCJBbGxcIl0gZGl2W2NsYXNzPVwiYW50LXNlbGVjdC1pdGVtLW9wdGlvbi1jb250ZW50XCJdJykuY2xpY2soKTtcclxuICB9KTtcclxuICBjeS5nZXQoJ2J1dHRvbltjbGFzcz1cImFudC1idG4gY3NzLWliZW5ubSBhbnQtYnRuLXByaW1hcnlcIl0nKS5zY3JvbGxJbnRvVmlldygpLnNob3VsZCgnYmUudmlzaWJsZScpLmNsaWNrKCk7XHJcblxyXG5cclxuXHJcbiAgXHJcblxyXG5cclxuXHJcblxyXG4gICAgICBcclxuXHJcbiAgICAgIFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59KVxyXG59KSJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIml0IiwiY3kiLCJ2aXNpdCIsIndhaXQiLCJnZXQiLCJ0eXBlIiwiY2xpY2siLCJpbnZva2UiLCJmb3JjZSIsInRoZW4iLCJzY3JvbGxJbnRvVmlldyIsInNob3VsZCJdLCJzb3VyY2VSb290IjoiIn0=
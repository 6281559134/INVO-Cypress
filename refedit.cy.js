/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./cypress/e2e/refedit.cy.js ***!
  \***********************************/


describe('template first', () => {
  it('passes', () => {
    cy.visit('https://invo.dev.teleteachers.us/portal/login.cypress.io');
    cy.wait(5000);
    cy.get('input[name=username]').type("madhulatha+invo@ensarsolutions.com");
    cy.get('input[name=password]').type("Tele@123");
    cy.get('button[type=submit]').click();
    cy.wait(5000);
    cy.get('a[href="/portal/referral"]').click({
      force: true
    });
    //cy.xpath('//tbody/tr[2]/td[8]/ul[1]/li[3]/div[1]/span[1]//*[name()="svg"]').click();
    cy.wait(4000);
    //cy.get('svg').click();
    //cy.get('li.ant-menu-item.ant-menu-item-active span.ant-menu-title-content').click({ force: true });
    //cy.get('.svg').invoke('show').trigger('mouseover', { force: true }).click();

    // Assuming the iframe has a name or ID
    //cy.iframe('class="ant-menu-submenu-arrow"').find('ul[id="rc-menu-uuid-96374-3-rc-menu-more-popup"] li[title="Edit"]').click();
    cy.get('path:contains("M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z")').should('exist').click(); // Or perform other interactions

    // You can perform additional assertions or interactions with the SVG element here

    //cy.get('.svg').should('be.visible').trigger('mouseover', { force: true }).click();

    //cy.get('svg').click();

    cy.wait(3000);
    cy.get('#sq_134i').type("kjhgfd");
    cy.get('#sq_135i').type('lkjh');
    cy.wait(3000);
    cy.get('#sq_136i').type("kjhgfd@g.com");
    cy.get('#sq_137i').type("9876545678");
    cy.wait(5000);
    cy.get('#sq_138i').type("kjhoiuytrdfgh");
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmZWRpdC5jeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBQSxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsTUFBTTtFQUM3QkMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNO0lBQ2pCQyxFQUFFLENBQUNDLEtBQUssQ0FBQywwREFBMEQsQ0FBQztJQUNwRUQsRUFBRSxDQUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2JGLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUNDLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQztJQUN6RUosRUFBRSxDQUFDRyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMvQ0osRUFBRSxDQUFDRyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQ0UsS0FBSyxDQUFDLENBQUM7SUFDckNMLEVBQUUsQ0FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNiRixFQUFFLENBQUNHLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDRSxLQUFLLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQUssQ0FBQyxDQUFDO0lBQzNEO0lBQ0FOLEVBQUUsQ0FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNiO0lBQ0E7SUFDQTs7SUFFQTtJQUNBO0lBQ0FGLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLDZJQUE2SSxDQUFDLENBQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQ0YsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOztJQUVqTDs7SUFFRTs7SUFLQTs7SUFJQUwsRUFBRSxDQUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2JGLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2pDSixFQUFFLENBQUNHLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMvQkosRUFBRSxDQUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2JGLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQ3ZDSixFQUFFLENBQUNHLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUNyQ0osRUFBRSxDQUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2JGLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDQyxJQUFJLENBQUMsZUFBZSxDQUFDO0VBRTFDLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3lwcmVzc2F1dG9tYXRpb24vLi9jeXByZXNzL2UyZS9yZWZlZGl0LmN5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5kZXNjcmliZSgndGVtcGxhdGUgZmlyc3QnLCAoKSA9PiB7XHJcbiAgICBpdCgncGFzc2VzJywgKCkgPT4ge1xyXG4gICAgICBjeS52aXNpdCgnaHR0cHM6Ly9pbnZvLmRldi50ZWxldGVhY2hlcnMudXMvcG9ydGFsL2xvZ2luLmN5cHJlc3MuaW8nKTtcclxuICAgICAgY3kud2FpdCg1MDAwKTtcclxuICAgICAgY3kuZ2V0KCdpbnB1dFtuYW1lPXVzZXJuYW1lXScpLnR5cGUoXCJtYWRodWxhdGhhK2ludm9AZW5zYXJzb2x1dGlvbnMuY29tXCIpO1xyXG4gICAgICBjeS5nZXQoJ2lucHV0W25hbWU9cGFzc3dvcmRdJykudHlwZShcIlRlbGVAMTIzXCIpO1xyXG4gICAgICBjeS5nZXQoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5jbGljaygpO1xyXG4gICAgICBjeS53YWl0KDUwMDApO1xyXG4gICAgICBjeS5nZXQoJ2FbaHJlZj1cIi9wb3J0YWwvcmVmZXJyYWxcIl0nKS5jbGljayh7IGZvcmNlOiB0cnVlIH0pO1xyXG4gICAgICAvL2N5LnhwYXRoKCcvL3Rib2R5L3RyWzJdL3RkWzhdL3VsWzFdL2xpWzNdL2RpdlsxXS9zcGFuWzFdLy8qW25hbWUoKT1cInN2Z1wiXScpLmNsaWNrKCk7XHJcbiAgICAgIGN5LndhaXQoNDAwMCk7XHJcbiAgICAgIC8vY3kuZ2V0KCdzdmcnKS5jbGljaygpO1xyXG4gICAgICAvL2N5LmdldCgnbGkuYW50LW1lbnUtaXRlbS5hbnQtbWVudS1pdGVtLWFjdGl2ZSBzcGFuLmFudC1tZW51LXRpdGxlLWNvbnRlbnQnKS5jbGljayh7IGZvcmNlOiB0cnVlIH0pO1xyXG4gICAgICAvL2N5LmdldCgnLnN2ZycpLmludm9rZSgnc2hvdycpLnRyaWdnZXIoJ21vdXNlb3ZlcicsIHsgZm9yY2U6IHRydWUgfSkuY2xpY2soKTtcclxuXHJcbiAgICAgIC8vIEFzc3VtaW5nIHRoZSBpZnJhbWUgaGFzIGEgbmFtZSBvciBJRFxyXG4gICAgICAvL2N5LmlmcmFtZSgnY2xhc3M9XCJhbnQtbWVudS1zdWJtZW51LWFycm93XCInKS5maW5kKCd1bFtpZD1cInJjLW1lbnUtdXVpZC05NjM3NC0zLXJjLW1lbnUtbW9yZS1wb3B1cFwiXSBsaVt0aXRsZT1cIkVkaXRcIl0nKS5jbGljaygpO1xyXG4gICAgICBjeS5nZXQoJ3BhdGg6Y29udGFpbnMoXCJNMTc2IDUxMWE1NiA1NiAwIDEwMTEyIDAgNTYgNTYgMCAxMC0xMTIgMHptMjgwIDBhNTYgNTYgMCAxMDExMiAwIDU2IDU2IDAgMTAtMTEyIDB6bTI4MCAwYTU2IDU2IDAgMTAxMTIgMCA1NiA1NiAwIDEwLTExMiAwelwiKScpLnNob3VsZCgnZXhpc3QnKS5jbGljaygpOyAvLyBPciBwZXJmb3JtIG90aGVyIGludGVyYWN0aW9uc1xyXG5cclxuICAgIC8vIFlvdSBjYW4gcGVyZm9ybSBhZGRpdGlvbmFsIGFzc2VydGlvbnMgb3IgaW50ZXJhY3Rpb25zIHdpdGggdGhlIFNWRyBlbGVtZW50IGhlcmVcclxuICBcclxuICAgICAgLy9jeS5nZXQoJy5zdmcnKS5zaG91bGQoJ2JlLnZpc2libGUnKS50cmlnZ2VyKCdtb3VzZW92ZXInLCB7IGZvcmNlOiB0cnVlIH0pLmNsaWNrKCk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAvL2N5LmdldCgnc3ZnJykuY2xpY2soKTtcclxuICAgICAgXHJcblxyXG5cclxuICAgICAgY3kud2FpdCgzMDAwKTtcclxuICAgICAgY3kuZ2V0KCcjc3FfMTM0aScpLnR5cGUoXCJramhnZmRcIik7XHJcbiAgICAgIGN5LmdldCgnI3NxXzEzNWknKS50eXBlKCdsa2poJyk7XHJcbiAgICAgIGN5LndhaXQoMzAwMCk7XHJcbiAgICAgIGN5LmdldCgnI3NxXzEzNmknKS50eXBlKFwia2poZ2ZkQGcuY29tXCIpO1xyXG4gICAgICBjeS5nZXQoJyNzcV8xMzdpJykudHlwZShcIjk4NzY1NDU2NzhcIik7XHJcbiAgICAgIGN5LndhaXQoNTAwMCk7XHJcbiAgICAgIGN5LmdldCgnI3NxXzEzOGknKS50eXBlKFwia2pob2l1eXRyZGZnaFwiKTtcclxuXHJcbiAgICB9KVxyXG59KSJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIml0IiwiY3kiLCJ2aXNpdCIsIndhaXQiLCJnZXQiLCJ0eXBlIiwiY2xpY2siLCJmb3JjZSIsInNob3VsZCJdLCJzb3VyY2VSb290IjoiIn0=
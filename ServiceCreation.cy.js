/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*******************************************!*\
  !*** ./cypress/e2e/ServiceCreation.cy.js ***!
  \*******************************************/


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
    cy.get('a[href="/portal/setup/services"]').click({
      force: true
    });
    cy.contains('Create').click();
    cy.get('input[placeholder="Service Code"]').type("4444444");
    // Declare a variable
    const serviceName = 'AutomationService1';
    cy.wait(5000);
    cy.get('input[placeholder="Service Name"]').type(serviceName);
    cy.get('div[name="servicesallDisciplines"] div[class="ant-select-selection-overflow"]').click();
    cy.wait(5000);
    cy.get('div[title="All"] div[class="ant-select-item-option-content"]').click();
    cy.wait(5000);
    cy.contains('Show Goals for Documentation').click({
      force: true
    });
    cy.contains('Save').click();
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZUNyZWF0aW9uLmN5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUFBLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNO0VBQzdCQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU07SUFDakJDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDLDBEQUEwRCxDQUFDO0lBQ3BFRCxFQUFFLENBQUNFLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDYkYsRUFBRSxDQUFDRyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLG9DQUFvQyxDQUFDO0lBQ3pFSixFQUFFLENBQUNHLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQy9DSixFQUFFLENBQUNHLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDRSxLQUFLLENBQUMsQ0FBQztJQUNyQ0wsRUFBRSxDQUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2JGLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUNHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLHNCQUFzQixDQUFDO0lBQ2pGTixFQUFFLENBQUNHLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDRSxLQUFLLENBQUU7TUFBQ0UsS0FBSyxFQUFFO0lBQUksQ0FBQyxDQUFDO0lBQ3ZEUCxFQUFFLENBQUNHLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDRSxLQUFLLENBQUM7TUFBRUUsS0FBSyxFQUFFO0lBQUssQ0FBQyxDQUFDO0lBQ2pFUCxFQUFFLENBQUNRLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQ0gsS0FBSyxDQUFDLENBQUM7SUFDN0JMLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUNDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDN0Q7SUFDSixNQUFNSyxXQUFXLEdBQUcsb0JBQW9CO0lBRXhDVCxFQUFFLENBQUNFLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDYkYsRUFBRSxDQUFDRyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQ0MsSUFBSSxDQUFDSyxXQUFXLENBQUM7SUFDN0RULEVBQUUsQ0FBQ0csR0FBRyxDQUFDLCtFQUErRSxDQUFDLENBQUNFLEtBQUssQ0FBQyxDQUFDO0lBQy9GTCxFQUFFLENBQUNFLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDYkYsRUFBRSxDQUFDRyxHQUFHLENBQUMsOERBQThELENBQUMsQ0FBQ0UsS0FBSyxDQUFDLENBQUM7SUFDOUVMLEVBQUUsQ0FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNiRixFQUFFLENBQUNRLFFBQVEsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDSCxLQUFLLENBQUU7TUFBQ0UsS0FBSyxFQUFFO0lBQUksQ0FBQyxDQUFDO0lBQ2pFUCxFQUFFLENBQUNRLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQ0gsS0FBSyxDQUFDLENBQUM7RUFRdkIsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jeXByZXNzYXV0b21hdGlvbi8uL2N5cHJlc3MvZTJlL1NlcnZpY2VDcmVhdGlvbi5jeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkZXNjcmliZSgndGVtcGxhdGUgZmlyc3QnLCAoKSA9PiB7XHJcbiAgICBpdCgncGFzc2VzJywgKCkgPT4ge1xyXG4gICAgICBjeS52aXNpdCgnaHR0cHM6Ly9pbnZvLmRldi50ZWxldGVhY2hlcnMudXMvcG9ydGFsL2xvZ2luLmN5cHJlc3MuaW8nKTtcclxuICAgICAgY3kud2FpdCg1MDAwKTtcclxuICAgICAgY3kuZ2V0KCdpbnB1dFtuYW1lPXVzZXJuYW1lXScpLnR5cGUoXCJtYWRodWxhdGhhK2ludm9AZW5zYXJzb2x1dGlvbnMuY29tXCIpO1xyXG4gICAgICBjeS5nZXQoJ2lucHV0W25hbWU9cGFzc3dvcmRdJykudHlwZShcIlRlbGVAMTIzXCIpO1xyXG4gICAgICBjeS5nZXQoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5jbGljaygpO1xyXG4gICAgICBjeS53YWl0KDUwMDApO1xyXG4gICAgICBjeS5nZXQoJy5hbnQtbWVudS1zdWJtZW51LXRpdGxlJykuaW52b2tlKCdhdHRyJywgJ3N0eWxlJywgJ3Zpc2liaWxpdHk6IHZpc2libGU7Jyk7XHJcbiAgICAgIGN5LmdldCgnLmFudC1tZW51LXN1Ym1lbnUtdGl0bGUnKS5jbGljaygge2ZvcmNlOiB0cnVlfSk7XHJcbiAgICAgIGN5LmdldCgnYVtocmVmPVwiL3BvcnRhbC9zZXR1cC9zZXJ2aWNlc1wiXScpLmNsaWNrKHsgZm9yY2U6IHRydWUgfSk7XHJcbiAgICAgIGN5LmNvbnRhaW5zKCdDcmVhdGUnKS5jbGljaygpO1xyXG4gICAgICBjeS5nZXQoJ2lucHV0W3BsYWNlaG9sZGVyPVwiU2VydmljZSBDb2RlXCJdJykudHlwZShcIjQ0NDQ0NDRcIik7XHJcbiAgICAvLyBEZWNsYXJlIGEgdmFyaWFibGVcclxuY29uc3Qgc2VydmljZU5hbWUgPSAnQXV0b21hdGlvblNlcnZpY2UxJztcclxuXHJcbmN5LndhaXQoNTAwMCk7XHJcbmN5LmdldCgnaW5wdXRbcGxhY2Vob2xkZXI9XCJTZXJ2aWNlIE5hbWVcIl0nKS50eXBlKHNlcnZpY2VOYW1lKTtcclxuY3kuZ2V0KCdkaXZbbmFtZT1cInNlcnZpY2VzYWxsRGlzY2lwbGluZXNcIl0gZGl2W2NsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb24tb3ZlcmZsb3dcIl0nKS5jbGljaygpO1xyXG5jeS53YWl0KDUwMDApO1xyXG5jeS5nZXQoJ2Rpdlt0aXRsZT1cIkFsbFwiXSBkaXZbY2xhc3M9XCJhbnQtc2VsZWN0LWl0ZW0tb3B0aW9uLWNvbnRlbnRcIl0nKS5jbGljaygpO1xyXG5jeS53YWl0KDUwMDApO1xyXG5jeS5jb250YWlucygnU2hvdyBHb2FscyBmb3IgRG9jdW1lbnRhdGlvbicpLmNsaWNrKCB7Zm9yY2U6IHRydWV9KTtcclxuY3kuY29udGFpbnMoJ1NhdmUnKS5jbGljaygpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIH0pO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiaXQiLCJjeSIsInZpc2l0Iiwid2FpdCIsImdldCIsInR5cGUiLCJjbGljayIsImludm9rZSIsImZvcmNlIiwiY29udGFpbnMiLCJzZXJ2aWNlTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=
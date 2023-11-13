/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!************************************************!*\
  !*** ./cypress/e2e/AddStudentToCaseload.cy.js ***!
  \************************************************/


describe('template first', () => {
  it('passes', () => {
    cy.wait(5000);
    cy.visit('https://invo.dev.teleteachers.us/portal/login.cypress.io');
    cy.wait(5000);
    cy.get('input[name=username]').type("madhulatha+invo@ensarsolutions.com");
    cy.get('input[name=password]').type("Tele@123");
    cy.get('button[type=submit]').click({
      force: true
    });
    cy.wait(5000);
    cy.get('a[href="/portal/caseload"]').click({
      force: true
    });
    cy.wait(5000);
    cy.get('button.ant-btn.css-ibennm.ant-btn-primary span').should('exist').click({
      force: true
    });
    cy.get('.ant-form.ant-form-vertical.css-ibennm').should('exist').click();
    cy.wait(5000);
    cy.get('div[name="clients"] div[class="ant-select-selection-overflow"]').type('Automation TestingMadhu');
    cy.get('div[class="rc-virtual-list-holder-inner"]').should('be.visible');
    cy.get('.ant-select-item-option-content').contains("Automation TestingMadhu").click();
    cy.wait(5000);
    cy.get('body div button:nth-child(2)').should('exist').click({
      force: true
    });
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkU3R1ZGVudFRvQ2FzZWxvYWQuY3kuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsUUFBUSxDQUFDLGdCQUFnQixFQUFFLE1BQU07RUFDN0JDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTTtJQUNqQkMsRUFBRSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2JELEVBQUUsQ0FBQ0UsS0FBSyxDQUFDLDBEQUEwRCxDQUFDO0lBQ3BFRixFQUFFLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDYkQsRUFBRSxDQUFDRyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLG9DQUFvQyxDQUFDO0lBQ3pFSixFQUFFLENBQUNHLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQy9DSixFQUFFLENBQUNHLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDRSxLQUFLLENBQUM7TUFBQ0MsS0FBSyxFQUFFO0lBQUksQ0FBQyxDQUFDO0lBQ2xETixFQUFFLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDYkQsRUFBRSxDQUFDRyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQ0UsS0FBSyxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFLLENBQUMsQ0FBQztJQUMzRE4sRUFBRSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2JELEVBQUUsQ0FBQ0csR0FBRyxDQUFDLGdEQUFnRCxDQUFDLENBQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQ0YsS0FBSyxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFLLENBQUMsQ0FBQztJQUMvRk4sRUFBRSxDQUFDRyxHQUFHLENBQUMsd0NBQXdDLENBQUMsQ0FBQ0ksTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDRixLQUFLLENBQUMsQ0FBQztJQUN4RUwsRUFBRSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBR2JELEVBQUUsQ0FBQ0csR0FBRyxDQUFDLGdFQUFnRSxDQUFDLENBQUNDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztJQUN4R0osRUFBRSxDQUFDRyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQ0ksTUFBTSxDQUFDLFlBQVksQ0FBQztJQUN4RVAsRUFBRSxDQUFDRyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBRUssUUFBUSxDQUFDLHlCQUF5QixDQUFDLENBQUNILEtBQUssQ0FBQyxDQUFDO0lBR3RGTCxFQUFFLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDYkQsRUFBRSxDQUFDRyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQ0ksTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDRixLQUFLLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQUssQ0FBQyxDQUFDO0VBRy9FLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3lwcmVzc2F1dG9tYXRpb24vLi9jeXByZXNzL2UyZS9BZGRTdHVkZW50VG9DYXNlbG9hZC5jeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkZXNjcmliZSgndGVtcGxhdGUgZmlyc3QnLCAoKSA9PiB7XHJcbiAgICBpdCgncGFzc2VzJywgKCkgPT4ge1xyXG4gICAgICBjeS53YWl0KDUwMDApO1xyXG4gICAgICBjeS52aXNpdCgnaHR0cHM6Ly9pbnZvLmRldi50ZWxldGVhY2hlcnMudXMvcG9ydGFsL2xvZ2luLmN5cHJlc3MuaW8nKTtcclxuICAgICAgY3kud2FpdCg1MDAwKTtcclxuICAgICAgY3kuZ2V0KCdpbnB1dFtuYW1lPXVzZXJuYW1lXScpLnR5cGUoXCJtYWRodWxhdGhhK2ludm9AZW5zYXJzb2x1dGlvbnMuY29tXCIpO1xyXG4gICAgICBjeS5nZXQoJ2lucHV0W25hbWU9cGFzc3dvcmRdJykudHlwZShcIlRlbGVAMTIzXCIpO1xyXG4gICAgICBjeS5nZXQoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5jbGljayh7Zm9yY2U6IHRydWV9KTtcclxuICAgICAgY3kud2FpdCg1MDAwKTtcclxuICAgICAgY3kuZ2V0KCdhW2hyZWY9XCIvcG9ydGFsL2Nhc2Vsb2FkXCJdJykuY2xpY2soeyBmb3JjZTogdHJ1ZSB9KTtcclxuICAgICAgY3kud2FpdCg1MDAwKTtcclxuICAgICAgY3kuZ2V0KCdidXR0b24uYW50LWJ0bi5jc3MtaWJlbm5tLmFudC1idG4tcHJpbWFyeSBzcGFuJykuc2hvdWxkKCdleGlzdCcpLmNsaWNrKHsgZm9yY2U6IHRydWUgfSk7XHJcbiAgICAgIGN5LmdldCgnLmFudC1mb3JtLmFudC1mb3JtLXZlcnRpY2FsLmNzcy1pYmVubm0nKS5zaG91bGQoJ2V4aXN0JykuY2xpY2soKTtcclxuICAgICAgY3kud2FpdCg1MDAwKTtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBjeS5nZXQoJ2RpdltuYW1lPVwiY2xpZW50c1wiXSBkaXZbY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbi1vdmVyZmxvd1wiXScpLnR5cGUoJ0F1dG9tYXRpb24gVGVzdGluZ01hZGh1Jyk7XHJcbiAgICAgIGN5LmdldCgnZGl2W2NsYXNzPVwicmMtdmlydHVhbC1saXN0LWhvbGRlci1pbm5lclwiXScpLnNob3VsZCgnYmUudmlzaWJsZScpO1xyXG4gICAgICBjeS5nZXQoJy5hbnQtc2VsZWN0LWl0ZW0tb3B0aW9uLWNvbnRlbnQnKSAuY29udGFpbnMoXCJBdXRvbWF0aW9uIFRlc3RpbmdNYWRodVwiKS5jbGljaygpO1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIGN5LndhaXQoNTAwMCk7XHJcbiAgICAgIGN5LmdldCgnYm9keSBkaXYgYnV0dG9uOm50aC1jaGlsZCgyKScpLnNob3VsZCgnZXhpc3QnKS5jbGljayh7IGZvcmNlOiB0cnVlIH0pO1xyXG4gXHJcbiBcclxuICAgIH0pXHJcbn0pIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiaXQiLCJjeSIsIndhaXQiLCJ2aXNpdCIsImdldCIsInR5cGUiLCJjbGljayIsImZvcmNlIiwic2hvdWxkIiwiY29udGFpbnMiXSwic291cmNlUm9vdCI6IiJ9
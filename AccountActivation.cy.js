/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*********************************************!*\
  !*** ./cypress/e2e/AccountActivation.cy.js ***!
  \*********************************************/


// describe('template first', () => {
//     it('passes', () => {
//     //     cy.wait(5000);
//     //     cy.visit('https://invo.dev.teleteachers.us/portal/login.cypress.io');
//     //   cy.wait(5000);
//     //   cy.get('input[name=username]').type("madhulatha+invo@ensarsolutions.com");
//     //   cy.get('input[name=password]').type("Tele@123");
//     //   cy.get('button[type=submit]').click();
//     //   cy.visit('https://miyo.dev.teleteachers.us/portal/login.cypress.io'); 
//     //   cy.wait(5000);
//     //   cy.get('input[name=username]').type("madhulatha+7@ensarsolutions.com");
//     //   cy.get('input[name=password]').type("Tele@123");
//     //   cy.get('button[type=submit]').click();
//       cy.wait(5000);
//       cy.visit('https://outlook.office365.com/mail/', {
//             headers: {
//               "Accept-Encoding": "gzip, deflate"
//             }
//           });
//           cy.get('i[class="ms-Icon root-90 ms-Button-icon fyZen icon-164"] i:nth-child(1)').click();

//     })
// })
// describe('Outlook Activation', function()
// {
// it('Outlook act',function() {

//   //cy.visit('https://outlook.live.com/mail', { failOnStatusCode: false });

//     cy.on('uncaught:exception', () => {
//       return false
//     })

// cy.origin('https://outlook.live.com/owa', () => {
//   cy.visit('/')
//   cy.contains('Sign in').click()
// })

// cy.origin('login.live.com', () => {
//   cy.get('input[type="email"]').type('<username>', { log: false })
//   cy.get('input[type="submit"]').click()
//   cy.get('input[type="password"]').type('<password>', { log: false })
//   cy.get('input[type="submit"]').click()
//   cy.get('#idBtn_Back').click()
// })

// cy.origin('https://outlook.live.com', () => {
//   cy.contains('Outlook', { timeout: 20000 })
// })
// cy.intercept('https://outlook.live.com/mail/0/**', (req) => {
//   req.on('response', (res) => {
//     res.body = res.body.replaceAll('s.integrity=a.sriHashes[i]', 's["stripped-integrity"]=a.sriHashes[i]')
//   })
// })
describe('Account Activation Test', () => {
  it('should activate the account on Outlook', () => {
    // ... other commands before navigating to Outlook

    cy.origin('https://outlook.live.com', () => {
      // Commands targeting https://outlook.live.com go here
      cy.contains('Outlook', {
        timeout: 20000
      });
      // Additional commands related to Outlook
    });

    // ... other commands after navigating to Outlook
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudEFjdGl2YXRpb24uY3kuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVJO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsUUFBUSxDQUFDLHlCQUF5QixFQUFFLE1BQU07RUFDeENDLEVBQUUsQ0FBQyx3Q0FBd0MsRUFBRSxNQUFNO0lBQ2pEOztJQUVBQyxFQUFFLENBQUNDLE1BQU0sQ0FBQywwQkFBMEIsRUFBRSxNQUFNO01BQzFDO01BQ0FELEVBQUUsQ0FBQ0UsUUFBUSxDQUFDLFNBQVMsRUFBRTtRQUFFQyxPQUFPLEVBQUU7TUFBTSxDQUFDLENBQUM7TUFDMUM7SUFDRixDQUFDLENBQUM7O0lBRUY7RUFDRixDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2N5cHJlc3NhdXRvbWF0aW9uLy4vY3lwcmVzcy9lMmUvQWNjb3VudEFjdGl2YXRpb24uY3kuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZGVzY3JpYmUoJ3RlbXBsYXRlIGZpcnN0JywgKCkgPT4ge1xyXG4vLyAgICAgaXQoJ3Bhc3NlcycsICgpID0+IHtcclxuLy8gICAgIC8vICAgICBjeS53YWl0KDUwMDApO1xyXG4vLyAgICAgLy8gICAgIGN5LnZpc2l0KCdodHRwczovL2ludm8uZGV2LnRlbGV0ZWFjaGVycy51cy9wb3J0YWwvbG9naW4uY3lwcmVzcy5pbycpO1xyXG4vLyAgICAgLy8gICBjeS53YWl0KDUwMDApO1xyXG4vLyAgICAgLy8gICBjeS5nZXQoJ2lucHV0W25hbWU9dXNlcm5hbWVdJykudHlwZShcIm1hZGh1bGF0aGEraW52b0BlbnNhcnNvbHV0aW9ucy5jb21cIik7XHJcbi8vICAgICAvLyAgIGN5LmdldCgnaW5wdXRbbmFtZT1wYXNzd29yZF0nKS50eXBlKFwiVGVsZUAxMjNcIik7XHJcbi8vICAgICAvLyAgIGN5LmdldCgnYnV0dG9uW3R5cGU9c3VibWl0XScpLmNsaWNrKCk7XHJcbi8vICAgICAvLyAgIGN5LnZpc2l0KCdodHRwczovL21peW8uZGV2LnRlbGV0ZWFjaGVycy51cy9wb3J0YWwvbG9naW4uY3lwcmVzcy5pbycpOyBcclxuLy8gICAgIC8vICAgY3kud2FpdCg1MDAwKTtcclxuLy8gICAgIC8vICAgY3kuZ2V0KCdpbnB1dFtuYW1lPXVzZXJuYW1lXScpLnR5cGUoXCJtYWRodWxhdGhhKzdAZW5zYXJzb2x1dGlvbnMuY29tXCIpO1xyXG4vLyAgICAgLy8gICBjeS5nZXQoJ2lucHV0W25hbWU9cGFzc3dvcmRdJykudHlwZShcIlRlbGVAMTIzXCIpO1xyXG4vLyAgICAgLy8gICBjeS5nZXQoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5jbGljaygpO1xyXG4vLyAgICAgICBjeS53YWl0KDUwMDApO1xyXG4vLyAgICAgICBjeS52aXNpdCgnaHR0cHM6Ly9vdXRsb29rLm9mZmljZTM2NS5jb20vbWFpbC8nLCB7XHJcbi8vICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuLy8gICAgICAgICAgICAgICBcIkFjY2VwdC1FbmNvZGluZ1wiOiBcImd6aXAsIGRlZmxhdGVcIlxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICAgIGN5LmdldCgnaVtjbGFzcz1cIm1zLUljb24gcm9vdC05MCBtcy1CdXR0b24taWNvbiBmeVplbiBpY29uLTE2NFwiXSBpOm50aC1jaGlsZCgxKScpLmNsaWNrKCk7XHJcbiAgICAgICAgICBcclxuLy8gICAgIH0pXHJcbi8vIH0pXHJcbi8vIGRlc2NyaWJlKCdPdXRsb29rIEFjdGl2YXRpb24nLCBmdW5jdGlvbigpXHJcbi8vIHtcclxuLy8gaXQoJ091dGxvb2sgYWN0JyxmdW5jdGlvbigpIHtcclxuIFxyXG4vLyAgIC8vY3kudmlzaXQoJ2h0dHBzOi8vb3V0bG9vay5saXZlLmNvbS9tYWlsJywgeyBmYWlsT25TdGF0dXNDb2RlOiBmYWxzZSB9KTtcclxuIFxyXG4vLyAgICAgY3kub24oJ3VuY2F1Z2h0OmV4Y2VwdGlvbicsICgpID0+IHtcclxuLy8gICAgICAgcmV0dXJuIGZhbHNlXHJcbi8vICAgICB9KVxyXG4gXHJcbiAgICAvLyBjeS5vcmlnaW4oJ2h0dHBzOi8vb3V0bG9vay5saXZlLmNvbS9vd2EnLCAoKSA9PiB7XHJcbiAgICAvLyAgIGN5LnZpc2l0KCcvJylcclxuICAgIC8vICAgY3kuY29udGFpbnMoJ1NpZ24gaW4nKS5jbGljaygpXHJcbiAgICAvLyB9KVxyXG4gICBcclxuICAgIC8vIGN5Lm9yaWdpbignbG9naW4ubGl2ZS5jb20nLCAoKSA9PiB7XHJcbiAgICAvLyAgIGN5LmdldCgnaW5wdXRbdHlwZT1cImVtYWlsXCJdJykudHlwZSgnPHVzZXJuYW1lPicsIHsgbG9nOiBmYWxzZSB9KVxyXG4gICAgLy8gICBjeS5nZXQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKS5jbGljaygpXHJcbiAgICAvLyAgIGN5LmdldCgnaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdJykudHlwZSgnPHBhc3N3b3JkPicsIHsgbG9nOiBmYWxzZSB9KVxyXG4gICAgLy8gICBjeS5nZXQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKS5jbGljaygpXHJcbiAgICAvLyAgIGN5LmdldCgnI2lkQnRuX0JhY2snKS5jbGljaygpXHJcbiAgICAvLyB9KVxyXG4gXHJcbiAgICAvLyBjeS5vcmlnaW4oJ2h0dHBzOi8vb3V0bG9vay5saXZlLmNvbScsICgpID0+IHtcclxuICAgIC8vICAgY3kuY29udGFpbnMoJ091dGxvb2snLCB7IHRpbWVvdXQ6IDIwMDAwIH0pXHJcbiAgICAvLyB9KVxyXG4gICAgLy8gY3kuaW50ZXJjZXB0KCdodHRwczovL291dGxvb2subGl2ZS5jb20vbWFpbC8wLyoqJywgKHJlcSkgPT4ge1xyXG4gICAgLy8gICByZXEub24oJ3Jlc3BvbnNlJywgKHJlcykgPT4ge1xyXG4gICAgLy8gICAgIHJlcy5ib2R5ID0gcmVzLmJvZHkucmVwbGFjZUFsbCgncy5pbnRlZ3JpdHk9YS5zcmlIYXNoZXNbaV0nLCAnc1tcInN0cmlwcGVkLWludGVncml0eVwiXT1hLnNyaUhhc2hlc1tpXScpXHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyB9KVxyXG4gICAgZGVzY3JpYmUoJ0FjY291bnQgQWN0aXZhdGlvbiBUZXN0JywgKCkgPT4ge1xyXG4gICAgICBpdCgnc2hvdWxkIGFjdGl2YXRlIHRoZSBhY2NvdW50IG9uIE91dGxvb2snLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gLi4uIG90aGVyIGNvbW1hbmRzIGJlZm9yZSBuYXZpZ2F0aW5nIHRvIE91dGxvb2tcclxuICAgIFxyXG4gICAgICAgIGN5Lm9yaWdpbignaHR0cHM6Ly9vdXRsb29rLmxpdmUuY29tJywgKCkgPT4ge1xyXG4gICAgICAgICAgLy8gQ29tbWFuZHMgdGFyZ2V0aW5nIGh0dHBzOi8vb3V0bG9vay5saXZlLmNvbSBnbyBoZXJlXHJcbiAgICAgICAgICBjeS5jb250YWlucygnT3V0bG9vaycsIHsgdGltZW91dDogMjAwMDAgfSlcclxuICAgICAgICAgIC8vIEFkZGl0aW9uYWwgY29tbWFuZHMgcmVsYXRlZCB0byBPdXRsb29rXHJcbiAgICAgICAgfSlcclxuICAgIFxyXG4gICAgICAgIC8vIC4uLiBvdGhlciBjb21tYW5kcyBhZnRlciBuYXZpZ2F0aW5nIHRvIE91dGxvb2tcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4iXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJpdCIsImN5Iiwib3JpZ2luIiwiY29udGFpbnMiLCJ0aW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==
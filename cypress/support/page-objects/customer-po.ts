/// <reference types="cypress" />

class customer_po {
  
  navigateTo_homePage() {
    cy.visit("/");
  }
  
  clickcustomerloginbtn() {
    cy.get(".btn-lg").first().click();
  }
  
  selectusertologin(validuser) {
    cy.get("#userSelect").select(validuser);
  }
  
  clickloginbtn() {
    cy.get(".btn-default").click();
  }
  
  validateuserbalance() {
    let initialbalance;
    //Assert the Initial Balance
    cy.get('div[ng-hide="noAccount"] strong.ng-binding')
      .then(($elements) => {
        const balanceText = $elements[1].innerText;
        initialbalance = parseInt(balanceText);
        cy.wrap(initialbalance).should("be.gte", 0);
      })
      .then(() => {
        // Deposit Amount
        cy.get('button[ng-click="deposit()"]').click();
        cy.get('input[ng-model="amount"]').type("500");
        cy.get(".btn-default").click();
        cy.get('span[ng-show="message"]').should(
          "contain",
          "Deposit Successful"
        );
        //Assert the updated balance after deposit
        cy.get('div[ng-hide="noAccount"] strong.ng-binding')
          .eq(1)
          .invoke("text")
          .then((Updatedbalance) => {
            expect(parseInt(Updatedbalance)).to.equal(initialbalance + 500);
          });
      });
  }
  
  validateTransactionentry() {
    cy.get('[ng-click="transactions()"]').click();
    cy.get("#start").type("2024-04-01T08:30");
    cy.wait(5000);
    //Assert the Transaction date with Today system date
    cy.get("table tbody tr")
      .find("td")
      .eq(0)
      .invoke("text")
      .then((dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1; // JavaScript months are zero-based, so we add 1
        const year = date.getFullYear();
        // Get the current system date
        const currentDate = new Date();
        const currentDay = currentDate.getDate();
        const currentMonth = currentDate.getMonth() + 1;
        const currentYear = currentDate.getFullYear();
        expect(day).to.equal(currentDay);
        expect(month).to.equal(currentMonth);
        expect(year).to.equal(currentYear);
      });
    cy.get("table tbody tr").find("td").eq(1).should("contain", "500");
  }
}
export default customer_po;

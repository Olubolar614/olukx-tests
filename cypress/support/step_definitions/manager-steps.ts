import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import manager_po from "../page-objects/manager-po";

const manager = new manager_po;

When("I login as a bank manager with valid credentials", () => {
  manager.clickbankManagerloginbtn();
});

Then(`User search for {} and should see the details`, (searchquery) => {
  manager.searchCustomer(searchquery);
});

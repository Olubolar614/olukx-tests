import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import customer_po from "../page-objects/customer-po";
// import { when } from "cypress/types/jquery";

const customer = new customer_po;

Given('I navigate to the XYZ Bank homepage', () => {
    customer.navigateTo_homePage();
})

When('I click on the Customer Login button', () => {
    customer.clickcustomerloginbtn();
})

When(`Select a {} from the dropdown`, (validuser) => {
    customer.selectusertologin(validuser);
})

When('I click on the login button',()=>{
    customer.clickloginbtn();
})

Then('Customer should be able to see his balance deposit amount and verify updated balance',()=>{
    customer.validateuserbalance();
})

Then('I should see a transaction entry with the correct amount and today date',()=>{
    customer.validateTransactionentry();
})
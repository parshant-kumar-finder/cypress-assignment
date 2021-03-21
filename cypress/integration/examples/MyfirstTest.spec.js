/// <reference types="cypress" />
var ex="thelifeofprashant-march-19-2021-2142@example.com";
var github="thelifeofprashant";
var monthNames = [ "january", "february", "march", "april",
    "may", "june", "july", "august", "september", "october", "november", "december" ];
var d = new Date();
var date="";
date+=monthNames[d.getMonth()]+"-"+ d.getDate()+"-"+d.getFullYear()+"-"+d.getHours()+d.getMinutes();
var email=`${github}-${date}@example.com`;


describe("test suit",function(){
    it("signup",function(){
        cy.visit("https://www.aceinvoice.com/")
        cy.clearCookies({log:true})
        cy.clearLocalStorage("your item",{log:true})
        cy.get("#navbarSupportedContent > ul > li:nth-child(6) > a").click()
        cy.get("#new_user > div > div.form-controls > div > div > input").type(email)
        cy.get("#new_user > div > div.form-buttons.d-inline-flex > input").click()
        cy.wait(2000)
        cy.get("#new_user > div > div.form-controls > div > div > input").type("welcome1234!")
        cy.get("#new_user > div > div.form-buttons.mt-3 > input").click()
        

    })
    it("basic details",function(){
        cy.wait(3000)
        cy.get("body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.bg-white.floating-box.page-content.form-page.onboarding-info.p-5 > form > div:nth-child(2) > div:nth-child(1) > div > input").type("Oliver")
        cy.get("body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.bg-white.floating-box.page-content.form-page.onboarding-info.p-5 > form > div:nth-child(2) > div:nth-child(2) > div > input").type("Smith")
        cy.get("body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.bg-white.floating-box.page-content.form-page.onboarding-info.p-5 > form > div:nth-child(3) > div > div > select").select("New Delhi")
        cy.get("body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.bg-white.floating-box.page-content.form-page.onboarding-info.p-5 > form > div:nth-child(4) > div > div > div > div:nth-child(2) > div > label > div.control__indicator").should("not.be.checked").click()
        cy.get("input[name='user[date_format]']").check({force:true})
        cy.get("body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.bg-white.floating-box.page-content.form-page.onboarding-info.p-5 > form > div:nth-child(5) > div > div > label > input[type=checkbox]").check({force:true})
        cy.get("body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.bg-white.floating-box.page-content.form-page.onboarding-info.p-5 > form > div:nth-child(6) > div > div > label > input[type=checkbox]").click({force:true})
        cy.get("body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.bg-white.floating-box.page-content.form-page.onboarding-info.p-5 > form > div.form-actions.pb-0 > input").click()
        
    })
    it("add you company",function(){
        cy.get("body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.bg-white.floating-box.page-content.p-5 > div > form > div.row > div > div.field-value > input").type("thelifeofprashant Private Limited")
        cy.get("body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.bg-white.floating-box.page-content.p-5 > div > form > div.form-actions.pb-0.mb-0 > input").click()
        cy.get("body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.page-content.bg-white.floating-box.form-page.col-md-12.add-client-page.p-5 > form > div.form-actions.pb-0 > a").click()
        cy.get("body > div:nth-child(3) > div > div.page-wrap > div > div > div > div > div > div > div > div > h4").should("have.text","Congratulations, you're all set!")
        cy.get("body > div:nth-child(3) > div > div.page-wrap > div > div > div > div > div > div > button").click()
        //cy.get("body > div:nth-child(3) > div > div.header > div.header.verification-banner.py-2 > span.email.font-weight-bold").should("have.text",email)

    })
    it("client",function(){
        cy.get("body > div:nth-child(3) > div > div.header > div.container > div:nth-child(2) > div > ul > li:nth-child(4) > a").click()
        cy.get("body > div:nth-child(3) > div > div.page-wrap > div > div > div > div > div > div > div > div > a").click()
        cy.get("body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.page-content.bg-white.floating-box.form-page.col-md-12.add-client-page.p-5 > form > div:nth-child(1) > div:nth-child(1) > div > input").type("Trix Inc")
        cy.get("body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.page-content.bg-white.floating-box.form-page.col-md-12.add-client-page.p-5 > form > div.form-actions.pb-0 > input").click()
    })
    it("add new project",function(){
        cy.get("body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.page-header > div > h1").should("have.text","Add New Project")
        cy.get("body > div:nth-child(3) > div > div.page-wrap > div > div > div > div:nth-child(2) > div.bg-white.floating-box.page-content.form-page.p-5.mb-4 > div:nth-child(2) > div > div > input").type("Trix Web Development")
        cy.get("body > div:nth-child(3) > div > div.page-wrap > div > div > div > div:nth-child(2) > div.bg-white.floating-box.page-content.form-page.p-5.mb-4 > div:nth-child(3) > div > div > select").select("hourly_project_rate")
        cy.get("body > div:nth-child(3) > div > div.page-wrap > div > div > div > div:nth-child(2) > div.bg-white.floating-box.page-content.form-page.p-5.mb-4 > div:nth-child(3) > div:nth-child(2) > div > div > input").clear().type("20")
        cy.get("body > div:nth-child(3) > div > div.page-wrap > div > div > div > div:nth-child(2) > div.form-actions > button").click({force:true})

    })
    it("assert result",function(){
        cy.get("body > div:nth-child(3) > div > div.page-wrap > div > div > div > div > div > div.d-flex.align-items-center.pb-4 > div.page-header.with-breadcrumb.pb-0 > div > h1").should("have.text","Trix Web Development")
        cy.get("#info > div.px-5.pt-5 > div.form-row.project-info.text-break > div:nth-child(3) > div.field-value").should("have.text","Hourly Project Rate")
        cy.get("#info > div.px-5.pt-5 > div:nth-child(2) > div:nth-child(3) > div.field-value.white-space-pre-wrap.text-break > span").should("have.text","No rounding ")
        cy.get("#info > div.form-group.data-section.team-members-data > div.field-value > div > table > tbody > tr > td:nth-child(1) > span.name.ml-3").should("have.text","Oliver Smith") 
    })
})
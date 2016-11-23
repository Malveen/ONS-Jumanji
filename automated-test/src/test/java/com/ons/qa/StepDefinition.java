package com.ons.qa;

import java.util.List;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.DataTable;
//import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {
    private WebDriver driver= new FirefoxDriver();//TODO: Parameterise
    

    public StepDefinition(WebDriver driver) {
        this.driver = driver;
    }
    
    public StepDefinition() {
    }

    @Given("^customer is on the webpage$") //fill out survey scenario
    public void cus() throws Throwable {
        driver.manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS); //wait for browser to load for max of 10 seconds before commencing other commands
        driver.navigate().to("https://testprototype.000webhostapp.com"); //go to this url //TODO: Parameterise URL
    }

    @When("^he starts the survey$") 
    public void he_starts_the_survey() throws Throwable {
        //System.out.println("driver=" + driver);
        driver.findElement(By.id("startSurveyButton")).click(); //start survey
        
    }

    @When("^he fills out the survey$") //TODO: Get to know how AND is hooked to WHEN here
    public void he_fills_out_the_survey(DataTable table) throws Throwable {
    
    
        List<List<String>> data = table.raw();
        
        //System.out.println(data.get(1).get(1));
        
        driver.findElement(By.id("question1Textbox")).sendKeys(data.get(1).get(1));         //type in textbox value //TODO: Bad practise, always input values
        driver.findElement(By.id("question1Submit ")).click(); //space due to id error 
        driver.findElement(By.id("question2Textbox")).sendKeys(data.get(2).get(1));         //TODO: Bad practise, always input values
        driver.findElement(By.id("question2Submit")).click();
        driver.findElement(By.id("question3Textbox")).sendKeys("100000");//TODO: Bad practise, always input values
        driver.findElement(By.id("question3Submit")).click();
        driver.findElement(By.id("radio2")).click();
        driver.findElement(By.id("question4Submit")).click();
        driver.findElement(By.id("checkbox2")).click();
        driver.findElement(By.id("question5Submit")).click();
    }

    @Then("^the survey should be submitted$")
    public void the_survey_should_be_submitted() throws Throwable {
        driver.findElement(By.id("submitSurvey")).click(); //submit survey 
        driver.quit(); //closes the browser
    }

}
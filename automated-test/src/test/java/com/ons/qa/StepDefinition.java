package com.ons.qa;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
//import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {
	WebDriver driver = new FirefoxDriver(); //initialise the driver for your browsers here

	@Given("^customer is on the webpage$") //fill out survey scenario
	public void customer_is_on_the_webpage() throws Throwable {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS); //wait for browser to load for max of 10 seconds before commencing other commands
		driver.navigate().to("https://testprototype.000webhostapp.com"); //go to this url
	}

	@When("^he starts the survey$") 
	public void he_starts_the_survey() throws Throwable {
		//System.out.println("driver=" + driver);
		driver.findElement(By.id("startSurveyButton")).click(); //start survey
		
	}

	@When("^he fills out the survey$")
	public void he_fills_out_the_survey() throws Throwable {
		driver.findElement(By.id("question1Textbox")).sendKeys("180"); //type in textbox value
		driver.findElement(By.id("question1Submit ")).click(); //space due to id error 
		driver.findElement(By.id("question2Textbox")).sendKeys("360");
		driver.findElement(By.id("question2Submit")).click();
		driver.findElement(By.id("question3Textbox")).sendKeys("100000");
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

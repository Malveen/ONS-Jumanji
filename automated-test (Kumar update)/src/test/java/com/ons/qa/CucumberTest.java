package com.ons.qa;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.firefox.FirefoxDriver;
//import cucumber.api.junit.Cucumber;
import org.openqa.selenium.*;

public class CucumberTest {

	public static void main(String[] args) {
			
		///
		/// This class not part of main program but is where you can test selenium java code 
		///
		
		WebDriver driver = new FirefoxDriver();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("https://testprototype.000webhostapp.com");

		driver.findElement(By.id("startSurveyButton")).click();
		driver.findElement(By.id("question1Textbox")).sendKeys("180");
		driver.findElement(By.id("question1Submit ")).click();//space due to id error 
		driver.findElement(By.id("question2Textbox")).sendKeys("360");
		driver.findElement(By.id("question2Submit")).click();
		driver.findElement(By.id("question3Textbox")).sendKeys("100000");
		driver.findElement(By.id("question3Submit")).click();
		driver.findElement(By.id("radio2")).click();
		driver.findElement(By.id("question4Submit")).click();
		driver.findElement(By.id("checkbox2")).click();
		driver.findElement(By.id("question5Submit")).click();
		driver.findElement(By.id("submitSurvey")).click();
		//driver.quit();
	}

}

package com.ons.qa;

import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
//		features = "src/test/java/features"
//		,glue={"src/test/java/steps"}
		format = {"pretty"}
		)

public class RunnerTest {
	//To run the test run this class 
	//String agent = "chrome";
	//WebDriver driver = new ChromeDriver();
}

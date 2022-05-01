package base;

import java.awt.AWTException;
import java.awt.Robot;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class Base {

	public static Logger log = LogManager.getLogger(Base.class.getName());
	public static String MVC = "http://todomvc.com/examples/vue/";
	public static WebDriver driver;
	
	public static Actions action;
	public static Robot robo;
	

	public static void loadApplication(String url) throws AWTException{
		
		robo = new Robot();
		System.setProperty("webdriver.chrome.driver", "./drivers/chromedriver.exe");
		if(driver==null){
				driver = new ChromeDriver();
				driver.manage().window().maximize();
				driver.manage().timeouts().implicitlyWait(45, TimeUnit.SECONDS);
				
		}
		if(url.equalsIgnoreCase("MVC")){
			driver.get(Base.MVC);
				
		}
		
		action = new Actions(driver);
		
		
		
	}

}

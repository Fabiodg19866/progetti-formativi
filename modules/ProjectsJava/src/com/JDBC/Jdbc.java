package com.JDBC;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;



public class Jdbc {


	public static void main(String[] args){
		
		String url ="jdbc:mysql://localhost:3306/corsojava";
		String username = "root";
		String password = "password";
		
		
		try{
			//Class.forName("com.mysql.jdbc.Driver");
			Connection connection = DriverManager.getConnection(url,username,password);
			 Statement myState = connection.createStatement();
			   ResultSet myResult = myState.executeQuery("SELECT*FROM ORDINI");
			
			connection.close();
			System.out.println("Connected");
		}
			

		catch(SQLException e)
		{
			System.out.println("Error");
			e.printStackTrace();
		}

	}
	
}
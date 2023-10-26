package com.HandlingException;


public class ExceptionByZero {

	public static void main(String[] args) throws Exception {


		try {
			int a = 6 / 0;
		} catch (Exception e) {


			System.out.println("eccezione controllata");

		}


          if (5<3) {

			throw   new Exception("Errato");
		  }

          	else{

				  System.out.println("Esatto");

			  }





	}

}
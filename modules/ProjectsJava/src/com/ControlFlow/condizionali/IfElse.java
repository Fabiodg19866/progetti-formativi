package com.ControlFlow.condizionali;

import java.time.LocalDate;

public class IfElse {

	
public static void main(String[]args) {

	int a = 50;
	int b = 30;
	int c = 10;
	int s = 20;
	boolean m = a<b?true:false;

	if (a <b&&c==s) {

		System.out.println("Esatto");
		  String nome =LocalDate.now().toString();

	} else if (a > b||s<c) {

		System.out.println("Errato");

	} else if (c > s) {

		System.out.println("Esatto");
	} else if (s > a) {

		System.out.println("Esatto");
	}

}



}



	
	
	    
	/*int[] nomi = {1,2,3};
	
		
		for(int parole:nomi) {
		
        System.out.println(parole);

}
}*/


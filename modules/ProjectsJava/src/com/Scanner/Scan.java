package com.Scanner;

import java.util.Scanner;

public class Scan {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		System.out.println("Inserisci nome:");
		String name= sc.nextLine();
		System.out.println("cognome");
		String surname = sc.nextLine();
		System.out.println("città");
		String city = sc.nextLine();
		System.out.println("nazione");
		String nationality = sc.nextLine();
		System.out.println("professione");
		String job= sc.nextLine();
		System.out.println("patente di guida");
		String car = sc.nextLine();
		int age = sc.nextInt();
		System.out.println(age);



		sc.close();
	
	}

}



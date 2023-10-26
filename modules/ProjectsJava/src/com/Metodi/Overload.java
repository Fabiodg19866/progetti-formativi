package com.Metodi;

public class Overload{

	 final static int Codice = 123245;


	public int aritmetica (int a, int b) {

		return a+b;
	}

	public double aritmetica (double c, double d) {
		return c-d;


	}

	public static void main(String[] args) {

	 Overload overload = new Overload();

	 int a = 56;
	 int b = 36;
	 double c = 56.67;
	 double d = 36.45;

		System.out.println(overload.aritmetica(a,b));
		System.out.println(overload.aritmetica(c,d));


	}
	
	
}

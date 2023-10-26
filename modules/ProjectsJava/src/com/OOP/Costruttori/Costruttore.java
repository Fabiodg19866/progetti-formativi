package com.java.OOP.Costruttori;



public class Costruttore {

	public int id;
	public String category;
	public boolean conditional;


	public Costruttore(int id, String category,boolean conditional) {

		this.id = id;
		this.category = category;
		this.conditional = conditional;


	}


		public static void main(String[] args) {


		Costruttore constructor = new Costruttore(3,"Products",true);

			System.out.println(constructor.category);
			System.out.println(constructor.id);

	}

}

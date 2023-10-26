package com.java.OOP.Ereditarietà;



public class SonClass extends FatherClass {



    @Override    //polimorfismo
	public int numRoom (){

		return 3;
	}


	public static void main(String[] args) {



		SonClass inherit = new SonClass();



		inherit.setNumStudents(25);
		inherit.setNameSchool("Graduate");


		System.out.println(inherit.getNameSchool());
		System.out.println(inherit.getNumStudents());
		System.out.println(inherit.numRoom());


	}




}




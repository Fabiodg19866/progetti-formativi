package com.java.OOP.Interfacce;


import com.java.OOP.AbstractClass.Abstract;
import com.java.OOP.Interfacce.Interfaccia;

public class ClassInterface implements Interfaccia {
	
	private double lato1;
	private double lato2;

	

	public double getLato1() {


		return lato1;
	}

	public void setLato1(double lato1) {


		this.lato1 = lato1;
	}

	public double getLato2() {

		return lato2;
	}

	public void setLato2(double lato2) {


		this.lato2 = lato2;
	}


    @Override
	public String city(){
		return "new York";


	}


	@Override
	public String nation (){

		return "U.S.A";

	}



	}
	
	
	
	
	
	
	
	
	
	
	



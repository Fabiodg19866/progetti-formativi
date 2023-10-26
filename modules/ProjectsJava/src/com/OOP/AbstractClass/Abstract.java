package com.java.OOP.AbstractClass;


import com.java.OOP.Interfacce.ClassInterface;

public abstract class Abstract {

	private String descrizione;
	private double prezzo;


	public abstract String id();

	public abstract String category();


	public String getDescrizione()
	{
		return descrizione;
	}

	public void setDescrizione(String descrizione) {

		this.descrizione = descrizione;
	}


	public double getPrezzo() {

		return prezzo;
	}

	public void setPrezzo(double prezzo) {

		this.prezzo = prezzo;
	}


}

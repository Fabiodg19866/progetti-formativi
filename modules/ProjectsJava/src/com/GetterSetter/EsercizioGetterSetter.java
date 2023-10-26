package com.GetterSetter;

public class EsercizioGetterSetter {

// calcolare la retribuzione oraria in base al mio guadagno mensile	
	// giorni lavorati 20   ore lavorate 160 mensili
	

	
	
	private int oreLavorate;   // incapsulamento
	private int giorniLavorati;
	private int retribuzioneOraria;
	private int stipendio;
	
	
	
	public int getStipendio() {

		return stipendio;
	}
	public void setStipendio(int stipendio) {

		this.stipendio = stipendio;
	}
	public int getoreLavorate() {

		return oreLavorate;
	}
	public void setoreLavorate(int oreLavorate) {

		this.oreLavorate = oreLavorate;
	}

	public int getgiorniLavorati() {
		
	return giorniLavorati;
		
	}


 public void setgiorniLavorati
		 (int giorniLavorati) {
	this.giorniLavorati = giorniLavorati;
}
 public int getretribuzioneOraria()
 {


 	return stipendio/oreLavorate;
 }


 public void setretribuzioneOraria(int retribuzioneOraria) {

		this.retribuzioneOraria= retribuzioneOraria;
 }


	public static void main(String[] args) {


		EsercizioGetterSetter retribuzioneOraria = new EsercizioGetterSetter();


		retribuzioneOraria.setStipendio(1750);
		retribuzioneOraria.setoreLavorate(160);

		System.out.println(	retribuzioneOraria.getretribuzioneOraria());


	}

}


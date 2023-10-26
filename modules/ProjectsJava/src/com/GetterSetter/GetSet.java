package com.GetterSetter;



public class GetSet {

	private String id;
	private String nome;
	private String cognome;
	
	
	public String getId() {

		return id;
	}
	public void setId(String id) {

		this.id = id;
	}
	public String getNome() {

		return nome;
	}
	public void setNome(String nome) {

		this.nome = nome;
	}
	public String getCognome() {

		return cognome;
	}
	public void setCognome(String cognome) {

		this.cognome = cognome;
	}


	public static void main(String[] args) {



		GetSet anagrafica = new GetSet();


		anagrafica.setId("id");
		anagrafica.setNome("anna");
		anagrafica.setCognome("angelo");


		System.out.println(anagrafica.getId());
		System.out.println(anagrafica.getNome());
		System.out.println(anagrafica.getCognome());



	}
	
	
	
	
	
	
}
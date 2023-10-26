package com.java.OOP.Costruttori;



public class EsercitazioneCostruttore {

	private String frontend;
	private String  backend;
	

		public EsercitazioneCostruttore(String frontend, String backend) {
	     
			this.frontend = frontend;
			this.backend = backend;
}


		public String  getFrontend() {

			return frontend;
		}


		public void setFrontend(String frontend) {

			this.frontend = frontend;
		}


		public String  getBackend() {

			return backend;
		}


		public void setBackend(String backend) {

			this.backend =backend;
		}
		
		
		public String toString() {

			return frontend + "   "+ backend;


		}




	public static void main(String[] args) {
		// TODO Auto-generated method stub


		EsercitazioneCostruttore sviluppo = new EsercitazioneCostruttore("javascript","java");



		System.out.println("frontend e backend :"+ sviluppo);
	}




}

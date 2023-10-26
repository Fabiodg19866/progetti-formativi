package com.Collections;


import java.util.ArrayList;
import java.util.List;
import java.util.Iterator;



public class EsercizioIterator {

	public static void main(String[] args) {


		List<String> oggetto = new ArrayList<String>();
				
				oggetto.add("paolo");
				oggetto.add("marco");
				oggetto.add("anna");
				oggetto.remove("luca");


				Iterator<String> it = oggetto.iterator();
			
					
					while (it.hasNext()) {
						
					String nomi= it.next();

			   System.out.println(nomi);


			  
				}
	}
}
		
	


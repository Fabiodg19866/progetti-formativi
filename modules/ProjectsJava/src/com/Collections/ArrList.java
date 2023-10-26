package com.Collections;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ArrList {




	public static void main(String[] args) {



		List<Integer> liste = new ArrayList<Integer>();

		liste.add(1);
		liste.add(2);
		liste.remove(0);


		for (int nomi : liste) {

			System.out.println(nomi);
		}

		List<String> lis = new ArrayList<String>();
		List<Integer> interi = new ArrayList<Integer>();



		lis.add("anna");
		lis.add("marco");
		lis.add("antonio");

		lis.set(1,"luca");


		Collections.sort(interi);

		for (String nomii : lis) {


			System.out.println(nomii);
			System.out.println(interi.size());


		}

		Collections.sort(lis);

		System.out.println(lis);
//System.out.println(lis.size());

	}







}
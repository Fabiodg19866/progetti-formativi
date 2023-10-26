package com.Array;



public class Matrice {

	public static void main(String[] args) {


		
		
		int[][]matrice = new int[5][5];
		
		for (int i = 0; i<matrice.length; i++) {
		for	(int j=0;j<matrice[i].length;j++){
				
				matrice[i][j]= i+j;
			
		}
		}
		
		for (int i = 0; i<matrice.length; i++) {
			for	(int j=0;j<matrice[i].length;j++){
			
			
			System.out.println(matrice[i][j]);
	}

}
		int[][] myNumbers = { {1, 2, 3, 4}, {5, 6, 7} };
		for (int i = 0; i < myNumbers.length; ++i) {
			for(int j = 0; j < myNumbers[i].length; ++j) {
				System.out.println(myNumbers[i][j]);
			}
		}



	}
}

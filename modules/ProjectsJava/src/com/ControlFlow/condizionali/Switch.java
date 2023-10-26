package com.ControlFlow.condizionali;

public class Switch {

    public static void main(String[] args) {


        int mese = 2;


        switch (mese) {

            case 1:
                System.out.println("Gennaio");
                break;
            case 2:
                System.out.println("Febbraio");
                break;
            case 3:
                System.out.println("Marzo");
                break;

            default:
                System.out.println("default");

                break;
        }
    }
}




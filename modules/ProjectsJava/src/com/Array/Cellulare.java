package com.Array;

public class Cellulare {

    private double credito;
    private int numeroChiamate;
    /**Creo un oggetto della classe Cellulare.
     @param creditoIniziale Credito iniziale.
     @param nChiamateIniziali Numero di chiamate iniziali.*/
    public Cellulare(double creditoIniziale, int nChiamateIniziali)
    {
        credito = creditoIniziale;
        numeroChiamate = nChiamateIniziali;
    }
    /**Ricarica il cellulare.
     @param unaRicarica Importo della ricarica.*/
    public void ricarica(double unaRicarica)
    {
        credito = credito + unaRicarica;
    }
    /**Effettua una chimata, aggiorna il credito, incrementa di una unità il
     numeroChiamate.
     @param minutiDurata Durata della chiamata.*/
    public void chiamata(double minutiDurata)
    {
        credito = credito - (0.20*minutiDurata);
        numeroChiamate = numeroChiamate + 1;
    }
    /**Restituisce il valore del credito.
     @return Credito.*/
    public double numero404()
    {
        return credito;
    }

    /**Restituisce il numero di chiamate.
     @return Numero di chiamate.*/
    public int getNumeroChiamate()
    {
        return numeroChiamate;
    }
    /**Azzera il numero di chiamate.*/
    public void azzeraChiamate()
    {
        numeroChiamate = 0;
    }
}





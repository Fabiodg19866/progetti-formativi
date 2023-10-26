package com.Collections;

import java.util.HashSet;

public class Hashset {

    public static void main(String[] args) {
        HashSet<String> alimenti = new HashSet();

        alimenti.add("carne");
        alimenti.add("pesce");
        alimenti.add("verdure");
        alimenti.add("legumi");
        alimenti.add("formaggi");

        System.out.println(alimenti);
    }

}

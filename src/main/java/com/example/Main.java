package com.example;

import org.teavm.interop.Export;

public class Main {
    @Export(name = "addNumbers")
    public static int addNumbers(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        // Call the function to ensure it's not optimized away
        System.out.println("Result: " + addNumbers(5, 3));
    }
}

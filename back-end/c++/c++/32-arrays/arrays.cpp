#include <iostream>

int main(){

    // array = a data structure that can hold multiple values
    //         values are accessed by an index number
    //          "kind of like a variable that holds multiple values"


    // we can declare the content of the array right away
    std::string car[] = {"Corvette", "Ferrari", "Mustang", "Evolution", "370z"};

    std::cout << car[0] << '\n';
    std::cout << car[1] << '\n';
    std::cout << car[2] << '\n';
    std::cout << car[3] << '\n';
    std::cout << car[4] << '\n';

    // or just declare the size of the array and add it's content after
    double numbers[5];

    numbers[0] = 3.14;
    numbers[1] = 17.9;
    numbers[2] = 9.99;
    numbers[3] = 52.5;
    numbers[4] = 69.420;

    std::cout << numbers[0] << '\n';
    std::cout << numbers[1] << '\n';
    std::cout << numbers[2] << '\n';
    std::cout << numbers[3] << '\n';
    std::cout << numbers[4] << '\n';


    return 0;
}
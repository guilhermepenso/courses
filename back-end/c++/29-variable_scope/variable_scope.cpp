#include <iostream>

int myNum = 3;

void printNum();

int main(){


    // Local Variables = declared inside a function or block {}
    // Global variables = declared outside of all functions

    int myNum = 1;
    std::cout << myNum << '\n';

    printNum();

    std::cout << ::myNum;

    return 0;
}

void printNum(){
    int myNum = 2;
    std::cout << myNum << '\n';
}
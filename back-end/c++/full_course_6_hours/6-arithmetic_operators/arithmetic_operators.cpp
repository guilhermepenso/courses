#include <iostream>

    /*
        Arithmetic operators = return the result of a specific arithmetic operation (+ - * /)  

        Order:
        1. Parenthesis
        2. Multiplications & Division
        3. Addition & Subtraction
    */

int main() {

    // int students = 6 - 5 + 4 * 3 / 2;
    //  students = 6 - 5 + 12 / 2;
    //  students = 6 - 5 + 6;
    //  students = 1 + 6;
    //  students = 7;
    // std::cout << students << '\n';

    double students = 6 - (5 + 4) * 3 / 2;
    //  students = 6 - 9 * 3 / 2;
    //  students = 6 - 27 / 2;
    //  students = 6 - 13.5;
    //  students = -7.5;
    std::cout << students << '\n';


    // students = students + 1;
    // students += 1;
    // students++
    //std::cout << students << '\n';

    // students = students - 1;
    // students -= 1;
    // students--;
    //std::cout << students << '\n';

    // students = students * 2;
    // students *= 2;
    //std::cout << students << '\n';

    // students = students / 2;
    // students /= 3;
    //std::cout << students << '\n';

    //int remainder = students % 3;
    //std::cout << remainder << '\n';



    return 0;
}
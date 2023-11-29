#include <iostream>
#include <ctime>

int main() {

    srand(time(NULL));

    // pseudo-random = NOT truly random (but close)

    // int num = rand(); //rand-> 0 to 32767

    // int num = rand() % 2; // module % number> limit the range with a number, but it counts 0

    int num1 = (rand() % 6) + 1; // (module % number) + 1> gives the exact number of choices with zero 
    int num2 = (rand() % 6) + 1;
    int num3 = (rand() % 6) + 1;

    std::cout << num1 << '\n';
    std::cout << num2 << '\n';
    std::cout << num3 << '\n';

    return 0;
}
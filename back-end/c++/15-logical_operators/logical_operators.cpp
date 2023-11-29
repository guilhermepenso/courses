#include <iostream>

    // && (and) = check if two conditions are true
    // || (or) = check if at least one of two conditions is true
    // !  (not) = reverse the logical state of its operand

int main() {


    int temp;
    bool sunny = false;

    std::cout << "Enter the temperature: ";
    std::cin >> temp;
    
    /*
    if(temp > 15 && temp < 30) {
        std::cout << "It's a good weather, please enjoy it!!";
    }
    else {
        std::cout << "It's a bad weather, take care";
    }
    */

    if(temp <= 15 || temp >= 30) {
        std::cout << "It's a bad weather, take care\n";
    }
    else {
        std::cout << "It's a good weather, please enjoy it!!\n";
    }

    if(!sunny) {
        std::cout << "It's sunny outside, please enjoy it!!";
    }
    else {
        std::cout << "It's cloudy outside, take care";
    }

    return 0;
}
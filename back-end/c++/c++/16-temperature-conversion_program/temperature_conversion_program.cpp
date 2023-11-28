#include <iostream>

int main() {

    double fahrenheit;
    double celsius;
    double conversion;
    int select;

    std::cout << "\n";
    std::cout << "|*************** TEMPERATURE CONVERSION ***************|\n";
    std::cout << "  |-------------------- MENU ------------------------|\n";
    std::cout << "    1. Celsius -> Fahrenheit\n";
    std::cout << "    2. Fahrenheit -> Celsius\n";
    std::cout << "    Select the conversion you want to do? [1/2]: ";
    std::cin >> select;
    std::cout << "  |--------------------------------------------------|\n";
    std::cout << "\n";

    std::cout << "  |------------------CONVERSION----------------------|\n";
    
    switch(select) {
        case 1:
            std::cout << "    Enter the Celsius Temperature: ";
            std::cin >> celsius;
            conversion = (celsius * 9/5) + 32;
            std::cout << "    " << celsius << " Degree Celsius = " << conversion << " Degree Fahrenheit\n";
            break;
        case 2:
            std::cout << "    Enter the Fahrenheit Temperature: ";
            std::cin >> fahrenheit;
            conversion = (fahrenheit - 32) * 5/9;
            std::cout << "    " << fahrenheit << " Degree Fahrenheit = " << conversion << " Degree Celsius\n";
            break;
        default:
            std::cout << "    Invalid conversion choice\n";
            break;
    }
    std::cout << "  |--------------------------------------------------|\n";
    std::cout << "|*******************************************************|\n";
    return 0;
}
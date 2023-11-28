#include <iostream>

int main () {

    int x; //declaração
    x = 5; //apontamento

    int y = 6; //declaração e apontamento

    int sum = x + y; //soma

    std::cout << "Soma: " << x << " + " << y << " = " << sum << '\n'; // We can make each variable and text divided by <<


    //integer (whole number)
    int age = 25;
    int year = 2023;
    int days = 7.5;
    std::cout << "Int: ";
    std::cout << days << '\n';

    //double (number including decimal)
    double price = 10.99;
    double gpa = 2.5;
    double temperature = 25.1;
    std::cout << "Double: " << price << '\n';

    //single character (more than one, makes it overflow)
    char grade = 'A';
    char initial = 'B';
    char dollarsign = '$';
    std::cout << "Char: "<< dollarsign << '\n';

    //boolean (true[1] or false[0])
    bool student = false;
    bool power = true;
    bool sale = false;
    std::cout << "Boolean: " << power << '\n';

    //string (object that represents a sequence of text)
    std::string name = "Guilherme";
    std::string day = "Sunday";
    std::string food = "Pizza";
    std::string address = "123 True Street";
    std::cout << "String: " << name << '\n';

    std::cout << "Hello " << name << ", nice to meet you!" << '\n';
    std::cout << "You're " << age << " Years old." << '\n';

    return 0;
}
#include <iostream>

// cout << (insertion operator)
// cin >> (extraction operator)

int main() {

    std::string name;
    int age;

    //std::cout << "Type your name: ";
    //std::cin >> name; // std::cin just works for string without spaces, to solve it we'll need std::getline(std::cin, variable_name)

    //std::cout << "Type your First and Last Name: ";
    //std::getline(std::cin, name); // getline needs to be empty, otherwise any value on std::cin before will substitute it, to solve it we need to use "std::getline(std::cin >> std::ws, variable_name)"
    
    std::cout << "Type your age: ";
    std::cin >> age; 

    std::cout << "Type your First and Last Name: ";
    std::getline(std::cin >> std::ws, name);


    std::cout << "Hello " << name << "!" << '\n';

    std::cout << "You're " << age << " years old" << '\n';

    return 0;
}
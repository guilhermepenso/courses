#include <iostream>

int main(){

    // sizeof() = determines the size in bytes of a:
    //            variable, data type, class, objects, etc.


    std::string name = "Guilherme";
    double PI = 3.14;
    char grade = 'F';
    bool student = true;
    
    char grades[] = {'A', 'B', 'C', 'D', 'E', 'F'};
    std::string students[] = {"Spongebob", "Patrick", "Squidward", "Sandy"};

    std::cout << sizeof(name) << " bytes\n";
    std::cout << sizeof(PI) << " bytes\n";
    std::cout << sizeof(grade) << " bytes\n";
    std::cout << sizeof(student) << " bytes\n";
    std::cout << sizeof(grades) << " bytes\n";

    // we can calculate the number of elements inside an array dividing it by the size of one element 
    std::cout << sizeof(grades)/sizeof(char) << " elements\n";
    std::cout << sizeof(students)/sizeof(std::string) << " elements\n";

    return 0;
}
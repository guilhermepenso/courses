#include <iostream>

double square(double length);
double cube(double length);

int main(){

    double lenght = 5.0;
    double area = square(lenght);
    double volume = cube(lenght);

    std::cout << "Area: " << area << "cm^2\n";
    std::cout << "Volume: " << volume << "cm^3\n";

    return 0;
}

double square(double length){
    double result = length * length;
    return result;
}

double cube(double length){
    double result = length * length * length;
    return result;
}
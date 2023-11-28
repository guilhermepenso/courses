#include <iostream>
#include <cmath>

int main() {

    double a;
    double b;
    double c;

    std::cout << "Type the value of A: ";
    std::cin >> a;

    std::cout << "Type the value of B: ";
    std::cin >> b;
    
    c = sqrt(pow(a, 2) + pow(b, 2));

    std::cout << "The hypotenuese of " << a << " and " << b << " is: " << c << '\n';

    return 0;
}
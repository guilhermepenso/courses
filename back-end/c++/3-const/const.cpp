#include <iostream>

int main() {
    //  Const especifica que o valor da variável é constante
    //  Fala para o compilador previnir qualquer alteração nela
    //  (read-only)
    
    const double PI = 3.14159;
    double radius = 10;
    double circumference = 2 * PI * radius;
    std::cout << circumference << "cm";

    // examples
    const int LIGHT_SPEED = 299792458;
    const int WIDTH = 1920;
    const int HEIGHT = 1080;
    const bool LOGIN = true;

    // se tentar alterar o valor, acontecerá um erro e o programa não irá rodar

    

    return 0;
}
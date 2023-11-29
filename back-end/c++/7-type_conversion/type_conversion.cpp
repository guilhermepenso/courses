# include <iostream>

    /*
        Type Conversion = Conversion a value of one data type to another
            Implicit = automatic
            Explicit = precede value with new data type (int)
    */



int main() {

    // double x = (int) 3.14; IMPLICIT & EXPLICIT
    // std::cout << x << '\n';

    // char x = 100; IMPLICIT
    // std::cout << x << '\n';

    // std::cout << (char) 100 << '\n'; EXPLICIT
    
    int correct = 8;
    int questions = 10;
    double score = correct / (double) questions * 100;
    std::cout << score << "%" << '\n';  

    return 0;
}
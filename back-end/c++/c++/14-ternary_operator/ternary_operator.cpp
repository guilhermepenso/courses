#include <iostream>

int main() {

    /*
        ternary operator ?: replacement to an if/else statement
        condition ? expression1 : expression2
    */

   // int grade = 75;

    /*
   if(grade >= 60) {
        std::cout << "You pass!!";
   }
   else {
        std::cout << "You fail..";
   }
    */

   
    // grade >= 60 ? std::cout << "You pass!!" : std::cout << "You fail..";

    // int number = 10;
    // number % 2 == 1 ? std::cout << "It's a odd number" : std::cout << "It's a even number";

    bool hungry = false;
    // hungry ? std::cout << "You're hungry, go get some snacks!!" : std::cout << "You're not hungry, just relax";

    std::cout << (hungry ? "You're hungry, go get some snacks!" : "You're not hungry, just relax");
    return 0;
}
#include <iostream>

int main() {

    std::string name;

    std::cout << "Enter your name: ";
    std::getline(std::cin, name);
    /*
    if(name.length() > 12){
        std::cout << "Your name can't be over 12 characters";
    }
    else if(name.empty()){
        std::cout << "You didn't enter your name";
    }
    else {
        std::cout << "Welcome " << name << '\n';
    }
    */
    /*
    name.clear();
    std::cout << "Welcome " << name << '\n';
    */

    /*
    name.append("@gmail.com");
    std::cout << "Welcome " << name << '\n';
    */

   /*
   std::cout << name.at(3);
    */

   /*
   name.insert(0, "@"); // first the positions, after coma the insertion
   std::cout << name;
    */

    /*
    std::cout << name.find(' ');
    */

    name.erase(0, 10); // first position until the last position
    std::cout << name;

    //to know more go to https://cplusplus.com/reference/string/string
    
    return 0;
}
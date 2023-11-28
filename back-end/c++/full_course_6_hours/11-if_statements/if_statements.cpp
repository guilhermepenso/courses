#include <iostream>

/*
    if statements = do something if a condition is true.
                    if not, then don't do it.
*/

int main(){

    int age;

    std::cout << "Enter your age: ";
    std::cin >> age;

    if (age >= 18 and age < 100){
        std::cout << "You can drive and drink alcohol! :D";
    }
    else if(age < 0){
        std::cout << "WTF, you're not even born, stop lying!!";
    }
    else if(age >= 100){
        std::cout << "Maybe you shouldn't be driving and drinking alcohol anymore... ;-;";
    }
    else{
        std::cout << "You're not old enough to drive and drink alcohol... D:";
    }

    return 0;
}
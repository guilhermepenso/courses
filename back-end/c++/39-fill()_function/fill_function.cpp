#include <iostream>

int main(){

    // fill() = Fills a range of elements with a specified value
    //          fill(begin, end, value)

    const int SIZE = 99;

    // std::string foods[100];
    std::string foods[SIZE];
    

    // fill(foods, foods + 100, "pizza");
    // fill(foods, foods + SIZE, "pizza");
    fill(foods, foods + (SIZE / 3), "pizza");
    fill(foods + (SIZE / 3), foods + (SIZE / 3 ) * 2, "hamburguers");
    fill(foods + (SIZE / 3) * 2, foods + SIZE, "hotdogs");


    for(std::string food : foods){
        std::cout << food << '\n';
    }
    return 0;
}
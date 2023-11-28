#include <iostream>

int main () {

    for (int i = 1; i <= 20; i++) {
        if (i== 13){
        //  break;  // stop current iteration
            continue; // skip current iteration
        }
        std::cout << i << '\n';
    }

    return 0;
}
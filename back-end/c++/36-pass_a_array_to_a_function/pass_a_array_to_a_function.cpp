#include <iostream>

/* wont work cuz of the array passing to the function turning into a pointer, and not being able to run through the array in the for loop

double getTotal(double prices[]);

int main(){

    double prices[] = {49.99, 15.05, 75, 9.99};
    double total = getTotal(prices);


    std::cout << "$" << total;

    return 0;
}
double getTotal(double prices[]){
    double total = 0;

    for(int i = 0; i < sizeof(prices)/ sizeof(prices[0]); i++){
        total += prices[i];
    }
    
    return total;
*/

/* the way to solve it is passing another parameter inside the function with the size of the array*/

double getTotal(double prices[], int size);

int main(){

    double prices[] = {49.99, 15.05, 75, 9.99};
    int size = sizeof(prices) / sizeof(prices[0]);
    double total = getTotal(prices, size);

    std::cout << "$" << total;

    return 0;
}
double getTotal(double prices[], int size){
    double total = 0;

    for(int i = 0; i < size; i++){
        total += prices[i];
    }
    
    return total;
}
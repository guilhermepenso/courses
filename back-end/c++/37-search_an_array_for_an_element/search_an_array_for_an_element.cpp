#include <iostream>

/*
int searchArray(int array[], int size, int element);

int main(){

    int numbers[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15}; // array of int 
    int size = sizeof(numbers) / sizeof(numbers[0]); // size of the array to search
    int index; // index of the position of the element we want to find
    int myNum; // user input number to search for

    std::cout << "Enter element to search for: " << "\n";
    std::cin >> myNum;

    index= searchArray(numbers, size, myNum);

    if(index != -1){
        std::cout << myNum << " is at index " << index << "\n";
    }
    else{
        std::cout << myNum << " is not in the array\n";
    }

    return 0;
}

int searchArray(int array[], int size, int element){

    for (int i = 0; i < size; i++){ // search in the array until the total size of it
        if(array[i] == element){ // find the element and return it's position 
            return i;
        }

    }
    return -1; // -1 means in programming as something not found
}
*/

int searchArray(std::string array[], int size, std::string element);

int main(){

    std::string foods[] = {"pizza", "hamburguer", "hotdog", "coxinha", "brigadeiro"}; // array of int 
    int size = sizeof(foods) / sizeof(foods[0]); // size of the array to search
    int index; // index of the position of the element we want to find
    std::string myFood; // user input number to search for

    std::cout << "Enter element to search for: " << "\n";
    std::getline(std::cin, myFood);

    index= searchArray(foods, size, myFood);

    if(index != -1){
        std::cout << myFood << " is at index " << index << "\n";
    }
    else{
        std::cout << myFood << " is not in the array\n";
    }

    return 0;
}

int searchArray(std::string array[], int size, std::string element){

    for (int i = 0; i < size; i++){ // search in the array until the total size of it
        if(array[i] == element){ // find the element and return it's position 
            return i;
        }

    }
    return -1; // -1 means in programming as something not found
}
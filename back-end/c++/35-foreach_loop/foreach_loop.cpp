#include <iostream>

int main(){

    // foreach loop = loop that eases the traversal over a n iterable data set

    // std::string students[] = {"Spongebob", "Patrick", "Squidward", "Sandy"};

    // for(std::string student : students){
    //    std::cout << student << '\n';}
    
    int grades[] = {65, 72, 81, 93};

    for(int grade : grades){
        std::cout << grade << '\n';
    }

    return 0;
}
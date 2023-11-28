#include <iostream>

// you can just declare the function and do it after the int main
// void happyBirthday(); 

void happyBirthday(std::string name, int age){
    std::cout << "Happy Birthday to "<< name << "!\n";
    std::cout << "Happy Birthday to "<< name << "!\n";
    std::cout << "Happy Birthday dear "<< name << "!\n";
    std::cout << "Happy Birthday to "<< name << "!\n\n";
    std::cout << "Congratulations " << name << ", you're " << age << " years old now!\n";
}


int main(){

    // function = a block of reusable code
    // ALWAYS DECLARE BEFORE MAIN FUNCTION

    std::string name = "Guilherme";
    int age = 25;

    happyBirthday(name, age);
    happyBirthday(name, age);
    happyBirthday(name, age);

    return 0;
}

/*
void happyBirthday(std::string name, int age){
    std::cout << "Happy Birthday to "<< name << "!\n";
    std::cout << "Happy Birthday to "<< name << "!\n";
    std::cout << "Happy Birthday dear "<< name << "!\n";
    std::cout << "Happy Birthday to "<< name << "!\n\n";
    std::cout << "Congratulations " << name << ", you're " << age << " years old now!\n";
}
*/
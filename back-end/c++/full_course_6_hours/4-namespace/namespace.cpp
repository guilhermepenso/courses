// Namespace = provides a solution for preventing name conflicts in large projects. 
// Each entity needs a unique name. A namespace allows for identically named sntities as longe as the namespace are different

#include <iostream>

namespace first{
    int x = 2;
}

namespace second{
    int x = 3;
}

int main(){

    int x = 1;

    // work with no local variable defined

    // for some reason, using in block is not working...
    using namespace first;

    std::cout << "Block NameSpace First: " << x << '\n';
    

    using namespace second;

    std::cout << "Block NameSpace Second: " << x << '\n';

    std::cout << "Local: " << x << '\n'; 
    std::cout << "Inline NameSpace First: " << first::x << '\n';
    std::cout << "Inline NameSpace Second: " << second::x << '\n';

    using namespace std;

    cout << x;


    return 0;
}
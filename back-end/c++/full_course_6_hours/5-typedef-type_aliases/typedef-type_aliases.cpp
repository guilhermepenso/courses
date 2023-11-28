#include <iostream>
#include <vector>

    /* 
        typedef = reserved keyword used to create an additional name (alias) for another data type.
        New identifier for an existing type helps with readability and reduces typos. 
        Use it when there's a clear benefit
        Replaced with 'using' (work better w/ templates)
    */

    // typedef std::vector<std::pair<std::string, int>> pairlist_t
    // typedef std::string text_t;
    // typedef int number_t;

    using text_t = std::string;
    using number_t = int;

int main() {
    number_t age = 25;
    text_t firstName = "Guilherme";

    std::cout << firstName << '\n';
    std::cout << age << '\n';

    return 0;
}
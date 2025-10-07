#include <iostream>
using namespace std;

void palindromeNumber(int n)
{
    int dup = n; 
    int rev = 0;
    while (n != 0)
    {
        int lastNumber = n % 10;
        rev = (rev * 10) + lastNumber;
        n = n / 10;
    }
    if (rev == dup)
        cout << "Yes";
    else
        cout << "No";
}

int main(){

    palindromeNumber(1331);
    return 0;
}

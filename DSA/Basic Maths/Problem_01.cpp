#include <iostream>
using namespace std;

//Count the number of digit in number.
// void countNumbers(int n)
// {
//     int count = 0;
//     while (n > 0)
//     {
//         int lastNum = n % 10;
//         count  = count +1;
//         n /= 10;
//     }
//     cout << count << endl;
// }


//Reverse The Number
void reverseNumber(int n)
{
    int rev = 0;
    while (n > 0)
    {
        int lastNum = n % 10;
        rev  = rev * 10 + lastNum;
        n /= 10;
    }
    cout << rev << endl;
}

int main(){
    // countNumbers(234567)
    reverseNumber(209889);
    return 0;
}

#include <iostream>
using namespace std;

void ArmstrongNumber(int n)
{
    int dup = n; 
    int sum = 0;
    while (n > 0)
    {
        int lastNumber = n % 10;
        sum = sum + lastNumber*lastNumber*lastNumber;
        n = n / 10;
    }
    if (sum == dup)
        cout << "Yes";
    else
        cout << "No";
}

int main(){

    ArmstrongNumber(371);
    return 0;
}

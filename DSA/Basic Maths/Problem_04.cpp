#include <iostream>
using namespace std;

bool isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i <= n / i; ++i) {
        if (n % i == 0) 
        return false;
    }
    return true;
}

int main() {
    int n, count=0;
    cout << "Enter the Number: ";
    cin>>n;

    
    for (int i = 2; i <= n; i++) {
        if (isPrime(i)){
          cout<< i <<" ";
            count++;
          }  
      }

    cout << "\nTotal prime numbers = " << count;
    return 0;

    // bool isP = checkPrime(n);
    // cout << n << (isP ? "is Prime" : "is Not Prime") << "\n";
    return 0;
}

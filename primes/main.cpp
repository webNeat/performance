#include <cmath>
#include <iostream>
using namespace std;

bool isPrime(int n) {
  int i = sqrt(n);
  while (i > 1) {
    if (n % i == 0)
      return false;
    i --;
  }
  return true;
}

int main() {
  int count, n, found = 0;
  cin >> count;
  for (int i = 0; i < count; i++) {
    cin >> n;
    if (isPrime(n))
      found ++;
  }
  cout << found << endl;
  return 0;
}
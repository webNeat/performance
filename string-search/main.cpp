#include <string>
#include <iostream>
using namespace std;

int main() {
  string text, word;
  int count, found = 0;
  cin >> text >> count;
  for (int i = 0; i < count; i++) {
    cin >> word;
    if (text.find(word) != string::npos)
      found ++;
  }
  cout << found << endl;
  return 0;
}
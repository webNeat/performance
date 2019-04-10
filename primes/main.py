from math import sqrt

def isPrime(n):
  for i in range(2, int(sqrt(n)) + 1):
    if n % i == 0:
      return False
  return True

found = 0
count = int(input())
n = 0
for i in range(count):
  n = int(input())
  if isPrime(n):
    found = found + 1
print(found)
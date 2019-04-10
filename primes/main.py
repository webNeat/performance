from math import sqrt

def isPrime(n):
  i = int(sqrt(n))
  while i > 1:
    if n % i == 0:
      return False
    i = i - 1
  return True

found = 0
count = int(input())
n = 0
for i in range(count):
  n = int(input())
  if isPrime(n):
    found = found + 1
print(found)
found = 0;
text = input()
count = int(input())
for i in range(count):
  word = input()
  if word in text:
    found = found + 1
print(found)
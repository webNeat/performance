<?php
function isPrime($n) {
  $i = (int) sqrt($n);
  while ($i > 1) {
    if ($n % $i == 0)
      return false;
    $i --;
  }
  return true;
}

$found = 0;
$count = (int) readline();
$n = 0;
for ($i = 0; $i < $count; $i ++) {
  $n = (int) readline();
  if (isPrime($n))
    $found ++;
}
echo $found, PHP_EOL;
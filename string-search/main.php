<?php
$found = 0;
$text = readline();
$count = (int) readline();
for ($i = 0; $i < $count; $i ++) {
  $word = readline();
  if (strpos($text, $word) !== false)
    $found ++;
}
echo $found, PHP_EOL;
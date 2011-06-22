<?php
$term = $_POST['searchStr'];
$get = file_get_contents("http://www.vtc.com/modules/products/titleList.php?searchStr=$term");
print_r($get);
?>
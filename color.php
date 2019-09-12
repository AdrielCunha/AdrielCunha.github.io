<?php 
	$c = str_split('0123456789ABCDEF');
	$color = '';

	for ($i=0; $i < 6; $i++) { 
		$rand = rand(0, 16);
		$color .= $c[$rand];
	}
	
?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body bgcolor="<?php echo $color?>">

</body>
</html>
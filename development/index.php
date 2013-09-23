<?php
	// Compilation mode, which must be one of "RAW", "WHITESPACE", "SIMPLE", or "ADVANCED".
	// The default value is "SIMPLE".
	$COMPILE_MODE = isset( $_GET['mode'] ) ? $_GET['mode'] : 'SIMPLE';
?>

<?php include "php/path.php"; ?>

<!DOCTYPE html>
<html>

	<head>
		<title>A Plovr Project</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1">
	  <meta name="keywords" content="">
	  <meta name="description" content="">

		<meta content="" property="og:url">
		<meta content="" property="og:title">
		<meta content="" property="og:description">
		<meta content="/img/misc/facebook.png" property="og:image">

	 	<script>(function(w){var dpr=((w.devicePixelRatio===undefined)?1:w.devicePixelRatio);if(!!w.navigator.standalone){var r=new XMLHttpRequest();r.open('GET','php/retinaimages.php?devicePixelRatio='+dpr,false);r.send()}else{document.cookie='devicePixelRatio='+dpr+'; path=/'}})(window)</script>

	  <link rel="apple-touch-icon" href="/img/misc/icon-iphone.png">
		<link rel="apple-touch-icon" sizes="72x72" href="/img/misc/icon-ipad.png">
		<link rel="apple-touch-icon" sizes="114x114" href="/img/misc/icon-iphone4.png">
		<link rel="apple-touch-icon" sizes="144x144" href="/img/misc/icon-ipad3.png">
	  <link rel="shortcut icon" href="/img/misc/favicon.ico">
	  <link rel="stylesheet" href="/css/main.css" media="screen">
	</head>

	<body>
		<!-- third-party -->
		<script src="/js/third-party/modernizr-latest.js"></script>
		<script src="/js/third-party/greensock/TweenMax.min.js"></script>
		<script src="/js/third-party/greensock/plugins/CSSPlugin.min.js"></script>
		<script src="/js/third-party/greensock/plugins/ScrollToPlugin.min.js"></script>
		<script src="/js/third-party/greensock/plugins/ThrowPropsPlugin.min.js"></script>
		<script src="/js/third-party/greensock/utils/Draggable.min.js"></script>

		<!-- project js -->
		<!--<script src="js/compiled.js"></script>-->
		<script src="http://localhost:9810/compile?id=test&mode=<?php echo $COMPILE_MODE ?>"></script>

		<!-- execute the main js-->
		<script>
			var config = {
				basePath: '<?php echo URLADDR; ?>'
			}

			example.main( config );
		</script>
	</body>
	

</html>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>search vtc</title>
  <link rel="stylesheet" type="text/css" media="screen" href="vtc.css" />
  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script>
  <script type="text/javascript" src="search.js"></script>
  <!--[if IE]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
</head>
<body>
  <header id="fixedDiv">
    <form>
       <input type="text" name="searchStr" id="searchStr" x-webkit-speech speech onwebkitspeechchange="foo()" />
       <button <?php //$chrome = stripos($_SERVER['HTTP_USER_AGENT'], 'chrome'); if ($chrome > 0) { echo 'disabled=true'; } ?> >Find It</button>
     </form>
  </header>
 <div id="container"></div>
  <div id="answer"><p>What would you like to learn today?</p></div>
</body>
</html>
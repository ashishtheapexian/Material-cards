# Material-cards


<img src="https://raw.githubusercontent.com/ashishtheapexian/Material-cards/master/Preview.gif">

<h4>Card Attributes</h4>

<b>#IMG_SRC#</b> Card image source url <br>
e.g. https://raw.githubusercontent.com/ashishtheapexian/test/master/user.png <br><br>

<b>#CARD_LINK_LEFT#</b> Left button link source (src)<br>
e.g. https://www.linkedin.com/in/ashish-sahay-the-apexian/ <br>
javascript:alert('Hello world!')<br>
<b>#CARD_LINK_RIGHT#</b> Right button link source (src)<br>
e.g. https://www.linkedin.com/in/ashish-sahay-the-apexian/ <br>
javascript:alert('Hello world!')<br>
<b>#CARD_LINK_TEXT_LEFT#</b> Left button Label text<br>
<b>#CARD_LINK_BACKGROUND_COLOR_LEFT#</b> Left button background color <br>
e.g. ff6e40, ffff00<br><br>

<b>#CARD_LINK_BACKGROUND_COLOR_RIGHT#</b> Right button background color<br>
e.g. ff6e40, ffff00<br><br>
 
<b>#CARD_LINK_TEXT_RIGHT#</b> Right button Label text<br>
<b>#CARD_LINK_ICON_POSITION_RIGHT#</b> Right button icon position <br>
e.g. left, right<br><br>
<b>#CARD_LINK_ICON_POSITION_LEFT#</b> Left button icon position <br>
e.g. left, right<br><br>
<b>#CARD_LINK_ICON_LEFT#</b> Left button icon<br>
e.g. fa-check, fa-user<br><br>
<b>#CARD_LINK_ICON_RIGHT#</b> Right button icon<br>
e.g. fa-check, fa-user<br><br>
<b>#CARD_REVEAL_CONTENT#</b> Card content After the fact (Text on flip card)<br>
<b>#LINK_FONT_COLOR_LEFT#</b> Left button font color <br>
e.g. ff6e40, ffff00<br><br>
<b>#LINK_FONT_COLOR_RIGHT#</b> Right button font color <br>
e.g. ff6e40, ffff00<br><br>

<h4>Sample query</h4>

SELECT Initcap(ename) CARD_TITLE, 
       CASE WHEN dp.deptno>20 THEN 
			'https://raw.githubusercontent.com/ashishtheapexian/test/master/user.png' 
        ELSE 
			'https://www.shareicon.net/data/2017/01/06/868320_people_512x512.png' 
		END IMG_SRC, 
		'#' CARD_LINK_LEFT, 
		'#' CARD_LINK_RIGHT, 
		'Left Link' CARD_LINK_TEXT_LEFT, 
		'red' CARD_LINK_BACKGROUND_COLOR_LEFT, 
		'green' CARD_LINK_BACKGROUND_COLOR_RIGHT, 
		CASE WHEN dp.deptno >20 THEN 'Right Link' 
			ELSE 'Link' END  CARD_LINK_TEXT_RIGHT, 
		CASE WHEN dp.deptno >20 THEN 'right' 
			ELSE 'left' END CARD_LINK_ICON_POSITION_RIGHT, 
		CASE WHEN dp.deptno <20 THEN 'right' 
			ELSE 'left' END CARD_LINK_ICON_POSITION_LEFT, 
		'fa-check' CARD_LINK_ICON_LEFT, 
		'fa-check' CARD_LINK_ICON_RIGHT, 
		'<b>Employee No.:-</b>'|| empno || ' <br> '|| 
		'<b>JOB :- </b>'|| job || ' <br> ' || 
		'<b>Dept no. :-</b>'|| dp.deptno || ' <br> ' || 
		'<b>Dept Name. :-</b>'|| dp.dname || ' <br> ' || 
		'<b>Salary :- </b>'|| sal || ' <br> '|| 
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' 
		CARD_REVEAL_CONTENT, 
		CASE WHEN dp.deptno = 10 THEN 'ff6e40' 
		WHEN dp.deptno = 20 THEN 'c5cae9' 
		WHEN dp.deptno = 30 THEN 'ff6e40' 
		WHEN dp.deptno = 40 THEN 'ffff00' 
		END 
		LINK_FONT_COLOR_LEFT, 
		CASE WHEN dp.deptno = 10 THEN '1e88e5' 
		WHEN dp.deptno = 20 THEN '070912' 
		WHEN dp.deptno = 30 THEN '3f4da6' 
		WHEN dp.deptno = 40 THEN '1e88e5' 
		END 
		LINK_FONT_COLOR_RIGHT 
FROM emp emp 
inner join dept dp 
ON dp.deptno = emp.deptno 
ORDER BY 1


<a href ="https://apex.oracle.com/pls/apex/f?p=65172:10:701905050043074:::::"> <h4>Demo</h4></a>

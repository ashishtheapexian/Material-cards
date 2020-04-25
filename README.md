# Material Cards Region plugin (1.0)


<img src="https://raw.githubusercontent.com/ashishtheapexian/Material-cards/master/Preview.gif">

<h4>Card Attributes</h4>

<b>#IMG_SRC#</b> Card image source url <br>
e.g. https://raw.githubusercontent.com/ashishtheapexian/test/master/user.png <br><br>

<b>#LINK_L#</b> Left button link source (src)<br>
e.g. https://www.linkedin.com/in/ashish-sahay-the-apexian/ <br>
javascript:alert('Hello world!')<br>
<b>#LINK_R#</b> Right button link source (src)<br>
e.g. https://www.linkedin.com/in/ashish-sahay-the-apexian/ <br>
javascript:alert('Hello world!')<br>
<b>#LINK_TEXT_L#</b> Left button Label text<br>
<b>#LINK_BG_COLOR_L#</b> Left button background color <br>
e.g. ff6e40, ffff00<br><br>

<b>#LINK_BG_COLOR_R#</b> Right button background color<br>
e.g. ff6e40, ffff00<br><br>
 
<b>#LINK_TEXT_R#</b> Right button Label text<br>
<b>#LINK_ICON_POS_R#</b> Right button icon position <br>
e.g. left, right<br><br>
<b>#LINK_ICON_POS_L#</b> Left button icon position <br>
e.g. left, right<br><br>
<b>#LINK_ICON_L#</b> Left button icon<br>
e.g. fa-check, fa-user<br><br>
<b>#LINK_ICON_R#</b> Right button icon<br>
e.g. fa-check, fa-user<br><br>
<b>#REVEAL_CONTENT#</b> Card content After the fact (Text on flip card)<br>
<b>#LINK_FONT_L#</b> Left button font color <br>
e.g. ff6e40, ffff00<br><br>
<b>#FONT_R#</b> Right button font color <br>
e.g. ff6e40, ffff00<br><br>

<h4>Sample query</h4>

```sql
SELECT Initcap(ename) CARD_TITLE, 
       CASE WHEN dp.deptno>20 THEN 
			'https://raw.githubusercontent.com/ashishtheapexian/test/master/user.png' 
        ELSE 
			'https://www.shareicon.net/data/2017/01/06/868320_people_512x512.png' 
		END IMG_SRC, 
		'#' LINK_L, 
		'#' LINK_R, 
		'Left Link' LINK_TEXT_L, 
		'red' LINK_BG_COLOR_L, 
		'green' LINK_BG_COLOR_R, 
		CASE WHEN dp.deptno >20 THEN 'Right Link' 
			ELSE 'Link' END  LINK_TEXT_R, 
		CASE WHEN dp.deptno >20 THEN 'right' 
			ELSE 'left' END LINK_ICON_POS_R, 
		CASE WHEN dp.deptno <20 THEN 'right' 
			ELSE 'left' END LINK_ICON_POS_L, 
		'fa-check' LINK_ICON_L, 
		'fa-check' LINK_ICON_R, 
		'<b>Employee No.:-</b>'|| empno || ' <br> '|| 
		'<b>JOB :- </b>'|| job || ' <br> ' || 
		'<b>Dept no. :-</b>'|| dp.deptno || ' <br> ' || 
		'<b>Dept Name. :-</b>'|| dp.dname || ' <br> ' || 
		'<b>Salary :- </b>'|| sal || ' <br> '|| 
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' 
		REVEAL_CONTENT, 
		CASE WHEN dp.deptno = 10 THEN 'ff6e40' 
		WHEN dp.deptno = 20 THEN 'c5cae9' 
		WHEN dp.deptno = 30 THEN 'ff6e40' 
		WHEN dp.deptno = 40 THEN 'ffff00' 
		END 
		LINK_FONT_L, 
		CASE WHEN dp.deptno = 10 THEN '1e88e5' 
		WHEN dp.deptno = 20 THEN '070912' 
		WHEN dp.deptno = 30 THEN '3f4da6' 
		WHEN dp.deptno = 40 THEN '1e88e5' 
		END 
		LINK_FONT_R 
FROM emp emp 
inner join dept dp 
ON dp.deptno = emp.deptno 
ORDER BY 1;
```


<a href ="https://apex.oracle.com/pls/apex/ashish_portfolio/r/93690/7?session=702224589747760"> <h4>Demo</h4></a>

<a href="https://www.ashishsahay.com/2020/03/material-cards-region-plugin-10.html"><b>Blog</b> for details</a>


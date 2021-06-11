![](https://img.shields.io/badge/Plug--in_Type-Region-yellow.svg) ![](https://img.shields.io/badge/APEX-19.2-success.svg) ![](https://img.shields.io/badge/APEX-20.1-success.svg) ![](https://img.shields.io/badge/APEX-20.2-success.svg) ![](https://img.shields.io/badge/APEX-21.1-success.svg)

# Material Cards Region plugin (1.0)


<img src="https://raw.githubusercontent.com/ashishtheapexian/Material-cards/master/Preview.gif">

<h4>Card Attributes</h4>

|Attribute| Description| Value |
|----------|------------|-------|
|#IMG_SRC#| Card image source url | e.g. https://raw.githubusercontent.com/ashishtheapexian/test/master/user.png|
|#LINK_L#| Left button link source (src)|e.g. https://www.linkedin.com/in/ashish-sahay-the-apexian/ Or javascript:alert('Hello world!');|
|#LINK_R#| Right button link source (src)|e.g. https://www.linkedin.com/in/ashish-sahay-the-apexian/ Or javascript:alert('Hello world!');|
|#LINK_TEXT_L# | Left button Label text| Linked In|
|#LINK_BG_COLOR_L#| Left button background color | e.g. ff6e40, ffff00 ||
|#LINK_BG_COLOR_R#| Right button background color| e.g. ff6e40, ffff00|
|#LINK_TEXT_R#| Right button Label text | |
|#LINK_ICON_POS_R#| Right button icon position | e.g. left, right|
|#LINK_ICON_POS_L#|Left button icon position| e.g. left, right |
|#LINK_ICON_L#| Left button icon | e.g. fa-check, fa-user |
|#LINK_ICON_R#| Right button icon | e.g. fa-check, fa-user |
|#REVEAL_CONTENT# | Card content After the fact (Text on flip card)| |
|#LINK_FONT_L#| Left button font color | e.g. ff6e40, ffff00 |
|#FONT_R#| Right button font color | e.g. ff6e40, ffff00 |

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


<a href ="https://apex.oracle.com/pls/apex/ashish_portfolio/r/93690/7"> <h4>Demo</h4></a>

<a href="https://blogs.ontoorsolutions.com/post/material-cards-region-plugin/"><b>Blog</b> for details</a>


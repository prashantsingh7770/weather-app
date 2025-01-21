Experiment No.1 
HOMEPAGE 
HTML 
<!DOCTYPE html> 
<html lang="en"> 
<head> 
    <meta charset="UTF-8"> 
<metaname="viewport"content="width=device-width,     
initialscale=1.0"> 
    <title>homepage</title> 
    <link rel="stylesheet" href="homepage.css"> 
</head> 
<body> 
    <table border="black"> 
        <tr id="head"> 
            <th >logo</th> 
            <th colspan="4">Web site name</th> 
        </tr> 
        <tr id="subhead"> 
            <th>home</th> 
            <th>login</th> 
            <th>registrstion</th> 
            <th>cataloge</th> 
            <th>cart</th> 
        </tr> 
        <tr> 
            <td>CSE</td> 
            <td align="center" rowspan="4" colspan="4"> 
      description of the website</td> 
        </tr> 
        <tr> 
            <td>ECE</td> 
        </tr> 
        <tr> 
            <td>EEE</td> 
        </tr> 
        <tr> 
            <td>CIVIL</td> 
        </tr> 
    </table> 
</body> 
</html> 
CSS 
#head{ 
    background-color: rgb(247, 145, 13); 
} 
#subhead{ 
    background-color: rgb(233, 227, 219); 
} 
OUTPUT. 
 
Experiment No.2 
LOGINPAGE 
HTML 
<!DOCTYPE html> 
<html lang="en"> 
<head> 
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial
scale=1.0"> 
    <title>loginpage</title> 
    <link rel="stylesheet" href="loginpage.css"> 
</head> 
<body> 
    <table border="black"> 
        <tr id="head"> 
            <th>logo</th> 
            <th colspan="4">Web site name</th> 
        </tr> 
        <tr id="subhead"> 
            <th>home</th> 
            <th>login</th> 
            <th>registrstion</th> 
            <th>cataloge</th> 
            <th>cart</th> 
        </tr> 
        <tr> 
            <td>CSE</td> 
            <td rowspan="4" colspan="4"> 
                <forms> 
                    <p>login page</p> 
                    <label for="nam">user name:  </label> 
                    <input type="text" id="nam" ><br> 
                    <label for="pass">password:</label> 
                    <input type="password" id="pass"><br> 
                    <button type="submit"> submit</button> 
                    <button type="reset">reboot</button> 
                </forms> 
            </td> 
        </tr> 
        <tr> 
            <td>ECE</td> 
        </tr> 
        <tr> 
            <td>EEE</td> 
        </tr> 
        <tr> 
<td>CIVIL</td> 
</tr> 
</table> 
</body> 
</html> 
CSS 
#head{ 
background-color: rgb(247, 145, 13); 
} 
#subhead{ 
background-color: rgb(233, 227, 219); 
} 
button{ 
color:red; 
} 
OUTPUT. 
Experiment No.3 
CATOLOGUE PAGE 
HTML. 
<!DOCTYPE html> 
<html lang="en"> 
<head> 
<meta charset="UTF-8"> 
<meta name="viewport" content="width=device-width, 
initial-scale=1.0"> 
<link rel="stylesheet" href="EXP3.css"> 
<title>catologuepage</title> 
</head> 
<body> 
<table border="black"> 
<tr id=”dark”> 
            <th>Logo</th> 
            <th colspan="4">Website Name</th> 
         </tr> 
         <tr id=”light”> 
            <th>Home</th> 
            <th>Login</th> 
            <th>Registration</th> 
            <th>Catalogue</th> 
            <th>Cart</th> 
         </tr> 
            <tr> 
               <td> 
                <table> 
                    <tr> 
                        <td>CSE<br><br><br></td> 
                    </tr> 
                    <tr> 
                        <td>ECE<br><br><br></td> 
                    </tr> 
                    <tr> 
                        <td>EEE<br><br><br></td> 
                    </tr> 
                    <tr> 
                        <td>CIVIL<br><br><br></td> 
                    </tr> 
                </table> 
               </td> 
                <td> 
                    <table> 
                        <tr> 
                            <td><img height="50px" 
width="50px" src="xml.jpeg" src="xml book"> </td> 
                        </tr> 
                        <tr> 
                            <td><img height="50px" 
width="50px" src="ai.jpeg" alt="AI book"></td> 
                        </tr> 
                        <tr> 
                            <td><img height="50px" 
width="50px" src="java.jpeg" alt="java book"></td> 
                        </tr> 
                        <tr> 
                            <td><img height="50px" 
width="50px" src="htm.jpeg" alt="html book"></td> 
                        </tr> 
                    </table> 
                </td> 
                <td> 
                    <table> 
                        <tr> 
                            <td>BOOK:XML 
BIBLE<br>AUTHOR:WINSTON<br>PUBLICATION:WIELY </td> 
                        </tr> 
                        <tr> 
                            <td>BOOK:JAVA 
2<br>AUTHOR:WATSON<br>PUBLICATION:PRINCETONHALL</td> 
                        </tr> 
                        <tr> 
                            
<td>BOOK:AI<br>AUTHOR:S.RUSSEL<br>PUBLICATION:BPB 
BPUBLICATION</td> 
                        </tr>                        <tr> 
                            
<td>BOOK:AI<br>AUTHOR:S.RUSSEL<br>PUBLICATION:SAMPUBLICATION
 </td> 
                        </tr> 
                    </table> 
                </td> 
                <td> 
                    <table> 
                          <tr> 
                            <td>$40.5<br><br><br></td> 
                          </tr> 
                          <tr> 
                            <td>$63<br><br><br></td> 
                          </tr>                          
<tr> 
                            <td>$35.5<br><br><br></td> 
                          </tr>                          
<tr> 
                            <td>$50<br><br><br></td> 
                          </tr> 
                    </table> 
                </td> 
                <td> 
                    <table> 
                        <tr> 
                            <td><button>Add to 
Cart</button><br><br><br></td> 
                        </tr> 
                        <tr> 
                            <td><button>Add to 
Cart</button><br><br><br></td> 
                        </tr> 
                        <tr> 
                            <td><button>Add to 
Cart</button><br><br><br></td> 
                        </tr> 
                        <tr> 
<td><button>Add to 
Cart</button><br><br><br></td> 
</tr> 
</table> 
</td> 
</tr> 
<tr> 
</tr> 
</table> 
</body> 
</html> 
CSS. 
button{ 
background-color: rgb(202, 184, 30); 
} 
#dark{ 
background-color: rgb(247, 145, 13); 
} 
#light{ 
background-color: rgb(233, 227, 219); 
} 
OUTPUT.

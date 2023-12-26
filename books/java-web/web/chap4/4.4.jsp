<%--
  Created by IntelliJ IDEA.
  User: lx
  Date: 2018/6/21
  Time: 21:45
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>来访统计</title>
</head>
<body>
   <%!
     int count =0;
     public  int getCount(){
         count++;
         return  count;
     }
   %>
  您好，您是本站的第 <%=getCount()%> 位来访者
</body>
</html>

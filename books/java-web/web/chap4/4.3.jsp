<%--
  Created by IntelliJ IDEA.
  User: lx
  Date: 2018/6/3
  Time: 21:59
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<%
  int num =1;
  for(int i=1;i<10;i++){
      num*=i;
  }
  out.print("10的阶乘："+num);
  %>
<%
  String name = "admin";
  String sex = "男";
  String photo= "1.jpg";
%>
用户名：<%=name %>
性别：<%=sex%>
照片：<img src="/static/images/<%=photo%>" alt="" style="height: 100px;width:100px;">
</body>
</html>

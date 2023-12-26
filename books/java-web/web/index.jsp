<%@ page import="java.text.SimpleDateFormat" %><%--
  Created by IntelliJ IDEA.
  User: lx
  Date: 2018/3/18
  Time: 0:01
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="utf-8" %>
<%@page import="java.util.Date" %>
<%@page import="java.text.SimpleDateFormat" %>
<html>
<head>
    <title>first idea java project</title>
    <style>
        footer{
            position: fixed;
            bottom:0;
            width: 100%;
            text-align: center;
        }
    </style>
</head>
<body>
<jsp:forward page="chap4/login.jsp"></jsp:forward>
<%@include file="chap4/top.jsp" %>
<h1>
    坚韧、创新、博学、笃行
</h1>
<%
    Date date = new Date();
    SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    String today = df.format(date);
%>
<div>
    当前时间是<%=today %>
</div>
<h2>chap4
</h2>
<ul>
    <li><a href="/chap4/4.3.jsp">4.3</a></li>
    <li><a href="/chap4/4.4.jsp">4.4</a></li>
</ul>
<%@include file="chap4/copyright.jsp"%>
</body>
</html>

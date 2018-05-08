/**
 * Created by Administrator on 2017/3/21.
 */
var data = new Object();
var datatable;
var db=openDatabase('myData','','My Database',102400);

function init(){
    datatable = document.getElementById('datatable');
    //showAllData(true);
    //初始化数据库
  /*  var lsdata=[
        {
            "code":"o-1",
            "date":"2013-12-5",
            "goodscode":"g-1",
            "brand":"b-1",
            "num":1,
            "price":12.1,
            "person":"p-1",
            "product":"pt-1"
        },
        {
            "code":"o-2",
            "date":"2013-12-7",
            "goodscode":"g-2",
            "brand":"b-2",
            "num":2,
            "price":13,
            "person":"p-2",
            "product":"pt-"
        },
        {
            "code":"o-3",
            "date":"2013-12-8",
            "goodscode":"g-2",
            "brand":"b-2",
            "num":3,
            "price":1.1,
            "person":"p-3",
            "product":"pt-4"
        }
    ];
    db.transaction(function(tx){
        tx.executeSql('DROP TABLE myData.orders',[],function(tx,rs){
            alert('删除成功');
        })
    })
    db.transaction(function(tx){
        tx.executeSql('CREATE TABLE IF NOT EXISTS orders(code TEXT, date TEXT, goodscode TEXT,brand TEXT,num INTEGER,price FLOAT,person TEXT, product TEXT)',[]);
        })


    for(var i=0;i<lsdata.length;i++){
        var data = lsdata[i];
        db.transaction(function(tx){
                tx.executeSql('INSERT INTO orders VALUES(?,?,?,?,?,?,?,?)',[data.code,data.date,data.goodscode,data.brand, data.num, data.price,data.person, data.product],function(tx,rs){
                    alert('成功保存数据！');
                },function(tx,error){
                    alert(error.source+'::'+error.message);
                })
            })
    }*/

    //模拟数据
    //db.transaction(function(tx){
    //    tx.executeSql('CREATE TABLE IF NOT EXISTS MsgData(name TEXT,message TEXT, time INTEGER)',[]);
    //    tx.executeSql('SELECT * FROM MsgData',[] ,function(tx, rs){
    //        removeAllData();
    //        for(var i=0;i<rs.rows.length;i++){
    //            showData(rs.rows.item(i));
    //        }
    //    })
    //})
    //
}
function tdxBrand_onBlur(){
    var brand= document.getElementById('tdxBrand').value;
    document.getElementById('tdxBrandName').value='';
    var name;
    db.transaction(function(tx){
        tx.executeSql('SELECT * FROM brand where  code=?',[brand],function(tx,rs){
            name = rs.rows.item(0).name;
            document.getElementById('tdxBrandName').value= name;
        })
    })
}
 function tdxPerson_onBlur(){
     var person = document.getElementById('tdxPerson').value;
     document.getElementById('tdxPersonName').value='';
     var name;
     db.transaction(function(tx){
         tx.executeSql('SELECT * FROM person where  code=?',[person],function(tx,rs){
             name = rs.rows.item(0).name;
             document.getElementById('tdxPersonName').value= name;
         })
     })
 }

function tdxProduct_onBlur(){
    var product = document.getElementById('tdxProduct').value;
    document.getElementById('tdxProductName').value='';
    var name;
    db.transaction(function(tx){
        tx.executeSql('SELECT * FROM product where  code=?',[product],function(tx,rs){
            name = rs.rows.item(0).name;
            document.getElementById('tdxProductName').value= name;
        })
    })
}

function tdxNum_onBlur(){
    var num,price;
    if(isNaN(parseInt(document.getElementById('tdxNum').value))){
        document.getElementById('tdxNum').value="0";
    };
    num= document.getElementById('tdxNum').value;
    if(parseInt(document.getElementById('tdxNum').value)!=num){
        document.getElementById('tdxNum').value="0";
    };
    num= parseInt(num);
    price=parseFloat(document.getElementById('tdxPrice').value);
    document.getElementById('tdxMoney').value= num*price;
}
function tdxPrice_onBlur(){
    var num,price;
    num= document.getElementById('tdxNum').value;
    num= parseInt(num);
    price=parseFloat(document.getElementById('tdxPrice').value);
    document.getElementById('tdxMoney').value= num*price;
}

function btnSearchGoods_onClick(){
    var rc,w;
    rc= window.showModalDialog('SearchGoods.html','','dialogHeight:720px;dialogWidth:700px;scroll:no;');
    if(rc==null){
        return;
    }
    document.all.item("tdxGoodsCode").value = rc;
}

function btnSearchBrand_onClick(){
    var rc,w;
    rc= window.showModalDialog('SearchBrand.html','','dialogHeight:720px;dialogWidth:700px;scroll:no;');
    if(rc==null){
        return;
    }
    document.all.item("tdxBrand").value = rc;
    tdxBrand_onBlur();
}

function btnSearchPerson_onClick(){
    var rc,w;
    rc= window.showModalDialog('SearchPerson.html','','dialogHeight:720px;dialogWidth:700px;scroll:no;');
    if(rc==null){
        return;
    }
    document.all.item("tdxPerson").value = rc;
    tdxPerson_onBlur();
}
function btnSearchProduct_onClick(){
    var rc,w;
    rc= window.showModalDialog('SearchProduct.html','','dialogHeight:720px;dialogWidth:700px;scroll:no;');
    if(rc==null){
        return;
    }
    document.all.item("tdxProduct").value = rc;
    tdxProduct_onBlur();
}

function btnAdd_onClick(){
    data.Code=document.getElementById('tdxCode').value;
    data.Date=document.getElementById('tdxDate').value;
    data.GoodsCode=document.getElementById('tdxGoodsCode').value;
    data.Brand=document.getElementById('tdxBrand').value;
    data.Num=document.getElementById('tdxNum').value;
    data.Price=document.getElementById('tdxPrice').value;
    data.Person=document.getElementById('tdxPerson').value;
    data.Product=document.getElementById('tdxProduct').value;
    console.log(data);
    db.transaction(function(tx){
        tx.executeSql('CREATE TABLE IF NOT EXISTS orders(code TEXT, date TEXT, goodscode TEXT, brand TEXT, num INTEGER,price FLOAT,person TEXT, product TEXT)',[]);
        tx.executeSql('INSERT INTO orders VALUES(?,?,?,?,?,?,?,?)',[data.Code,data.Date,data.GoodsCode,data.Brand, data.Num, data.Price,data.Person, data.Product],function(tx,rs){
            alert('保存数据成功！');
            showAllData(false);
            btnNew_onClick();
        },function(tx,error){
            alert(error.source+'::'+error.message);
        })
    })
}

function btnUpdate_onClick(){
    data.Code=document.getElementById('tdxCode').value;
    data.Date=document.getElementById('tdxDate').value;
    data.GoodsCode=document.getElementById('tdxGoodsCode').value;
    data.Brand=document.getElementById('tdxBrand').value;
    data.Num=document.getElementById('tdxNum').value;
    data.Price=document.getElementById('tdxPrice').value;
    data.Person=document.getElementById('tdxPerson').value;
    data.Product=document.getElementById('tdxProduct').value;
    db.transaction(function(tx){
        tx.executeSql('update orders set date=?,goodscode=?,brand=?, num=?,price=?,person=?,product=？ where code=?',[data.Date,data.GoodsCode,data.Brand, data.Num, data.Price,data.Person, data.Product,data.Code],function(tx,rs){
            alert('成功修改数据！');
            showAllData(false);
        },function(tx,error){
            alert(error.source+'::'+error.message);
        })
    })
}

function btnDelete_onClick(){
    data.Code=document.getElementById('tdxCode').value;
    db.transaction(function(tx){
        tx.executeSql('delete from orders where code=?',[data.Code],function(tx,rs){
            alert('成功删除数据！');
            showAllData(false);
        },function(tx,error){
            alert(error.source+'::'+error.message);
        })
    })
    btnNew_onClick();
}
function btnNew_onClick(){
    document.getElementById('form1').reset();
    document.getElementById('tdxCode').removeAttribute('readonly');
    document.getElementById('btnAdd').disabled='';
    document.getElementById('btnUpdate').disabled='disabled';
    document.getElementById('btnDelete').disabled='disabled';
}

function btnClear_onClick(){
    if(document.getElementById('btnAdd').disabled==false){
        document.getElementById('tdxCode').value='';
    }
    document.getElementById('tdxDate').value='';
    document.getElementById('tdxGoodsCode').value='';
    document.getElementById('tdxBrand').value='';
    document.getElementById('tdxBrandName').value='';
    document.getElementById('tdxNum').value='0';
    document.getElementById('tdxPrice').value='0';
    document.getElementById('tdxMoney').value='0';
    document.getElementById('tdxPerson').value='';
    document.getElementById('tdxPersonName').value='';
    document.getElementById('tdxProduct').value='';
    document.getElementById('tdxProductName').value='';
}

function tr_onClick(tr,i){
    var tempArray1,tempArray2,tempArray3;
    var tc=tr.children;
    tempArray1 = document.getElementById('hiddenBrand').value.split(';');
    tempArray2 = document.getElementById('hiddenPerson').value.split(';');
    tempArray3 = document.getElementById('hiddenProduct').value.split(';');
    document.getElementById('tdxCode').value = tc.item(0).innerHTML;
    document.getElementById('tdxDate').value = tc.item(1).innerHTML;
    document.getElementById('tdxDoodsCode').value = tc.item(2).innerHTML;
    document.getElementById('tdxBrand').value = tempArray1[i];
    document.getElementById('tdxBrandName').value = tc.item(3).innerHTML;
    document.getElementById('tdxNum').value = tc.item(4).innerHTML;
    document.getElementById('tdxPrice').value = tc.item(5).innerHTML;
    document.getElementById('tdxMoney').value = tc.item(6).innerHTML;
    document.getElementById('tdxPerson').value = tempArray2[i];
    document.getElementById('tdxPersonName').value = tc.item(7).innerHTML;
    document.getElementById('tdxProduct').value = tempArray3[i];
    document.getElementById('tdxProductName').value = tc.item(8).innerHTML;
    document.getElementById('tdxCode').setAttribute('readonly',true);
    document.getElementById('btnAdd').disabled='disabled';
    document.getElementById('btnUpdate').disabled='';
    document.getElementById('btnDelete').disabled='';
}

    function showAllData(loadPage){
    db.transaction(function(tx){
        //tx.executeSql('CREATE TABLE IF NOT EXISTS orders(code TEXT, date TEXT, goodscode TEXT, brand TEXT, num INTEGER,price FLOAT,person TEXT, product TEXT)',[]);
        //tx.executeSql('SELECT orders.*,brand.name as brandName,product.name as productName,person.name as personName FROM orders inner join brand on orders.brand=brand.code inner join person on orders.person=person.code inner join brand on orders.product=product.code',[],function(tx,rs){
        //    if(!loadPage){
        //        removeAllData();
        //        for(var i=0;i<rs.rows.length;i++){
        //            showData(rs.rows.item(i),i);
        //        }
        //    }
        //},function(tx,error){
        //    alert(error.source+'::'+error.message);
        //})
        tx.executeSql('SELECT * FROM orders',[],function(tx,rs){
                if(!loadPage){
                    removeAllData();
                    for(var i=0;i<rs.rows.length;i++){
                        showData(rs.rows.item(i),i);
                    }
                }
            },function(tx,error){
                alert(error.source+'::'+error.message);
            })
    })

}

function removeAllData(){
    datatable = document.getElementById('datatable');
    for(var i=datatable.childNodes.length-1; i>1;i--){
        datatable.removeChild(datatable.childNodes[i]);
    }
}

function showData(row,i){
    var tr = document.createElement('tr');
    tr.setAttribute('onclick','tr_onclick(this,'+i+')');
    var td1=document.createElement('td');
    td1.innerHTML = row.code;
    var td2=document.createElement('td');
    td2.innerHTML = row.date;
    var td3=document.createElement('td');
    td3.innerHTML = row.goodscode;
    var td4=document.createElement('td');
    td4.innerHTML = row.brand;
    var td5=document.createElement('td');
    td5.innerHTML = row.num;
    var td6=document.createElement('td');
    td6.innerHTML = row.price;
    var td7=document.createElement('td');
    td7.innerHTML = parseInt(row.num)*parseFloat(row.price);
    var td8=document.createElement('td');
    td8.innerHTML = row.person;
    var td9=document.createElement('td');
    td9.innerHTML = row.product;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tr.appendChild(td8);
    tr.appendChild(td9);
    datatable.appendChild(tr);

    if(document.getElementById('hiddenBrand').value!=''){
        document.getElementById('hiddenBrand').value+=";";
    }
    document.getElementById('hiddenBrand').value+=row.brand;
    if(document.getElementById('hiddenPerson').value!=''){
        document.getElementById('hiddenPerson').value+=";";
    }
    document.getElementById('hiddenPerson').value+=row.person;
    if(document.getElementById('hiddenProduct').value!=''){
        document.getElementById('hiddenProduct').value+=";";
    }
    document.getElementById('hiddenProduct').value+=row.product;
}
window.onload=function(){
    init();
    showAllData();
}
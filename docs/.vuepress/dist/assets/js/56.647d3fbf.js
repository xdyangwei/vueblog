(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{512:function(t,a,s){"use strict";s.r(a);var n=s(8),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mongodb-database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-database","aria-hidden":"true"}},[t._v("#")]),t._v(" MongoDB Database")]),t._v(" "),s("p",[t._v("Common RDB(Relational Database): PostgreSQL, MySQL, Orcal, MS SQL Server and SQLite.")]),t._v(" "),s("p",[s("code",[t._v("database")]),t._v(" –"),s("code",[t._v("collection")]),t._v(" – "),s("code",[t._v("document")]),t._v("– "),s("code",[t._v("field")]),t._v(" – "),s("code",[t._v("index")]),t._v(".")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.runoob.com/mongodb/mongodb-linux-install.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install in LInux"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("mongoDB _id")]),t._v(" "),s("p",[t._v("_id 类型为 ObjectId, 是一个 "),s("strong",[t._v("12 字节")]),t._v(" 的 BSON 类型字符串，按照字节顺序，依次代表：")]),t._v(" "),s("p",[t._v("4字节：时间戳")]),t._v(" "),s("p",[t._v("3字节：机器 ID")]),t._v(" "),s("p",[t._v("2字节：进程 ID")]),t._v(" "),s("p",[t._v("3字节：计数器")])]),t._v(" "),s("h2",{attrs:{id:"crud"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crud","aria-hidden":"true"}},[t._v("#")]),t._v(" CRUD")]),t._v(" "),s("p",[t._v("CRUD operations create, read, update, and create documents.")]),t._v(" "),s("h3",{attrs:{id:"cteate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cteate","aria-hidden":"true"}},[t._v("#")]),t._v(" Cteate")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("db.collection.insertOne()")]),t._v(" New in version 3.2")]),t._v(" "),s("li",[s("code",[t._v("db.collection.insertMany()")]),t._v(" New in version 3.2")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("db.collection.insertOne"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aaa"')]),t._v(',\n\t\t"age: 26\n\t'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("db.collection.insertMany"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"read"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#read","aria-hidden":"true"}},[t._v("#")]),t._v(" Read")]),t._v(" "),s("p",[t._v("Query a collection for document")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("db.collections.find"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" age: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$gt")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),t._v(" 18 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".limit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"update"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update","aria-hidden":"true"}},[t._v("#")]),t._v(" Update")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("db.inventory.updateOne"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" item: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"paper"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$set")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"size.uom"')]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cm"')]),t._v(", status: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"P"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n     "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$currentDate")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" lastModified: "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# created filed: ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# "lastModified" : ISODate("2018-10-26T08:59:26.038+0000")')]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("$set")]),t._v(" to update the value")]),t._v(" "),s("li",[s("code",[t._v("$currentDate")]),t._v(" operator to update the value of the "),s("code",[t._v("lastModified")]),t._v(" field to the current date, If lastModified field does not exist, "),s("code",[t._v("$currentDate")]),t._v(" will create the field.")])]),t._v(" "),s("p",[t._v("Update many: to update document on inventory where "),s("strong",[t._v("qty")]),t._v(" is less than "),s("strong",[t._v("50")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("db.inventory.updateMany"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qty"')]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$lt")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),t._v(" 50 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#same as updateOne()")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Replace:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("db.inventory.replaceOne"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or updateOne() updateMany()")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" item: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"paperpaper"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" item: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"paper"')]),t._v(", instock: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" warehouse: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),t._v(", qty: 60 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" warehouse: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B"')]),t._v(", qty: 40 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" upsert: "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("If there are matching documents, then the "),s("code",[t._v("upsert")]),t._v(" operation modifies or replaces the matching document or documents.")]),t._v(" "),s("h3",{attrs:{id:"delate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delate","aria-hidden":"true"}},[t._v("#")]),t._v(" Delate")]),t._v(" "),s("p",[t._v("MongoDb provides the followinng methods to delete documents of a collection:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("db.collection.deleteOne()")])]),t._v(" "),s("li",[s("code",[t._v("db.collection.deleteMany()")])]),t._v(" "),s("li",[s("code",[t._v("db.collection.remove()")])])]),t._v(" "),s("p",[t._v("Process in terminal:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("./mongo.exe\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" show dbs\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" use "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("db name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#create db")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" db "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#see db")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" db.createCollection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name, options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#create collections")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" show collections\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" db.colname.insert"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xx"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" db.collection_name.find"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" db.collection_name.find"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".pretty"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#show in formatted")]),t._v("\n")])])]),s("p",[t._v("batch import "),s("code",[t._v(".json")]),t._v(" file:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("mongoimport --db "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("users")]),t._v(" --collection contacts --file xx.json\n")])])]),s("h3",{attrs:{id:"restore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#restore","aria-hidden":"true"}},[t._v("#")]),t._v(" Restore")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("mongorestore -h "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("hostname"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(":port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -d dbname "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[s("a",{attrs:{href:"http://www.runoob.com/mongodb/mongodb-mongodump-mongorestore.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("mongodump and mongorestore"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"flask-pymongo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flask-pymongo","aria-hidden":"true"}},[t._v("#")]),t._v(" Flask-PyMongo")]),t._v(" "),s("p",[t._v("Install: "),s("code",[t._v("pip install flask_pymongo")])]),t._v(" "),s("p",[t._v("in "),s("code",[t._v("config.py")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    MONGO_URI "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mongodb://localhost:27017/myDatabase"')]),t._v("\n")])])]),s("p",[t._v("in "),s("code",[t._v("app/___init__.py")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" flask_pymongo "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" PyMongo\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" config\nmongo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" PyMongo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmono"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("init_app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("in "),s("code",[t._v("views.py")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" mongo\n@main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" methods"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\tdata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mongo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mycol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mycol is the name of collections")]),t._v("\n")])])]),s("h2",{attrs:{id:"python-sql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python-sql","aria-hidden":"true"}},[t._v("#")]),t._v(" Python SQL")]),t._v(" "),s("p",[t._v("Take "),s("code",[t._v("SQLite3")]),t._v(" for example:")]),t._v(" "),s("p",[s("code",[t._v('cur.execute("CREATE TABLE demo(num int, str varchar(20));")')]),t._v("，DB-API规范，创建"),s("code",[t._v("cur")]),t._v("游标对象用于执行SQL命令。"),s("a",{attrs:{href:"https://github.com/chenweigao/python_web/blob/master/orm/db_test.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("Source Code"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("conn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sqlite3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test.db'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncur "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cursor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncur"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"INSERT INTO demo VALUES (%d, '%s')\"")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aaa'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"sqlite3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sqlite3","aria-hidden":"true"}},[t._v("#")]),t._v(" SQLite3")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.runoob.com/sqlite/sqlite-create-table.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Create table"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("format the table:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("sqlite"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" .header on\nsqlite"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" .mode column\nsqlite"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" SELECT * FROM COMPANY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("update:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("sqlite"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" UPDATE COMPANY SET ADDRESS "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Texas'")]),t._v(" WHERE ID "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 6"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n update "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("users")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" confirmed "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 1 where id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("register:")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" flask_sqlalchemy "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SQLAlchemy\ndb "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SQLAlchemy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=e.exports}}]);
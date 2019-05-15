(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{506:function(t,a,s){"use strict";s.r(a);var e=s(5),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"flask"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flask","aria-hidden":"true"}},[t._v("#")]),t._v(" Flask")]),t._v(" "),s("p",[s("a",{attrs:{href:"#socketio"}},[t._v("How to build socketio in Flask project : socketio")])]),t._v(" "),s("p",[t._v("Flask "),s("strong",[t._v("variable, "),s("a",{attrs:{href:"#blueprint"}},[t._v("blueprint")])]),t._v(" and install from "),s("strong",[s("a",{attrs:{href:"#requirement.txt"}},[t._v("requirement.txt")])]),t._v(", some basic knowledge about "),s("strong",[t._v("WSGI, Nginx and Django")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference","aria-hidden":"true"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("NAME")]),t._v(" "),s("th",[t._v("URL")]),t._v(" "),s("th",[t._v("DESCRIPTION")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("flask_socketio")]),t._v(" "),s("td",[s("a",{attrs:{href:"https://github.com/miguelgrinberg/flack",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/miguelgrinberg/flack"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("a project using "),s("code",[t._v("flask_socketio")])])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("https://flask-socketio.readthedocs.io/en/latest/")]),t._v(" "),s("td",[s("code",[t._v("flask_socketio")]),t._v(" official tutorial")])]),t._v(" "),s("tr",[s("td",[t._v("blueprint")]),t._v(" "),s("td",[t._v("http://flask.pocoo.org/docs/1.0/blueprints/")]),t._v(" "),s("td",[s("a",{attrs:{href:"http://flask.pocoo.org/docs/1.0/blueprints/",target:"_blank",rel:"noopener noreferrer"}},[t._v("official tutorial"),s("OutboundLink")],1)])])])]),t._v(" "),s("h2",{attrs:{id:"socketio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#socketio","aria-hidden":"true"}},[t._v("#")]),t._v(" SocketIO")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" flask-socketio\n")])])]),s("h2",{attrs:{id:"flask-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flask-structure","aria-hidden":"true"}},[t._v("#")]),t._v(" Flask Structure")]),t._v(" "),s("p",[s("strong",[t._v("application context and request context")]),t._v("：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("variable")]),t._v(" "),s("th",[t._v("context")]),t._v(" "),s("th",[t._v("description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("current_app")])]),t._v(" "),s("td",[t._v("application context")]),t._v(" "),s("td",[t._v("The application instance for the active application.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("g")])]),t._v(" "),s("td",[t._v("ac")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("code",[t._v("request")])]),t._v(" "),s("td",[t._v("request context")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("code",[t._v("session")])]),t._v(" "),s("td",[t._v("rc")]),t._v(" "),s("td")])])]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" flask "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" current_app\n")])])]),s("p",[s("a",{attrs:{href:"http://flask.pocoo.org/docs/1.0/api/#flask.g",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("g")]),s("OutboundLink")],1),t._v(" is a special object that is unique for each request. It is used to store data that might be accessed by multiple functions during the request. The connection is stored and reused instead of creating a new connection if "),s("code",[t._v("get_db")]),t._v(" is called a second time in the same request.")]),t._v(" "),s("h2",{attrs:{id:"blueprint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blueprint","aria-hidden":"true"}},[t._v("#")]),t._v(" Blueprint")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://flask.pocoo.org/docs/1.0/blueprints/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tutorial : Modular Applications with Blueprints"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("We use the "),s("code",[t._v("create_app()")]),t._v(" so that the application is created at runtime.")]),t._v(" "),s("p",[t._v("A blueprint is similar to an application in that it can also define routes. The difference is that routes associated with a blueprint are in a dormant state until the blueprint is registered with an application, at which point the routes become part of it.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# app/main/__init__.py")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" flask "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Blueprint\nmain "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Blueprint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'main'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __name__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("The constructor for this class takes two required arguments: "),s("strong",[t._v("the blueprint name")]),t._v(" and "),s("strong",[t._v("the model or package where the blueprint is located")]),t._v("(always default "),s("code",[t._v("__name__")]),t._v(").")]),t._v(" "),s("h2",{attrs:{id:"virtual-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#virtual-environment","aria-hidden":"true"}},[t._v("#")]),t._v(" Virtual environment")]),t._v(" "),s("h3",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[t._v("#")]),t._v(" installation")]),t._v(" "),s("p",[t._v("Take Linux system as example:")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("pip install virtualenv\n")])])]),s("h3",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[t._v("#")]),t._v(" usage")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("cd "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("project directory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nvirtualenv venv\n")])])]),s("p",[t._v("该命令执行后，将在当前目录中建立一个venv目录，该目录复制了一份完整的当前系统的python环境。之后运行python时可以直接运行该项目的bin文件夹中的命令。")]),t._v(" "),s("p",[t._v("例：在当前虚环境下安装Tornado组件：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("venv"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bin")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("pip install tornado\n")])])]),s("p",[t._v("或者在该虚环境中运行python程序：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("venv"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bin")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("python xxxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py\n")])])]),s("p",[t._v("也可以使用"),s("code",[t._v("activate")]),t._v("命令启动虚环境，之后不必再显示地调用虚环境bin文件夹中的命令：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("source "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("venv"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bin")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("activate\n")])])]),s("p",[t._v("退出虚拟环境使用"),s("code",[t._v("deactive")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("venv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xxx$ deactivate\n")])])]),s("h2",{attrs:{id:"requirement-txt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirement-txt","aria-hidden":"true"}},[t._v("#")]),t._v(" requirement.txt")]),t._v(" "),s("p",[t._v("Install from "),s("code",[t._v("requirement.txt")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("pip install "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r requirements"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt\n")])])]),s("p",[t._v("generate a "),s("code",[t._v("requirement.txt")]),t._v(" from current project:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("pip freeze "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" requirement.txt\n")])])]),s("h2",{attrs:{id:"pipenv"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pipenv","aria-hidden":"true"}},[t._v("#")]),t._v(" pipenv")]),t._v(" "),s("p",[t._v("目前流行的取代 virtual envirment 的方式就是 "),s("a",{attrs:{href:"https://pipenv.readthedocs.io/en/latest/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("pipenv"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Install pipenv:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" pipenv\n\npipenv shell\n\npipenv "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" package-name\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if you want lock the environment")]),t._v("\npipenv lock\n")])])]),s("p",[t._v("退出可以使用 "),s("code",[t._v("exit")]),t._v(" 或者 "),s("code",[t._v("Ctrl+D")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"video-streaming-with-flask"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#video-streaming-with-flask","aria-hidden":"true"}},[t._v("#")]),t._v(" Video Streaming with Flask")]),t._v(" "),s("h2",{attrs:{id:"flask-script"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flask-script","aria-hidden":"true"}},[t._v("#")]),t._v(" Flask Script")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# manage.py")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" create_app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" db\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" User"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Role\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" flask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("script "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Shell\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" flask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("migrate "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Migrate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MigrateCommand\n\napp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" create_app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getenv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'FLASK_CONFIG'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'default'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmanager "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmigrate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Migrate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make_shell_context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" db"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" User"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("User"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Role"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Role"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmanager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add_command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"shell"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Shell"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("make_context"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("make_shell_context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmanager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add_command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'db'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MigrateCommand"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__main__'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"web-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-server","aria-hidden":"true"}},[t._v("#")]),t._v(" Web Server")]),t._v(" "),s("p",[t._v("目前主流的Web服务器包括"),s("strong",[t._v("Nginx, Apache, lighthttpd, IIS, etc..")]),t._v("，Python服务端程序在Linux平台下使用最广泛的是Nginx。")]),t._v(" "),s("h3",{attrs:{id:"wsgi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wsgi","aria-hidden":"true"}},[t._v("#")]),t._v(" WSGI")]),t._v(" "),s("p",[t._v("Web Server Gateway Interface[^2], 为Python语言定义Web服务器和服务端程序的通用接口规范。")]),t._v(" "),s("p",[t._v("[^2]: "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Web_Server_Gateway_Interface",target:"_blank",rel:"noopener noreferrer"}},[t._v("WSGI, wiki"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx","aria-hidden":"true"}},[t._v("#")]),t._v(" Nginx")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" nginx\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" nginx start/status/stop/restart\n")])])]),s("h2",{attrs:{id:"django"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#django","aria-hidden":"true"}},[t._v("#")]),t._v(" Django")]),t._v(" "),s("h3",{attrs:{id:"installation-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("pip3 install django\n")])])]),s("p",[t._v("测试是否安装成功：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("python3\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" django\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("django"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VERSION"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"establish-application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#establish-application","aria-hidden":"true"}},[t._v("#")]),t._v(" Establish application")]),t._v(" "),s("p",[t._v("建立项目：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("django"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("admin startproject "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("project"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("建立应用：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("python manage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py startapp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("例如，在当前目录中创建一个项目"),s("em",[t._v("my_project")]),t._v(", 并且拥有特定的目录结构：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("djangp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("admin startproject my_project\ncd my_project\npython3 manage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py startapp my_app\n")])])]),s("p",[t._v("完成之后目录结构类似于：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("my_project/\n\tmanage.py\n\tmy_project/\n\t\t__init__.py\n\t\tsettings.py\n\t\turls.py\n\t\twsgi.py\n\tmy_app/\n\t\t__init__.py\n\t\tadmin.py\n\t\tapps.py\n\t\tmigrations/\n\t\t\t__init__.py\n\t\tmodels.py\n\t\ttests.py\n\t\tviews.py\n")])])]),s("p",[t._v("内置web服务器运行：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("python manage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py runserver "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8001")]),t._v("\n")])])]),s("p",[t._v("生成数据移植文件：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("python manage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py makemigrations app\n")])])]),s("p",[t._v("移植到数据库：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("python manage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py migrate\n")])])]),s("h2",{attrs:{id:"new-words"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-words","aria-hidden":"true"}},[t._v("#")]),t._v(" New Words")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("words")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("means")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("PK")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("primary key")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("FK")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("foregin key")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("CRUD")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("create, retrieve, update and delete")])])])])])},[],!1,null,null,null);a.default=n.exports}}]);
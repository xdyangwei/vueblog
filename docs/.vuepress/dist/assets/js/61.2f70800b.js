(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{538:function(s,a,t){"use strict";t.r(a);var e=t(5),n=Object(e.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linux-bash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-bash","aria-hidden":"true"}},[s._v("#")]),s._v(" Linux Bash")]),s._v(" "),t("h2",{attrs:{id:"ssh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh","aria-hidden":"true"}},[s._v("#")]),s._v(" SSH")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ssh-keygen -t rsa -f /etc/ssh/ssh_host_rsa_key\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" start\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" openssh-server\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ssh config")]),s._v("\n/etc/ssh/sshd_config\n")])])]),t("p",[s._v("start server:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" restart/start\n")])])]),t("p",[s._v("A bug:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ssh-keygen -t rsa -f /etc/ssh/ssh_host_ed25519_key\n")])])]),t("h2",{attrs:{id:"file-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#file-server","aria-hidden":"true"}},[s._v("#")]),s._v(" File server")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("python -m http.server\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#default port: 8000")]),s._v("\n\npython -m http.server 80\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#in port 80")]),s._v("\n")])])]),t("h2",{attrs:{id:"program-status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#program-status","aria-hidden":"true"}},[s._v("#")]),s._v(" program status")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" %ERRORLEVEL%\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#windows")]),s._v("\n")])])]),t("hr"),s._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("Shell")]),s._v(" "),t("p",[s._v("This is a basic note about Linux shell, I have wrote plenty of bash shell,  which helps solve problem easily.")]),s._v(" "),t("p",[s._v("Include "),t("strong",[s._v("system information, SSH, read -p, shell array, sed, AWK")])])]),s._v(" "),t("h2",{attrs:{id:"system-information"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#system-information","aria-hidden":"true"}},[s._v("#")]),s._v(" System Information")]),s._v(" "),t("p",[s._v("Sometimes, you may want to see the system kernel version, 2 ways are available :")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("lsb_release -a\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/issue\n")])])]),t("p",[s._v("change password for a user:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" root\n")])])]),t("p",[s._v("echo current time as a file name:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"today"')]),s._v(" +"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y%m%d_%H%M%S"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(".txt \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# work log")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log -4 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" log/"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"today"')]),s._v(" +"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y%m%d"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(".txt\n")])])]),t("h2",{attrs:{id:"add-choice-for-user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-choice-for-user","aria-hidden":"true"}},[s._v("#")]),s._v(" Add Choice for User")]),s._v(" "),t("p",[t("code",[s._v("read -p")]),s._v(" is very useful for  this, for example:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("read")]),s._v(" -n1 -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"What is your system version? \n1: Ubuntu 16.04;\n2: Ubuntu 17.10;\n3: Ubuntu 18.04;\nchoose a number between 1, 2 and 3: "')]),s._v(" answer\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$answer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("\n1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nesac\n")])])]),t("p",[t("em",[s._v("Tips")]),s._v(" :")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("-n1")]),s._v(" : -n and 1 are used together, which means "),t("code",[s._v("read")]),s._v(" commmand will quit when system accept a single character, no need for Enter.")]),s._v(" "),t("li",[t("code",[s._v("-s")]),s._v(" : this options will avoid displaying user "),t("em",[s._v("passwords")]),s._v(" on the screen.")]),s._v(" "),t("li",[t("code",[s._v("-t 5")]),s._v(": overtime option, this means that user must complete the input within 5 seconds.")])]),s._v(" "),t("h2",{attrs:{id:"shell-array"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shell-array","aria-hidden":"true"}},[s._v("#")]),s._v(" Shell Array")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("arrayName"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("array_content"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#get the content of arrary, or [*]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${arraryName[@]}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#get the size of array")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${#arrayName[*]}")]),s._v("\n")])])]),t("h2",{attrs:{id:"sed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sed","aria-hidden":"true"}},[s._v("#")]),s._v(" Sed")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("current_plugins_version"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("dpkg -s picoscenes-plugins-demo-rxsbroadcaster-chronos "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" Version "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/Version: //g'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])])]),t("p",[s._v("This is a basic use of sed, "),t("code",[s._v("sed 's/Version: //g'")]),s._v(" means that a select :")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("Version: 18.0406.2333\n")])])]),t("p",[s._v("Output is:")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("18.0406.2333\n")])])]),t("p",[s._v("That means "),t("strong",[s._v("replace")]),s._v(' "Version:  " with '),t("strong",[s._v("empty")]),s._v(".")]),s._v(" "),t("p",[s._v("To replace the string in the file, use "),t("code",[s._v("-i")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/GRUB_HIDDEN_TIMEOUT=0/#GRUB_HIDDEN_TIMEOUT=0/g'")]),s._v("  /etc/default/\n")])])]),t("p",[s._v("This is an example that we do the CSI experiment, update the "),t("code",[s._v("~/etc/default/grub")]),s._v(" make the new kernel version could be seen.")]),s._v(" "),t("h2",{attrs:{id:"tr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tr","aria-hidden":"true"}},[s._v("#")]),s._v(" tr")]),s._v(" "),t("p",[t("code",[s._v("tr")]),s._v(" 可以理解为"),t("code",[s._v("sed")]),s._v("的简化版本")]),s._v(" "),t("p",[s._v("Usage: "),t("code",[s._v("tr [OPTION]... SET1 SET2")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("-c, -C, --complement: use the complement of SET1(不常用)")])]),s._v(" "),t("li",[t("p",[s._v("-d, -delete: delete characters in SET1")])]),s._v(" "),t("li",[t("p",[s._v("-s: replace each sequence of a repeated character, 删除所有重复出现字符序列，只保留第一个")])])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将所有的the替换为my")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" -s "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'the'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'my'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" -s "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\n'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除所有的the")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'the'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#小写变大写")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("a-z"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("A-Z"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除连续的重复字母")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" -s "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("a-zA-Z"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("h2",{attrs:{id:"awk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#awk","aria-hidden":"true"}},[s._v("#")]),s._v(" awk")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.tutorialspoint.com/awk",target:"_blank",rel:"noopener noreferrer"}},[s._v("AWK Tutorial"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v("\n$ usr/bin/awk\n")])])]),t("p",[s._v("display the complete content of the files using AWK:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print}'")]),s._v(" xx.txt\n")])])]),t("p",[s._v("AWK script:")]),s._v(" "),t("p",[s._v("create a text file "),t("code",[s._v("command.awk")]),s._v(" containing the AWK command:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("print"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("the use it:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -f command.awk xx.txt\n")])])]),t("p",[s._v("Options:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -v option")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -v name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Jerry "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'BEGIN{printf \"Name = %s\\n\", name}'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" --help\n")])])]),t("p",[s._v("print column:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3")]),s._v(' "\\t" '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$4")]),s._v("}'")]),s._v(" marks.txt\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# or in any order")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$4")]),s._v(' "\\t" '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3")]),s._v("}'")]),s._v(" marks.txt\n")])])]),t("p",[s._v("there we print the third and the fourth fields.")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/a/ {print "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$4")]),s._v(' "\\t" '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3")]),s._v("}'")]),s._v(" marks.txt\n")])])]),t("p",[s._v("the pattern, only print 4 lines:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/a/{++cnt} END {print \"Count = \", cnt}'")]),s._v(" marks.txt\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Count = 4(where the marks.txt has 5 lines)")]),s._v("\n")])])]),t("blockquote",[t("p",[t("strong",[s._v("$0")]),s._v(" variable stores the entire line and in the absence of a body block, default action is taken, i.e., the print action.")])])])},[],!1,null,null,null);a.default=n.exports}}]);
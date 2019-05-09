(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{508:function(t,e,n){"use strict";n.r(e);var a=n(5),s=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"vim"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vim","aria-hidden":"true"}},[t._v("#")]),t._v(" Vim")]),t._v(" "),n("h2",{attrs:{id:"reference"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reference","aria-hidden":"true"}},[t._v("#")]),t._v(" reference")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("NAME")]),t._v(" "),n("th",[t._v("URL")]),t._v(" "),n("th",[t._v("DES")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("VundleVim")]),t._v(" "),n("td",[n("a",{attrs:{href:"https://github.com/VundleVim/Vundle.vim",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/VundleVim/Vundle.vim"),n("OutboundLink")],1)]),t._v(" "),n("td",[t._v("Vim plugin manager")])]),t._v(" "),n("tr",[n("td",[t._v("ale")]),t._v(" "),n("td",[n("a",{attrs:{href:"https://github.com/w0rp/ale",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/w0rp/ale"),n("OutboundLink")],1)]),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("vim-airline")]),t._v(" "),n("td",[n("a",{attrs:{href:"https://github.com/vim-airline/vim-airline",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/vim-airline/vim-airline"),n("OutboundLink")],1)]),t._v(" "),n("td")])])]),t._v(" "),n("h2",{attrs:{id:"plugin-manager"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#plugin-manager","aria-hidden":"true"}},[t._v("#")]),t._v(" Plugin Manager")]),t._v(" "),n("p",[n("a",{attrs:{href:"http://github.com/VundleVim/Vundle.vim",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vundle"),n("OutboundLink")],1),t._v(" is short for "),n("em",[t._v("Vim bundle")]),t._v(" and is a "),n("a",{attrs:{href:"http://www.vim.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vim"),n("OutboundLink")],1),t._v(" plugin manager.")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" ~/.vim/bundle\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" ~/.vimrc\n")])])]),n("p",[t._v("In "),n("code",[t._v(".vimrc")]),t._v(", this is my config:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" nocompatible\nfiletype off\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" ts"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("4\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" expandtab\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" rtp+"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("~/.vim/bundle/Vundle.vim\ncall vundle"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#begin()")]),t._v("\n\nPlugin "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'VundleVim/Vundle.vim'")]),t._v("\nPlugin "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://github.com/Valloric/YouCompleteMe.git'")]),t._v("\nBundle "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'luochen1990/rainbow'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" g:rainbow_active "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 1\nPlugin "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'w0rp/ale'")]),t._v("\nPlugin "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vim-airline/vim-airline'")]),t._v("\nPlugin "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vim-airline/vim-airline-themes'")]),t._v("\ncall vundle"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#end()")]),t._v("\nfiletype plugin indent on\n")])])]),n("p",[t._v("Then build:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" +PluginInstall +qall\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# options: PluginClean, PluginUpdate, PluginList")]),t._v("\n")])])]),n("p",[t._v("Other useful settings:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" nu"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" autoindent "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#自动对齐")]),t._v("\nsyntax on\n")])])])])},[],!1,null,null,null);e.default=s.exports}}]);
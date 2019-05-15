(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{550:function(t,a,s){"use strict";s.r(a);var e=s(8),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"face-recognition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#face-recognition","aria-hidden":"true"}},[t._v("#")]),t._v(" Face Recognition")]),t._v(" "),s("p",[t._v("Face recognition based on YOLO, "),s("strong",[t._v("You Only Look Once: Unified, Real-Time Object Detection")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"_1-abstract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-abstract","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. Abstract")]),t._v(" "),s("p",[t._v("自YOLO算法提出以来，至今已经发展到了v3，性能、集成性等都得到了极大的提升，用YOLO来实现人脸识别算法，其特点是模型训练参数较少，可移植并且实时性很高。目前为止，集成现有技术实现一个基于YOLO算法的人脸识别系统是一项很有挑战性的工作。近几年来，目标检测算法取得了很大的突破。比较流行的算法可以分为两类，一类是基于Region Proposal的R-CNN系算法（R-CNN，Fast R-CNN, Faster R-CNN），它们是two-stage的，需要先使用启发式方法（selective search）或者CNN网络（RPN）产生Region Proposal，然后再在Region Proposal上做分类与回归。另一类是Yolo，SSD这类one-stage算法，其仅仅使用一个CNN网络直接预测不同目标的类别与位置。第一类方法准确度高，但是速度慢，第二类算法速度快，但是准确性较低。本文将介绍Yolo算法，其全称是"),s("strong",[t._v("You Only Look Once: Unified, Real-Time Object Detection")]),t._v("，You Only Look Once说的是只需要一次CNN运算，Unified指的是这是一个统一的框架，提供end-to-end的预测，而Real-Time体现是Yolo算法速度快。这里我们谈的是Yolo-v1版本算法，其性能差于后来的SSD算法的，但是Yolo后来也继续进行改进，产生了Yolo9000算法。本文主要讲述Yolo-v1算法的原理。")]),t._v(" "),s("h2",{attrs:{id:"_2-yolo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-yolo","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. YOLO")]),t._v(" "),s("h3",{attrs:{id:"_2-1-sliding-window"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-sliding-window","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.1 Sliding window")]),t._v(" "),s("blockquote",[s("p",[t._v("The sliding window model is conceptually simple: independently classify all image patches as being object or non-object. Sliding window classification is the dominant paradigm in object detection and for one object category in particular -- faces -- it is one of the most noticeable successes of computer vision. For example, modern cameras and photo organization tools have prominent face detection capabilities.")])]),t._v(" "),s("p",[t._v("如引文所示，常见的目标检测算法一般基于滑动窗口模型，其思路是，将检测问题转化为了图像分类问题。其基本原理就是采用不同大小和窗口在整张图片上以一定的步长进行滑动，然后对这些窗口对应的区域做图像分类，以此实现对整张图片的检测。")]),t._v(" "),s("p",[t._v("但该方法的缺点在于，要检测的目标大小规模是未知的，所以在实验中需要设置不同大小的窗口去滑动，并且还要选取合适的步长。这样的做法会产生很多的子区域经过分类器去做预测，需要很大的计算量，但是为了保证速度，分类器的设计不能过于复杂。可以想到的解决思路之一是减少要分类的子区域，这是R-CNN的一个改进策略，其采用了selective search方法来找到最有可能包含目标的子区域（Region Proposal）。")]),t._v(" "),s("p",[t._v("对于CNN分类器而言，滑动窗口是非常耗时的，幸运的是，结合卷积运算的特点，我们可以使用CNN实现更高效的滑动窗口方法。有一种全卷积的方法，用卷积层代替了全连接层。overfeat算法的思路是，如果输入图片大小是16x16，经过一系列卷积操作，提取了2x2的特征图，这个2x2的图上每个元素都是和原图是一一对应的，相当于在原图上做大小为14x14的窗口滑动，且步长为2，共产生4个子区域，最终输出的通道数为4，可以看成4个类别的预测概率值，这样一次CNN计算就可以实现窗口滑动的所有子区域的分类预测。由于图片的空间位置信息的不变性，尽管卷积过程中图片大小减少，但是位置对应关系还是保存的。这个思路也被R-CNN借鉴，从而诞生了Fast R-CNN算法。")]),t._v(" "),s("p",[t._v("上面尽管可以减少滑动窗口的计算量，但是只是针对一个固定大小与步长的窗口，这是远远不够的。Yolo算法很好的解决了这个问题，它不再是窗口滑动了，而是直接将原始图片分割成互不重合的小方块，然后通过卷积最后生产这样大小的特征图，基于上面的分析，可以认为特征图的每个元素也是对应原始图片的一个小方块，然后用每个元素来可以预测那些中心点在该小方格内的目标，这就是Yolo算法的朴素思想。")]),t._v(" "),s("h3",{attrs:{id:"_2-2-yolo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-yolo","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.2 YOLO")]),t._v(" "),s("h4",{attrs:{id:"_2-2-1-unified-detection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-unified-detection","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.2.1 Unified Detection")]),t._v(" "),s("p",[t._v("整体来看，Yolo算法采用一个单独的CNN模型实现end-to-end的目标检测，整个系统如图所示：首先将输入图片resize到448x448，然后送入CNN网络，最后处理网络预测结果得到检测的目标。相比R-CNN算法，其是一个统一的框架，其速度更快，而且Yolo的训练过程也是end-to-end的。")]),t._v(" "),s("p",[t._v("具体来说，Yolo的CNN网络将输入的图片分割成"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("S")]),s("mo",[t._v("∗")]),s("mi",[t._v("S")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("S*S")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[t._v("S")]),s("span",{staticClass:"mbin"},[t._v("∗")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[t._v("S")])])])]),t._v("网格("),s("strong",[t._v("grid")]),t._v(")，然后每个单元格负责去检测那些中心点落在该格子内的目标，如下图所示，可以看到狗这个目标的中心落在左下角一个单元格内，那么该单元格负责预测这个狗。每个单元格会预测"),s("strong",[t._v("B")]),t._v("个边界框（"),s("strong",[t._v("bounding box")]),t._v("）以及边界框的置信度（confidence score），置信度包含两个方面，一是这个边界框含有目标的可能性大小$$Pr(object)$$，二是这个边界框的准确度。")]),t._v(" "),s("ul",[s("li",[t._v("当该边界框是背景时（即不包含目标），$$Pr(object)=0$$。")]),t._v(" "),s("li",[t._v("当该边界框包含目标时，$$Pr(object)=1$$。")])]),t._v(" "),s("p",[t._v("边界框的准确度可以用预测框与实际框（ground truth）的**IOU（intersection over union，交并比）**来表征。因此置信度可以定义为"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("P")]),s("mi",[t._v("r")]),s("mo",[t._v("(")]),s("mi",[t._v("o")]),s("mi",[t._v("b")]),s("mi",[t._v("j")]),s("mi",[t._v("e")]),s("mi",[t._v("c")]),s("mi",[t._v("t")]),s("mo",[t._v(")")]),s("mo",[t._v("∗")]),s("mi",[t._v("I")]),s("mi",[t._v("O")]),s("mi",[t._v("U")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("Pr(object)*IOU")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("P")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathit"},[t._v("o")]),s("span",{staticClass:"mord mathit"},[t._v("b")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),s("span",{staticClass:"mord mathit"},[t._v("e")]),s("span",{staticClass:"mord mathit"},[t._v("c")]),s("span",{staticClass:"mord mathit"},[t._v("t")]),s("span",{staticClass:"mclose"},[t._v(")")]),s("span",{staticClass:"mbin"},[t._v("∗")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07847em"}},[t._v("I")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10903em"}},[t._v("U")])])])]),t._v("。Yolo的置信度不仅仅是边界框是否含有目标的概率，而是两个因子的乘积，预测框的准确度也反映在该乘积中。")]),t._v(" "),s("p",[t._v("边界框的大小与位置可以用4个值来表征："),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mo",[t._v("(")]),s("mi",[t._v("x")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mi",[t._v("y")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mi",[t._v("h")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mi",[t._v("w")]),s("mo",[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("(x,y,h,w)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathit"},[t._v("x")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mord mathit"},[t._v("h")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02691em"}},[t._v("w")]),s("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("，其中$$(x,y)$$是边界框的中心坐标，"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mo",[t._v("(")]),s("mi",[t._v("h")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mi",[t._v("w")]),s("mo",[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("(h,w)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathit"},[t._v("h")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02691em"}},[t._v("w")]),s("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("是边界框的宽与高。中心坐标的预测值$$(x,y)$$是相对于每个单元格左上角坐标点的偏移值，单位是相对于单元格大小的，而边界框的w和h预测值是相对于整个图片的宽与高的比例，这样理论上4个元素的大小应该在[0,1]范围。最终，每个边界框的预测值实际上包含5个元素：$$(x,y,w,h,c)$$，其中前4个表征边界框的大小与位置，而最后一个值是置信度。")]),t._v(" "),s("p",[t._v("每个单元格需要预测$$(B*5+C)$$个值。如果将输入图片划分为"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("S")]),s("mo",[t._v("∗")]),s("mi",[t._v("S")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("S*S")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[t._v("S")]),s("span",{staticClass:"mbin"},[t._v("∗")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[t._v("S")])])])]),t._v("网格，那么最终预测值为"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("S")]),s("mo",[t._v("∗")]),s("mi",[t._v("S")]),s("mo",[t._v("∗")]),s("mo",[t._v("(")]),s("mi",[t._v("B")]),s("mo",[t._v("∗")]),s("mn",[t._v("5")]),s("mo",[t._v("+")]),s("mi",[t._v("C")]),s("mo",[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("S*S*(B*5+C)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[t._v("S")]),s("span",{staticClass:"mbin"},[t._v("∗")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[t._v("S")]),s("span",{staticClass:"mbin"},[t._v("∗")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05017em"}},[t._v("B")]),s("span",{staticClass:"mbin"},[t._v("∗")]),s("span",{staticClass:"mord mathrm"},[t._v("5")]),s("span",{staticClass:"mbin"},[t._v("+")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07153em"}},[t._v("C")]),s("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("大小的张量。整个模型的预测值结构如下图所示。对于PASCALVOC数据，其共有20个类别，如果使用"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("S")]),s("mo",[t._v("=")]),s("mn",[t._v("7")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mi",[t._v("B")]),s("mo",[t._v("=")]),s("mn",[t._v("2")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("S=7,B=2")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.8777699999999999em","vertical-align":"-0.19444em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[t._v("S")]),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mord mathrm"},[t._v("7")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05017em"}},[t._v("B")]),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mord mathrm"},[t._v("2")])])])]),t._v(",那么最终的预测结果就是"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mn",[t._v("7")]),s("mo",[t._v("∗")]),s("mn",[t._v("7")]),s("mo",[t._v("∗")]),s("mn",[t._v("3")]),s("mn",[t._v("0")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("7*7*30")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathrm"},[t._v("7")]),s("span",{staticClass:"mbin"},[t._v("∗")]),s("span",{staticClass:"mord mathrm"},[t._v("7")]),s("span",{staticClass:"mbin"},[t._v("∗")]),s("span",{staticClass:"mord mathrm"},[t._v("3")]),s("span",{staticClass:"mord mathrm"},[t._v("0")])])])]),t._v("大小的张量。")]),t._v(" "),s("h4",{attrs:{id:"_2-2-2-design"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-design","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.2.2 Design")]),t._v(" "),s("p",[t._v("Yolo采用卷积网络来提取特征，然后使用全连接层来得到预测值。网络结构参考GooLeNet模型，包含24个卷积层和2个全连接层。对于卷积层，主要使用1x1卷积来做channle reduction，然后紧跟3x3卷积。对于卷积层和全连接层，采用Leaky ReLU激活函数：$$max(x,0)$$。最后一层``采用线性激活函数。除了上面这个结构，文章还提出了一个轻量级版本Fast Yolo，其仅使用9个卷积层，并且卷积层中使用更少的卷积核。")]),t._v(" "),s("p",[t._v("在训练之前，先在ImageNet上进行了预训练，其预训练的分类模型采用图中前20个卷积层，然后添加一个average-pool层和全连接层。预训练之后，在预训练得到的20层卷积层之上加上随机初始化的4个卷积层和2个全连接层。由于检测任务一般需要更高清的图片，所以将网络的输入从224x224增加到了448x448。")]),t._v(" "),s("p",[t._v("由于每个单元格预测多个边界框。但是其对应类别只有一个。那么在训练时，如果该单元格内确实存在目标，那么只选择与ground truth的IOU较大的那个边界框来负责预测该目标，而其它边界框认为不存在目标。这样设置的一个结果将会使一个单元格对应的边界框更加专业化，其可以分别适用不同大小，不同高宽比的目标，从而提升模型性能。大家可能会想如果一个单元格内存在多个目标怎么办，其实这时候Yolo算法就只能选择其中一个来训练，这也是Yolo算法的缺点之一。要注意的一点时，对于不存在对应目标的边界框，其误差项就是只有置信度，左标项误差是没法计算的。而只有当一个单元格内确实存在目标时，才计算分类误差项，否则该项也是无法计算的。")]),t._v(" "),s("h4",{attrs:{id:"_2-2-3-nms"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-3-nms","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.2.3 NMS")]),t._v(" "),s("p",[t._v("NMS即非极大值抑制算法（non maximum suppression, NMS），这个算法不单单是针对Yolo算法的，而是所有的检测算法中都会用到。NMS算法主要解决的是一个目标被多次检测的问题，如人脸检测的案例中，人脸可能被多次检测，但是其实预测只希望最后仅仅输出其中一个较好的预测框，那么可以采用NMS算法来实现这样的效果：首先从所有的检测框中找到置信度较大的那个框，然后挨个计算其与剩余框的IOU，如果其值大于一定阈值（重合度过高），那么就将该框剔除；然后对剩余的检测框重复上述过程，直到处理完所有的检测框。Yolo预测过程也需要用到NMS算法。")]),t._v(" "),s("p",[t._v("对于Yolo的预测过程，首先不考虑batch，认为只是预测一张输入图片。根据前面的分析，最终的网络输出是7"),s("em",[t._v("7")]),t._v("30，但是我们可以将其分割成三个部分：类别概率部分为$$[7,7,20]$$，置信度部分为$$[7,7,2,2]$$，而边界框部分为$$[7,7,2,4]$$。然后将前两项相乘可以得到类别置信度值为$$[7,7,2,20]$$，这里总共预测了$$7"),s("em",[t._v("7")]),t._v("2=98$$边界框。")]),t._v(" "),s("p",[t._v("所有的准备数据已经得到了，对于第一种策略来得到检测框的结果，我认为这是最正常与自然的处理。首先，对于每个预测框根据类别置信度选取置信度较大的那个类别作为其预测标签，经过这层处理我们得到各个预测框的预测类别及对应的置信度值，其大小都是$$[7,7,2]$$。一般情况下，会设置置信度阈值，就是将置信度小于该阈值的box过滤掉，所以经过这层处理，剩余的是置信度比较高的预测框。最后再对这些预测框使用NMS算法，最后留下来的就是检测结果。一个值得注意的点是NMS是对所有预测框一视同仁，还是区分每个类别，分别使用NMS。Ng应该区分每个类别分别使用NMS，但是实际的应用中，还是同等对待所有的框。")]),t._v(" "),s("p",[t._v("对于Yolo算法，其采用了另外一个不同的处理思路，与上段所述方法其区别就是先使用NMS，然后再确定各个box的类别。对于每个boxes，首先将小于置信度阈值的值归0，然后分类别地对置信度值采用NMS，这里NMS处理结果不是剔除，而是将其置信度值归为0。最后才是确定各个box的类别，当其置信度值不为0时才做出检测结果输出。我们需要慎重选择NMS算法，因为其对Yolo的性能是影响很大的。")]),t._v(" "),s("h2",{attrs:{id:"_3-face-recognition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-face-recognition","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. Face recognition")]),t._v(" "),s("p",[t._v("该章主要介绍如何利用YOLO算法实现人脸检测的功能，主要为代码的解析和实验说明。")]),t._v(" "),s("h3",{attrs:{id:"_3-1-dataset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-dataset","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.1 Dataset")]),t._v(" "),s("p",[t._v("YOLO本身使用的是VOC的数据集，但是我们的实验中需要使用自定义数据集来训练YOLO网络的话，就需要在VOC数据集基础上进行改造，按照VOC数据集的结构和格式来构建所需的数据集。在本实验中使用的数据集是CelebA大规模名人人脸标注数据集，CelebA数据集中的图片命名格式为统一的000001.jpg—202599.jpg，BoundingBox的信息在list_bbox_celeba.txt中保存。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# list_bbox_celeba.txt")]),t._v("\nline 1: The number of picture\nline 2: information\nline 3: "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" xxxxxx.jpg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("y1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("其中$$x_1$$，$$y_1$$表示该BoundingBox左上角点的坐标，$$width$$，$$height$$分别表示该BoundingBox的宽度和高度。 在YOLO中，每张图片都需要一个对应的label文件，这个label文件应当是一个.txt文件，除后缀名外，它的文件名与该图片的文件名相同，其中的内容为< 类别代码>  < $$[x][y][width][height] $$>，类别代码为从0开始的整数，它用于在.names文件中指明该BoundingBox中目标的类别。这里x = BoundingBox的中心点横坐标/图片宽度，y = BoundingBox的中心点纵坐标/图片高度，width = BoundingBox宽度/图片宽度，height = BoundingBox高度/图片高度。")]),t._v(" "),s("p",[t._v("YOLO训练时需要：")]),t._v(" "),s("ol",[s("li",[s("pre",[s("code",[t._v(" 指明训练图片绝对路径的train.txt文件和指明验证图片绝对路径的val.txt。\n")])])]),t._v(" "),s("li",[s("pre",[s("code",[t._v(" 所有图片对应的label文本文件，在voc数据集中位于VOC2007/labels文件夹内。\n")])])]),t._v(" "),s("li",[s("pre",[s("code",[t._v(" 训练数据配置文件voc.data\n")])])]),t._v(" "),s("li",[s("pre",[s("code",[t._v(" 网络配置文件，这里用tiny-yolo.cfg\n")])])]),t._v(" "),s("li",[s("pre",[s("code",[t._v(" 类别名列表文件voc.names\n")])])])]),t._v(" "),s("p",[t._v("其中1,2是由我们自己生成赖江celebA的数据集转化成VOC的数据集，而后对目录结构进行调整。")]),t._v(" "),s("h3",{attrs:{id:"_3-2-darknet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-darknet","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.2 Darknet")]),t._v(" "),s("p",[t._v("Darknet是一个开源的神经网络框架，其使用C和CUDA。")]),t._v(" "),s("h4",{attrs:{id:"_3-2-1-installing-darknet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-installing-darknet","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.2.1 Installing Darknet")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/pjreddie/darknet.git\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" darknet\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n")])])]),s("p",[t._v("执行上述代码安装，我们使用的是ubuntu 18.04LTS操作系统。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://pjreddie.com/media/files/yolov3.weights\n")])])]),s("p",[t._v("下载好提前训练好的参数，然后就可以运行detector了。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("./darknet detect cfg/yolov3.cfg yolov3.weights data/horses.jpg\n")])])]),s("p",[t._v("运行后会产生如下的输出：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("layer     filters    size              input                output\n    0 conv     32  3 x 3 / 1   416 x 416 x   3   -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("   416 x 416 x  32  0.299 BFLOPs\n    1 conv     64  3 x 3 / 2   416 x 416 x  32   -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("   208 x 208 x  64  1.595 BFLOPs\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n  104 conv    256  3 x 3 / 1    52 x  52 x 128   -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("    52 x  52 x 256  1.595 BFLOPs\n  105 conv    255  1 x 1 / 1    52 x  52 x 256   -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("    52 x  52 x 255  0.353 BFLOPs\n  106 yolo\nLoading weights from yolov3.weights"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".Done"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\ndata/dog.jpg: Predicted "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" 21.323896 seconds.\ndog: 99%\ntruck: 92%\nbicycle: 99%\n")])])]),s("p",[t._v("输出的预测图片为predictions.png:")]),t._v(" "),s("h4",{attrs:{id:"_3-2-2-face-recognition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-face-recognition","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.2.2 Face recognition")]),t._v(" "),s("p",[t._v("该系统的设计步骤为：在上节下载好的"),s("code",[t._v("darknet")]),t._v("文件夹中进行一些文件和脚本的修改，以便于我们进行人脸识别。")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("创建数据集文件；")])]),t._v(" "),s("li",[s("p",[t._v("采集需要识别的头像，放入文件夹中；")])]),t._v(" "),s("li",[s("p",[t._v("标注人名为类别名，基于labelImg，其中类别名称为人名，并使用脚本生成文件名称列表；")])]),t._v(" "),s("li",[s("p",[t._v("修改"),s("code",[t._v("script")]),t._v("文件夹下面的"),s("code",[t._v("voc_label.py")]),t._v("文件，执行过后，会生成标注文件对应的txt文件；")])]),t._v(" "),s("li",[s("p",[t._v("修改配置文件"),s("code",[t._v("./cfg/voc.data")]),t._v("中的内容")])]),t._v(" "),s("li",[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("classes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 4\ntrain  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /home/user/darknet/scripts/homework_train.txt\n//valid  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /home/pjreddie/data/voc/homework_test.txt\nnames "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data/voc.names\nbackup "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /home/user/darknet/result\n")])])])]),t._v(" "),s("li",[s("p",[t._v("修改``./data/voc.names`，将四个类别名称（人名）写进，原来的都删除掉。;")])]),t._v(" "),s("li",[s("p",[t._v("修改网络参数的最后一层，在文件"),s("code",[t._v("tiny-yolo-voc.cfg")]),t._v("中，修改如下：")])]),t._v(" "),s("li",[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("convolutional"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nsize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nstride"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\npad"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nfilters"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("45")]),t._v("\nactivation"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("linear\n \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("region"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nanchors "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.08")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.19")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.42")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.41")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.63")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11.38")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.42")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.62")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.52")]),t._v("\nbias_match"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nclasses"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("   \ncoords"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\nnum"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\nsoftmax"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\njitter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".2")]),t._v("\nrescore"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n \nobject_scale"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\nnoobject_scale"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nclass_scale"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\ncoord_scale"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n \nabsolute"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nthresh "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".6")]),t._v("\nrandom"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),s("p",[t._v("训练网络")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("./darknet detector train ./cfg/voc.data cfg/tiny-yolo-voc.cfg  \n")])])])]),t._v(" "),s("li",[s("p",[t._v("在漫长的等待过后，可以在"),s("code",[t._v("./darknet/results")]),t._v("生成最后的参数数据，其中"),s("code",[t._v("tiny-yolo-voc_final.weights")]),t._v("是最后的参数，其他的都是过程参数。")])]),t._v(" "),s("li",[s("p",[t._v("进行测试")])]),t._v(" "),s("li",[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("./darknet detector test cfg/voc.data cfg/tiny-yolo-voc.cfg \nresults/tiny-yolo-voc_final.weights data/images.jpg\n")])])]),s("p",[t._v("至此，整个过程完成。")])])])])},[],!1,null,null,null);a.default=n.exports}}]);
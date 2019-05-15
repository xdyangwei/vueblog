(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{553:function(t,e,a){"use strict";a.r(e);var r=a(8),s=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"rf-pose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rf-pose","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("Badge",{attrs:{text:"Research",type:"tip"}}),t._v(" RF-Pose")],1),t._v(" "),a("p",[t._v("This paper, "),a("em",[a("a",{attrs:{href:"http://openaccess.thecvf.com/content_cvpr_2018/papers/Zhao_Through-Wall_Human_Pose_CVPR_2018_paper.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Through-wall Human Pose Estimation Using Radio Signals"),a("OutboundLink")],1)]),t._v(", is extracted from a paper in CVPR2018 published by Dina Katabi, a famous team in the wireless communication field, and demonstrates accurate human pose estimation through walls and occlusions.\nIn this paper, the system RF-pose designed by wireless signals can accurately predict human activities, and it also has very accurate prediction results when the environment is blocked by walls and other obstacles.")]),t._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[t._v("本篇论文实现基于该思想：由于无线信号不能直接对应于人类的活动，所以引入现有的成熟的计算机视觉技术，使用若干个布置好的网络摄像机，再设计卷积神经网络作为系统的基准，在训练时同步地将RFID的无线信号和计算机的视觉信号相结合，并用之训练。训练好的网络只使用无线信号来预测人的活动方式，换句话说，计算机视觉信号作为深度学习的训练标签。系统的最终结果实现了一个基于无线信号的活动感知系统，可以通过无线信号感知出人类活动的2D图形，如图所示。")]),t._v(" "),a("p",[t._v("人的姿态的预测在无线感知领域一直是一个重要的课题，可应用的场景包括活动识别、安全监管、老人防护等，即便是在最成熟的计算机视觉解决方案中，对于遮挡等障碍的处理依旧是一个基本的挑战难题。之前的研究成果有通过物体的可见部分推测被遮挡物体的剩余部分的计算机视觉解决方案，但是由于人类的身体不是固定的，而是随着运动产生变化，所以这样的解决方案很多情况下会发生错误，更加严重的是，当人被物体完全遮挡的时候，这种方案就完全失效了。")]),t._v(" "),a("p",[t._v("本论文提出了一种完全不同的解决方案来处理遮挡和其他感知类问题。不同于可见光很容易被墙壁或其他障碍物遮挡，WiFi的无线频率信号（Radio Frequency signals）可以跨越该障碍，更幸运的是，该信号能反射出人的身体，这就提供了一种穿墙追踪人类活动的可能性。近期研究的先进的无线感知系统使用了RF信号来检测人类活动或者穿墙检测他们的行进速度，但是缺陷在于这些系统只能追踪人体的一个关键节点（例如头部、四肢、躯干中的一个），而论文中提出的RF-Pose系统能检测出人活动的2D图形，绘制出主要的关键点（或关键肢干）。还有一点是有些系统只能绘制出静态的人体行为的表述，其实现的原理在于将不同时间点观测到的人类的活动汇聚于一个时间帧上面，而论文中的系统则是可以实时地动态检测出人类活动的变化。如通过计算机视觉的方法实现精确的人类姿态的检测十分困难一样，使用无线信号也同样充满挑战。")]),t._v(" "),a("h2",{attrs:{id:"rf-pose-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rf-pose-2","aria-hidden":"true"}},[t._v("#")]),t._v(" RF-Pose")]),t._v(" "),a("p",[t._v("RF-Pose系统是本文提出的一个基于无线信号处理的神经网络系统，该系统能提供精确的人的姿态的2D追踪图像，如图所示：")]),t._v(" "),a("p",[t._v("可以看出，即使是在人被障碍物遮挡甚至是完全被掩盖的时候，RF-Pose依旧有着很好的预测能力，它传输较小功率的无线信号，同时观测出环境中的反射。")]),t._v(" "),a("p",[t._v("系统使用无线信号在环境中的反射作为唯一输入，估计人的骨架，如图所示：")]),t._v(" "),a("p",[t._v("（解释图一）")]),t._v(" "),a("p",[t._v("设计神经网络并训练到高的准确率存在很多的挑战。对于基于视觉信号的姿态预测系统来说，最大的挑战之一在于该任务很难确定训练的标签，人工对无线信号进行标签也很不现实。对于这个问题，该论文提出了可行的解决方案：神经网络无线感知交叉模型，如图所示：")]),t._v(" "),a("p",[t._v("具体而言，在训练过程中，为无线感知系统布置一个网络摄像机，并对视觉信号和无线信号进行同步。从网络摄像机（计算机视觉系统）中提取出人行为的视觉信号，将其用于无线感知系统的监督信号。当系统训练完成之后，只需要使用无线信号作为输入即可。系统的最终实现方式为只需要在无线信号的输入下感知人类的活动，而不需要人为的标注标签。值得一提的是，RF-Pose系统在房间里面充满人的时候也有很好的表现，这在训练的时候是没有可以标注的。")]),t._v(" "),a("p",[t._v("除了模型交叉设计，RF-Pose系统的设计还考虑到了RF无线信号固有的特征，比如低空间分辨率、在RF频率下穿墙所产生的视觉系统与无线系统感知情景的不同等问题。")]),t._v(" "),a("p",[t._v("实验的设计环境选择在实验室周围作为收集数据的地点，收集到的数据集具有成千上万的人的室内活动，包括：行走、坐下、上楼、开门、交谈等行为，并且在不同实验环境下测试以保证该神经网络适用的场景可以进行一般化推广。实验手工标注了2000多个RGB图像用于测试视觉系统和无线系统，结果显示：在可见场景下，RF-Pose系统的平均精度可达到62.4，计算机视觉系统平均精度为68.8；在穿墙的场景下，RF-Pose系统的平均精度为58.1，此时，计算机视觉系统完全失效。")]),t._v(" "),a("h2",{attrs:{id:"计算机视觉模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计算机视觉模型","aria-hidden":"true"}},[t._v("#")]),t._v(" 计算机视觉模型")]),t._v(" "),a("p",[t._v("对于RGB图片上的人类行为感知一般都基于两种常见的方法：自底向上和自顶向下的方法。自顶向下的方法首先检测出RGB图像中的人类，然后应用人类行为检测算法检测图片上面的人类，进而确定关键骨干点。自底向上的方法正与此相反，它首先检测图像上面的关键点\t，然后再应用处理算法检测关键点是否属于同一个目标。该论文的系统使用了自底向上的方法，并从无线信号中进行学习。")]),t._v(" "),a("p",[t._v("为了建模需要，计算机视觉系统采用了交叉和多模拟态建模的方法，以便于得到多种可能存在的感知状态，特别是系统通过交叉拟态创建的teacher-student网络，可以将学习到的一种数据形态转化到令一种。以前的系统大多数都实现了分类级别的感知，本论文系统将感知更多的信息，并通过2D关键点图显示出来。")]),t._v(" "),a("p",[t._v("在无线感知系统中，近期相关的研究大致可分为两类：第一类无线感知系统在很高的频率上工作，比如毫米波或者THz单位上，这种方式可以很精确地对于人体进行成像，但是无法穿墙；另一类使用的是低频率的无线信号，大概只有数GHz，所以可以穿过墙体或者障碍物追踪人，进一步，穿墙追踪可以分为两类：基于设备的和非基于设备的。基于设备的系统通过一些可穿戴设备来追踪目标，举例来说，可以通过一个人携带的手机来追踪他，由于定位是对于设备而不是对于人本身，一个人需要在身体的各个部分携带不同的无线感知设备以达到追踪的目的；相反的，非基于设备的系统不需要人携带任何感知设备就可以达到追踪、感知的目的，其工作原理是通过分析反射的无线信号来感知人体，缺点在于，非基于设备的系统的空间分辨率一般都比较低并且无法同时地定位身体的多个部位。很多相关的论文都没有实现对于人体姿态的检测，或者是规定了人需要移动的轨迹，并不同于本系统中的自由移动。")]),t._v(" "),a("h2",{attrs:{id:"rf信号的获得和性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rf信号的获得和性能","aria-hidden":"true"}},[t._v("#")]),t._v(" RF信号的获得和性能")]),t._v(" "),a("p",[t._v("论文中的基于RF信号的系统的原理在于发射低频率的信号并接收其反射信号，使用的技术包括FMCW和天线阵列技术。FMCW基于反射物的距离分布分离RF反射信号，反之，天线阵列通过其空间位置分离反射信号。在本论文中，引入了一种新的无线雷达，其特点在于既使用FMCW信号，又使用了两根天线作为天线阵列：垂直的和纵向的，因此，我们的输入数据以二维度热量图的形式表现，如图所示：")]),t._v(" "),a("p",[t._v("对于RF信号而言，有三点很重要的不同于视觉系统的优点：")]),t._v(" "),a("ol",[a("li",[t._v("穿墙的RF信号在频域上的空间分辨率很低，远远小于视觉数据。一般而言，其分辨率是几十厘米左右，并且受到FMCW的带宽的影响。特别值得一提的是，本系统的无线信号的分辨率可达到10cm，天线的水平和垂直分辨角度可以达到15度。")]),t._v(" "),a("li",[t._v("人体在可穿墙的频率下会反射无线信号，RF信号反射是一种常见的物理现象，时常发生在波长远大于物体表面的粗糙度的时候。在系统的这种情况下，目标像一个反射体一样，但是不同于反射。系统采用的无线信号的波长大约在5cm左右，因此人类活动就类似于目标一样的反射体。")]),t._v(" "),a("li",[t._v("无线信号拥有复杂的数据信息以得到不同的代表，两个维度以得到不同的视角信息。")])]),t._v(" "),a("p",[t._v("以上几点在实现系统的时候需要被深度考虑，无论是在实现人体感知还是神经网络的时候。")]),t._v(" "),a("h2",{attrs:{id:"方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),a("p",[t._v("如图所示，")]),t._v(" "),a("p",[t._v("本系统的设计遵循teacher-student模型，图中最上面所示为teacher模型，提供交叉模型的监督方案。下面所示的为student模型，提供了RF信号的活动感知方案。")]),t._v(" "),a("h3",{attrs:{id:"交叉监督模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#交叉监督模型","aria-hidden":"true"}},[t._v("#")]),t._v(" 交叉监督模型")]),t._v(" "),a("p",[t._v("通过RF无线信号感知人类活动的一个巨大挑战在于缺少已标记的数据集，由于RF无线信号的直接可读性很差，所以通过观察RF波形去为人类的活动制作标签是一件几乎不可能的事情。我们通过设定计算机视觉模型预测图片中的人类活动很好地解决了这个挑战。我们设计了一个基于teacher-student的交叉监督模型，该模型可以将视觉信息通过同步技术和无线信号对应起来。")]),t._v(" "),a("h3",{attrs:{id:"关键点检测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关键点检测","aria-hidden":"true"}},[t._v("#")]),t._v(" 关键点检测")]),t._v(" "),a("p",[t._v("从RF信号作为输入，到得到人类活动的2D图像的过程就要依赖于student模型发挥其作用。像之前提到过的一样，人体可以反射出无线信号，但是，仅仅从单一的RF帧上面我们是无法判断出人类的姿态的，更加注意的一点就是之前提到的RF信号较低的空间分辨率。")]),t._v(" "),a("p",[t._v("为了解决以上问题，我们设计的神经网络聚合了RF热量图中多张快照中的信息以便于它能够很好地处理不同的支干和动态地对身体的移动进行建模。我们采用帧序列作为输入，对于每个序列而言，神经网络将输出关键支干的置信图。")]),t._v(" "),a("p",[t._v("我们希望神经网络在时间和空间上的传播都保持稳定的不变性，以便于推广到穿墙的应用场景上来，因此我们使用了时空卷积技术作为student模型的基础模块。")]),t._v(" "),a("h3",{attrs:{id:"实现细节"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现细节","aria-hidden":"true"}},[t._v("#")]),t._v(" 实现细节")]),t._v(" "),a("p",[t._v("在实现细节上，我们采用了100帧的编码RF无线信号（大约3.3秒）数据作为输入，RF编码神经网络使用10层的9x5x5的时空间卷积，在每层空间维度的步长为1x2x2，在每一层的后面使用了正则化和ReLU激活函数。")]),t._v(" "),a("p",[t._v("在此之后，我们将时空间卷积层用极少的步长卷积编码人的动作，编码层一共有4层，每层卷积的步长为1x1/2x1/2，而最后一层则单独使用1x1/4x1/4的步长，在该层之后，依旧使用ReLU激活函数。训练时采用24大小的batch-size。")]),t._v(" "),a("h2",{attrs:{id:"new-words"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-words","aria-hidden":"true"}},[t._v("#")]),t._v(" New words")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Words")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Means")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("spatio-temporal")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("时空的")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("imaginary")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("虚构的，反real")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])])])},[],!1,null,null,null);e.default=s.exports}}]);
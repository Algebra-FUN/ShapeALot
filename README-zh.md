# Shape A Lot

<img src="https://gitee.com/Algebra-FUN/ShapeALot/raw/master/img/effect.png" style="zoom:33%;" />

## 关于

这是一个简易的图形编辑web应用。项目起源于“计算机语言实习课程作业”。

## 项目需求

原话如下

> 实习内容为完成一个简单的绘图软件，首先绘制直线、园、椭圆、正方形、长方形；其次修改图形的边框颜色和填充色；第三，对绘制的图形进行拖拽，即改变他们在屏幕上的位置；第四，对绘制的图形进行放大缩小；最后，对绘制的图形进行任一角度的旋转操作。

## 使用说明

### 添加新图形

点击右下角按钮 ==> 点击形状即可生成

![](https://gitee.com/Algebra-FUN/ShapeALot/raw/master/img/help-add-bn.png)

### 拖拽、缩放、旋转

鼠标移动至目标形状，即可操作

### 编辑颜色

![](https://gitee.com/Algebra-FUN/ShapeALot/raw/master/img/help-menu.png)

右键点击目标形状，弹出菜单 ==> 点击“编辑颜色”

![](https://gitee.com/Algebra-FUN/ShapeALot/raw/master/img/help-colorize.png)

==> 输入颜色

#### 支持的颜色表达式

| 种类            | 表达式形式                      | 样例                 |
| --------------- | ------------------------------- | -------------------- |
| 颜色英文单词    | [a-z]+                          | black,red,green      |
| 色标（16，256） | #[0-9a-f]{3}或#[0-9a-f]{6}      | #fff,#aabbff,#233666 |
| rgb函数         | rgb(int r,int g,int b)          | rgb(30,60,233)       |
| rgba函数        | rgba(int r,int g,int b,float a) | rgba(30,60,233,0.8)  |


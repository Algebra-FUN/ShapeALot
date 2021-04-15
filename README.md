# Shape A Lot

![GitHub last commit](https://img.shields.io/github/last-commit/Algebra-FUN/ShapeALot) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Algebra-FUN/ShapeALot) ![GitHub top language](https://img.shields.io/github/languages/top/Algebra-FUN/ShapeALot) ![author](https://img.shields.io/badge/author-AlgebraFUN-green)

[中文版README](https://github.com/Algebra-FUN/ShapeALot/blob/master/README-zh.md)

## About

This is a simple and easy-to-use web application used to do simple geometry shape drawing. This Project originates from our `computer program language practise` course assignment.

However, our teacher asked us to code this with `VC++`. It is tedious to write too many urgly code in `C++` as `C++` is good at operating performance but it is not a good choice for build GUI application. Fortunately,  when a student asked "if he can use other program language such as Python rather than C++", she said "you'd better try with C++ before trying with Python" which tactfully told us that it is ok to use other language. So I made this with `javascript`.

And you can try it now by [click here](https://algebra-fun.github.io/ShapeALot/).

## Project feature

### Basic Feature

| Features                                         | Status             |
| ------------------------------------------------ | ------------------ |
| Add shape(equivalent to draw a shape:satisfied:) | :heavy_check_mark: |
| Drag, Scale, Rotate                              | :heavy_check_mark: |
| Edit color of stroke and background of shape     | :heavy_check_mark: |
| Line, Rectangle, Circle, Ellipse                 | :heavy_check_mark: |
| Triangle                                         | :eyes:             |

### Advanced Feature

| Features                             | Status                    |
| ------------------------------------ | ------------------------- |
| Delete a shape with right-click menu | :heavy_check_mark:        |
| Clone a shape with right-click menu  | :heavy_check_mark:        |
| Screenshot and download              | :construction:            |
| Github and blog link                 | :heavy_check_mark:        |
| Support mobile devices               | :construction:            |
| Free draw with pencil                | :triangular_flag_on_post: |
| Ink stroke recognition               | :triangular_flag_on_post: |

> :triangular_flag_on_post:: means "flag" here

I really want to try developing a `Ink stroke recognition` algorithms using ANN or other ML model to practise what I have self-learned. However, I didn't find a proper dataset and lack of relevant experience.

So, maybe it will always to take long time to implement it and deploy it in the future when the relevant experience is sufficient, but I will try it. Wish my :triangular_flag_on_post: will stand here and never fall.

## Dependency

### basic
| Component           | Name                | Detail                                   |
| ------------------- | ------------------- | ---------------------------------------- |
| Program Language    | JSX(javascript xml) | program and layout                       |
| Frontend framework  | React               | a MVVM framework for frontend developing |
| Style mark language | css                 | common style sheet                       |
| UI framework        | material-ui         | a wide-used UI framework in the west     |

### extended

| Component             | Name                                                         | Detail                                 |
| --------------------- | ------------------------------------------------------------ | -------------------------------------- |
| State Manager         | mobx                                                         | a lib for state management             |
| Component Transformer | [re-position](https://github.com/rmarganti/re-position#readme) | a lib implementing the transfrom of ui |

## Gallery

![](https://raw.githubusercontent.com/Algebra-FUN/ShapeALot/master/img/effect.png)

> It looks like a 3-years-old children's drawing:joy:

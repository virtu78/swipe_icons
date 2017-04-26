# swipe
Необходимо сделать «промо-экран» для мобильного приложения. 
Он будет отображаться при первом запуске приложения.
Представляет из себя описание 5-6 основных функций или преимуществ приложения.
В каждый момент времени на экране отображается описание только одной функции/преимущества,
каждое из которых состоит из svg-иконки и произвольного текста. Перелистывание вправо-влево происходит через swipe.
При перелистывании блок с текстом сдвигается, а svg-иконка поворачивается вокруг своего центра (на 90 градусов).

## Исходное состояние

![Альтернативный текст](https://github.com/virtu78/swipe_icons/blob/master/png/01.PNG)

## Идет перелистывание

![Альтернативный текст](https://github.com/virtu78/swipe_icons/blob/master/png/02.png)

## Происходит замена иконки

![Альтернативный текст](https://github.com/virtu78/swipe_icons/blob/master/png/03.png)

 ## Конечное состояние
 
![Альтернативный текст](https://github.com/virtu78/swipe_icons/blob/master/png/04.PNG)

Примерно в середине процесса перелистывания происходит замена svg-иконки на следующую/предыдущую. 
Новая иконка изначально развернута на 90 градусов и к окончанию процесса перелистывания поворачивается в нормальное положение.

 В нижней части экрана должен находиться статичный блок с кнопкой «Перейти к приложению». 
 
 Для реализации swipe предлагается использовать библиотеку swipe.js 
 
 

# PaintJS

## 추가 개선해야 할 사항

---

- 캔버스 밖에서 우클릭하고 캔버스 안으로 마우스 가져오고서 클릭하면 그냥 그려져 버린다.
- 지우개는 어떻게 구현? DELETE 기능도 구현하기

> ### HTML
>
> CSS를 작업할 때는 class를 사용, JavaScript를 작업할 때는 ID 사용
> canvas는 context를 갖는다는 특징이 있다.
>
> > #### context
> >
> > canvas 안에서 픽셀에 접근할 수 있는 방법이다.
> > JS에서 ctx등의 contesxt variable을 만들고 접근하면 된다.

> ### JS
>
> mousemove의 이벤트에서 clientX,Y는 윈도우 전체 범위 내에서 마우스 위치값을 나타낸다.
> offsetX,Y는 우리가 이용하고자 하는 태그? canvas 안에서의 위치를 나타낸다. 이벤트 안에서는 offset 사용
> canvas에게 pixel이 다뤄질 크기를 알려줘야지 ctx가 동작한다.

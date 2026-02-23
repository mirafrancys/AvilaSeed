import { animate, animation, style } from '@angular/animations';


export const transitionAnimationOpacity = animation(
  [
    style({
      opacity: '{{ opacityStart }}',
    }),
    animate(
      '{{ time }}',
      style({ opacity: '{{ opacityEnd }}' })
    )
  ]
)

export const transitionAnimationHeight = animation(
  [
    style({
      height: '{{ heightStart }}',
      opacity: '{{ opacityStart }}'
    }),
    animate(
      '{{ time }}',
      style({
        height: '{{ heightEnd }}',
        opacity: '{{ opacityEnd }}'
      })
    )
  ]
)

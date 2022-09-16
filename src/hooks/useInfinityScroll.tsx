import { MutableRefObject, useEffect, useRef } from 'react'

interface IProps {
  target: MutableRefObject<Element | null>
  func: () => void
}

export const useInfinityScroll = ({ target, func }: IProps) => {
  const observer = useRef<IntersectionObserver | null>(null)
  useEffect(() => {
    if (target.current) {
      observer.current = new IntersectionObserver(
        (entries, _) => {
          entries.forEach((entry) => {
            entry.isIntersecting && func()
          })
        },
        {
          threshold: 1.0,
        }
      )
      observer.current.observe(target.current)
    }
  }, [func, target])
}

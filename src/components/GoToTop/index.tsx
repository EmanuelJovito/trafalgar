import { Button } from "./style"
import {IoIosArrowUp} from 'react-icons/io'

export function GoToTop() {
  function top() {
    window.scrollTo(0,0)
  }

  return (
    <Button onClick={top}>
      <IoIosArrowUp size="1rem"/>
    </Button>
  )
}
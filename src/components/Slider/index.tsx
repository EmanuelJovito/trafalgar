import { SliderContainer, Pagination } from './style'

export function Slider() {
  return (
    <>
    <SliderContainer>
      <h1>What our customer are saying</h1>
      <div>
        <img src="image 1.png" alt="image 1" />
        <div className="Profile">
          <h1>Edward Newgate</h1>
          <p>Founder Circle</p>
        </div>
        <p>“Our dedicated patient engagement app and 
        web portal allow you to access information instantaneously 
        (no tedeous form, long calls, or administrative hassle) and securely”</p>
      </div>
    </SliderContainer>
    <Pagination>
      <button>
        <img src="seta1.svg" alt="esquerda" />
      </button>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <button>
        <img src="seta2.svg" alt="direita" />
      </button>
    </Pagination>
    </>
  )
}
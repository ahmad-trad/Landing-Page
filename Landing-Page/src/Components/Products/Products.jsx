import "./Products.css"
import scroll from "../../assets/Group 23.png"
import { Product } from "./index"


function Products() {
  return (
    <div className="Products">
        <div className="flex-col justify-center items-center h-[232px] relative top-14">
            <img className="rotate-[180deg] translate-x-[38px] w-[10px] h-[100px]" src={scroll} alt="scroll" />
            <p className="rotate-[270deg] translate-y-[30px] text-[12px]">Lorem Ipsum</p>
        </div>
        {Product.map((item) => (
            <div className="w-[248px] h-[232px] relative mr-3" key={item.id}>
                <img className="w-full h-full" src={item.img} alt={item.img} />
                <div className="absolute flex-row justify-center items-center bottom-2 left-1/2 translate-x-[-50%] bg-white w-[190px] h-[70px] text-center">
                    <h3 className="text-[20px] leading-[30px]">{item.title}</h3>
                    <p className="text-[12px] leading-[30px]">{item.subTitle}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Products
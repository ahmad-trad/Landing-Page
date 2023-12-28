import background1 from "../../assets/Rectangle 20.png"
import "./Dolor.css"

const Dolor = () => {
  return (
    <section className="w-full h-screen flex justify-between" >
        <div className="dolor w-[541px] h-[567px] relative self-end ">
            <img className="w-[368px] h-[504px] absolute right-0 bottom-0" src={background1} alt="background" />
        </div>

        <div className="w-[366px] self-end p-3">
            <h1 className="text-[50px] text-main">Lorem ipsum & dolor sit amet</h1>
            <p className="text-[15px] font-normal">Phasellus elementum egestas lorem, at dictum urna sodales facilisis Maecenas ut tortor quis urna tincidunt molestie</p>
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-[23px] text-main">Lorem ipsum</h2>
                    <p className="text-[15px] font-normal">Lorem ipsum</p>
                </div>
                <div>
                    <h2 className="text-[23px] text-main">Lorem ipsum</h2>
                    <p className="text-[15px] font-normal">Lorem ipsum</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Dolor
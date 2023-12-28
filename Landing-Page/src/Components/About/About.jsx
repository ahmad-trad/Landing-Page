import scroll from "../../assets/Group 23.png"
import image from "../../assets/Rectangle 19.png"
import "./About.css"

const About = () => {
  return (
    <div className="w-full h-screen flex-row">
        <div className="flex items-center justify-between">
            <div></div>
            <div className="flex-row justify-center z-10 ml-[220px]">
                <p className="font-normal text-[12px] rotate-[270deg] mb-2">scroll</p>
                <img className="ml-[5px]" src={scroll} alt="scroll" />
            </div>
            <p className=" self-start text-main w-[177px] text-[12px] leading-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus</p>
        </div>

        <section className="w-full h-[693px] ml-[26px] flex relative top-[-30px]">
            <p className="absolute top-1/2 left-0 text-[15px] rotate-[270deg]  ">Lorem ipsum dolor sit amet</p>

            <div className="w-[706px] h-[448px] bg-red-100 flex items-center justify-center absolute left-1/2 top-0 translate-x-[-50%]">
                <div className="text-center">
                    <h1 className="text-[35px] w-[323px] leading-[39px] font-thin">Lorem ipsum dolor sit amet, consectetur</h1>
                    <p className="font-normal text-[12px] w-[348px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum egestas lorem, at dictum urna sodales facilisis. Maecenas ut tortor quis urna tincidunt molestie.</p>
                    <h2 className="text-[39px]">Lorem ipsum</h2>
                    <p className="text-[12px] font-normal">Lorem ipsum dolor sit amet, consectetur</p>
                </div>
            </div>

            <div className="w-[404px] h-[402px] absolute right-0 bottom-0">
                <img className="main-bg" src={image} alt="Rectangle 19" />
                <div className="scroll-about">
                    <img className="w-[10px] h-[100px]" src={scroll} alt="scroll" />
                    <p className="rotate-[270deg] text-[12px]">Lorem Ipsum</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About
import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";

export default function About() {
  return (
    <div
      id="about"
      className="min-h-screen bg-white flex flex-col text-center gap-5 text-black text-lg  font-normal"
    >
      <div className="head text-5xl mt-12 font-bold" data-aos={"slide-down"}>
        About Me
      </div>
      <div className="flex flex-row  gap-6 ml-8">
        <div className="flex-col mt-14 flex flex-auto w-64 gap-6">
          <h3 className="text-3xl font-medium" data-aos={"fade-left"}>
            I'm <span className="text-yellow-600">Sai Kumar Vaddepally,</span> a Web and ML
            Enthusiast
          </h3>
          <p
            className="pt-5 leading-7 text-slate-900 text-justify"
            data-aos={"fade-left"}
          >
           "I am a diligent and highly motivated Master's student, currently specializing in Computer Science at the esteemed University of Maryland Baltimore County. My academic journey has been characterized by a strong focus on software development, machine learning, and full-stack development, reflecting my commitment to mastering cutting-edge technologies. My robust academic background, coupled with hands-on industry experience, attests to my passion for leveraging technology as a powerful tool to tackle complex challenges and drive innovation. My pursuit of excellence in the field continues to fuel my determination to make a lasting impact through technology."
          </p>
          <p
            className="text-justify leading-7 text-slate-900"
            data-aos={"fade-right"}
          >
           "I am actively seeking full-time opportunities in Full-stack and Data Engineer roles, leveraging my expertise in technologies such as ReactJS, JavaScript, and Java, among others. My versatile skill set and passion for innovation make me a strong candidate for roles that require a holistic understanding of both front-end and back-end development. Additionally, I am eager to contribute to open-source projects, fostering collaboration within the developer community and continuously expanding my skill repertoire."
          </p>
        </div>

        <div
          class="relative flex-auto w-32   sm:rounded-lg  pl-4"
          data-aos={"slide-left"}
        >
          
          <div className="motion-safe:animate-zoomy">
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets10.lottiefiles.com/packages/lf20_w98qte06.json"
              style={{ width: "350px" }}
            />
          </div>
          <button className="py-3 mt-5 text-white mx-auto px-9 bg-blue-600 border-2 w-fit border-blue-500 rounded-3xl  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800 hover:scale-[1.023] focus:bg-blue-800 animate-zoomy">
            <a
              href={require("../../assets/files/saivaddepallyresume.pdf")}
              download={"saikumarvaddepally.pdf"}
            >
              Download CV
              <DownloadIcon />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

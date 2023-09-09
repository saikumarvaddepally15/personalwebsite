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
            I am a diligent and driven Master's student specializing in Computer Science at the esteemed University of Maryland Baltimore County. My focus areas encompass software development, machine learning, and full-stack development. My academic prowess combined with hands-on experience underscores my enthusiasm for utilizing technology as a tool to tackle intricate challenges and propel innovation
          </p>
          <p
            className="text-justify leading-7 text-slate-900"
            data-aos={"fade-right"}
          >
            I am currently looking for Full-time jobs. Im looking for full-stack/Data Engineer Roles.
            I worked on reactJs, NextJs, TypeScript, Java and many more. I am
            also looking to collaborate in open-source projects.
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

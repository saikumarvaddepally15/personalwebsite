import BarGraph from "./BarGraph";
import DownloadIcon from "@mui/icons-material/Download";

export default function Resume() {
  return (
    <div id="resume" className="min-h-screen flex-col text-center">
      <div className="text-5xl font-bold py-8" data-aos={"slide-down"}>
        Skills and Work Experience
      </div>
      <div className="grid grid-cols-2 gap-7 mt-7">
        <ol class="relative border-l  border-gray-700 ml-9 mb-6">
          <li class="mb-10" data-aos="zoom-in">
            <span class="absolute flex items-center justify-center w-6 h-6   rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3  text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-white ml-24">
              Software Development Engineering Test 
            </h3>
            <h3 flex items-center mb-1 text-lg font-semibold>(Wavemaker)</h3> 
            <time class="block pt-1 pb-3  text-sm font-normal leading-none  text-gray-500">
             June 2021-Aug 2022
            </time>
            <p class="mb-4 text-base font-normal  text-gray-400 ">
            Demonstrated expertise in test scenario development and UI automation using Selenium WebDriver for both web and mobile applications. 
            Orchestrated the execution of 400+ automation test cases through Selenium and Jenkins, leading to a 50% reduction in software release time. 
            Crafted 50+ use cases utilizing React components and enhanced the testing framework for a 45% increase in product efficiency. 
            Elevated product stability by 18% by introducing 200+ regression test cases and 100+ API test cases. 
            Seamlessly integrated Jenkins with Kubernetes for running 10+ test suites as Jenkins pipelines. 
            </p>
          </li>
          <li class="mb-10" data-aos="zoom-out" data-aos-delay="700">
            <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-white">
              Associate Software Engineer 
              <h3>(Wavemaker)</h3>
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-500">
              June 2020- May 2021
            </time>
            <p class="text-base font-normal text-gray-400">
            During my tensure at wavemaker, I played a pivotal role in fortifying product security, implementing vital measures like XSS prevention, CORS configuration, and allowed Hosts settings, leading to a 15% enhancement in security. 
            I also contributed to the optimization of user experience through server-side pagination, significantly reducing page loading times by mere milliseconds. 
            </p>
           
          </li>
          <li data-aos="zoom-in" data-aos-offset={"-15"} data-aos-delay="1300">
            <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-white">
              Intern
              (Wavemaker)
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-500">
              Dec 2019 - May 2020
            </time>
            <p class="text-base font-normal text-gray-400">
            Designed and spearheaded the development of a robust automation dashboard report tool, harnessing the power of JavaScript, Node.js, and MySQL. 
            This innovative tool seamlessly generated in-depth reports on product stability, offering valuable statistics for every feature derived from a wide array of test cases. 
            This not only facilitated data-driven analysis but also significantly amplified the effectiveness of product stability assessments, resulting in a remarkable 50% reduction in time and effort expended.
            </p>
          </li>
        </ol>

        <div className="flex flex-col text-center" data-aos="slide-up">
          <div className="text-3xl font-bold py-3">My Skills</div>
          <div className="ml-16 flex flex-col gap-8 mt-6">
            <BarGraph name={"JavaScript"} percent={65} />
            <BarGraph name={"React"} percent={70} />
            <BarGraph name={"NodeJS/Express"} percent={60} />
            <BarGraph name={"Java"} percent={70} />
            <BarGraph name={"Selenium Webdriver"} percent={70} />
            <BarGraph name={"HTML/CSS"} percent={85} />
            <BarGraph name={"SQL"} percent={65} />
            <BarGraph name={"MongoDB"} percent={50} />
            <BarGraph name={"AWS"} percent={40} />
          </div>

          <a
            href={require("../../assets/files/saivaddepallyresume.pdf")}
            download={"saikumar Resume"}
            class="inline-flex items-center px-6 py-2 mt-12 mx-auto w-fit text-sm font-medium border rounded-lg  focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
          >
            Download CV <DownloadIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

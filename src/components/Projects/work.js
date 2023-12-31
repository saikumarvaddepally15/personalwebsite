import Tilt from "react-parallax-tilt";
export default function work({ title, desc, tags, link, code, img }) {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-[#0b212d]  rounded-2xl max-w-[362px]  h-full bg-gradient-to-r from-green-700 to-pink-800 p-[1px]"
    >
      <div className="bg-[#0b212d] w-full h-full rounded-2xl p-4 flex flex-col justify-between">
        <div>
          <div className="relative w-full rounded-2xl">
            
           <div className="absolute inset-0 flex justify-end m-3 ">
  <div style={{ position: "absolute", top: "0", right: "0", display: "flex", flexDirection: "row" }}>
    
    <div
      onClick={() => window.open(code, "_blank")}
      className="bg-slate-800 w-7 h-7 rounded-full border-[1px] border-secondary flex items-center justify-center cursor-pointer"
    >
      <img
        src={require("../../assets/images/github.webp")}
        alt={"github"}
        className="w-3/5 h-3/5 object-contain"
      />
    </div>
  </div>
</div>

          </div>
          <div className="mt-5">
            <h5 className="text-white font-bold text-[20px]">{title}</h5>
            <p className="mt-2 text-secondary text-[14px]">{desc}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-[14px]">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className={`font-medium text-${tag.color} py-0.5 px-1 bg-slate-800 rounded-sm shadow`}
            >
              {tag.name}
            </p>
          ))}
        </div>
      </div>
    </Tilt>
  );
}

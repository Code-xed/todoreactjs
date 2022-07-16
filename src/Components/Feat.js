function Feat({Title, Para}) {
  var le = Title.pop();
  return (
    <div className="w-auto shadow-slate-400/50 mt-8 mb-2 from-sky-200 bg-gradient-to-b md:ml-20 md:w-100">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
        <path fill="#e2e8f0" fillOpacity={1} d="M0,192L1440,64L1440,0L0,0Z" />
      </svg>
      <h1 className="border-radius-lg text-bold px-6 text-4xl outline-lg border-l-8 border-rose-900 shadow-sm shadow-slate-400">
      {Title.join(" ")}{" "}
        <span className="text-5xl text-sky-500">{le}</span>
      </h1>
      <div className="flex items-center">
        <div className="shrink-0">
          <img
          className="ml-4 w-24 h-24"
          src="../../static/svg/build.png"
          alt=""
          />
        </div>
      <div className="">
        <h4 className="ml-8 text-stone-800 text-sm px-8 py-2 border-t-2 border-rose-900 break-all">{Para}
        </h4>
      </div>
    </div>
  </div>
    );
}

export default Feat;
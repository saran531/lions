import SC1 from "./images/SC1.png";
import SC2 from "./images/SC2.png";
import SC3 from "./images/SC3.png";
import SC4 from "./images/SC4.png";

function SafetyCatchNetProjects() {
  return (
    <div className="font-['Roboto'] bg-[#f5f7fb] overflow-x-hidden" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <section className="relative min-h-[320px] md:min-h-[500px] overflow-hidden flex items-center justify-center">
        <img
          src={SC4}
          alt="Safety Catch Net Projects Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-105 contrast-110 saturate-125"
        />

        <div className="absolute inset-0 bg-[#081b3a]/55" />

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="relative text-white text-[46px] md:text-[64px] font-black leading-tight">
              Safety Catch Net Projects
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f5f7fb]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-16 text-center">
          <p className="text-[#ff7a00] uppercase tracking-[5px] font-bold mb-4">
            Project Portfolio
          </p>

          <h2 className="text-[#081b3a] text-[38px] md:text-[38px] font-black">
            Featured Safety Catch Net Works
          </h2>
        </div>
      </section>

      <section className="py-24 bg-[#ff5a1f]">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <ProjectImage src={SC1} h="h-[300px]" />

            <GrayTable
              title="Project: KL ECO City, D’Scaff Engineering"
              rows={[
                ["Type of Insulation", "Safety Catch Net"],
                ["Type of Material", "Safety Net Systems (Net With Border Rope)"],
                [
                  "Measurement of Net",
                  <>
                    25m In Length Per Net Roll
                    <br />
                    (Approximated)
                  </>,
                ],
                ["Status of Work", "Completed"],
                ["Year", "2017"],
                ["Location", "Bangsar, KL"],
              ]}
            />

            <ProjectImage src={SC2} h="h-[300px]" />
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div>
              <p className="text-[#081b3a] font-semibold uppercase tracking-[3px] mb-14">
                Project
              </p>

              <h2 className="text-black text-[34px] md:text-[38px] font-black leading-tight uppercase mb-8">
                MKH Saville, D’Scaff Engineering
              </h2>

              <div className="w-[70px] h-[3px] bg-[#21c55d] mb-10" />

              <WhiteTable
                title="Project: MKH Saville, D’Scaff Engineering"
                rows={[
                  ["Type of Insulation", "Safety Catch Net"],
                  ["Type of Material", "Safety Net Systems (Net With Border Rope)"],
                  [
                    "Measurement of Net",
                    <>
                      25m In Length Per Net Roll
                      <br />
                      (Approximated)
                    </>,
                  ],
                  ["Status of Work", "Completed"],
                  ["Year", "2017"],
                  ["Location", "Cheras , KL"],
                ]}
              />
            </div>

            <div className="mt-0 lg:mt-24">
              <ProjectImage src={SC3} h="h-[330px]" noPadding />
            </div>

            <ProjectImage src={SC4} h="h-[390px]" noPadding />
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectImage({ src, h, noPadding }) {
  return (
    <div
      className={`overflow-hidden rounded-[28px] shadow-2xl ${
        noPadding ? "" : "bg-white p-3"
      }`}
    >
      <img
        src={src}
        alt="Safety Net Project"
        className={`w-full ${h} object-cover rounded-[22px] hover:scale-[1.04] duration-300`}
      />
    </div>
  );
}

function GrayTable({ title, rows }) {
  return (
    <div className="bg-[#4f4f4f] rounded-[26px] overflow-hidden shadow-2xl border border-[#c99b7a] hover:-translate-y-2 duration-300">
      <h3 className="bg-white text-[#ff7a00] text-center text-[22px] font-black uppercase py-7 px-5">
        {title}
      </h3>

      <ProjectTable
        rows={rows}
        textColor="text-white"
        borderColor="border-[#c99b7a]"
      />
    </div>
  );
}

function WhiteTable({ title, rows }) {
  return (
    <div className="bg-white rounded-[24px] overflow-hidden border border-[#c99b7a] shadow-xl hover:-translate-y-2 duration-300">
      <h3 className="text-[#ff7a00] text-center text-[18px] font-black uppercase py-6 px-5 border-b border-[#c99b7a]">
        {title}
      </h3>

      <ProjectTable
        rows={rows}
        textColor="text-black"
        borderColor="border-[#c99b7a]"
        small
      />
    </div>
  );
}

function ProjectTable({ rows, textColor, borderColor, small }) {
  return (
    <table
      className={`w-full ${textColor} text-center uppercase font-bold ${
        small ? "text-[13px]" : "text-[14px]"
      }`}
    >
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td className={`border ${borderColor} px-4 py-5 md:py-6`}>
              {row[0]}
            </td>
            <td className={`border ${borderColor} px-4 py-5 md:py-6`}>
              {row[1]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SafetyCatchNetProjects;

import SP1 from "./images/SP1.png";
import SP2 from "./images/SP2.png";
import SP3 from "./images/SP3.png";
import SP4 from "./images/SP4.png";
import SP5 from "./images/SP5.png";
import SP6 from "./images/SP6.png";
import SP7 from "./images/SP7.png";
import SP8 from "./images/SP8.png";

function ScaffoldingProjects() {
  return (
    <div className="font-['Roboto'] bg-[#f5f7fb] overflow-x-hidden" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <section className="relative min-h-[320px] md:min-h-[500px] overflow-hidden flex items-center justify-center">
        <img
          src={SP4}
          alt="Scaffolding Projects Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-105 contrast-110 saturate-125"
        />
        <div className="absolute inset-0 bg-[#081b3a]/55" />

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="relative text-white text-[46px] md:text-[64px] font-black leading-tight">
              Scaffolding Projects
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
            Featured Scaffolding Works
          </h2>
          <p className="text-[#6b7280] text-[18px] leading-[32px] mt-6 max-w-[900px] mx-auto">
            Our completed and ongoing scaffolding project details with
            professional project images and tabular project information.
          </p>
        </div>
      </section>

      {/* PROJECT 1 */}
      <section className="py-20 bg-[#ff5a1f]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-3 gap-10 items-center">
            <ProjectImage src={SP1} h="h-[300px]" />

            <div className="bg-white rounded-[28px] shadow-2xl overflow-hidden border border-white hover:-translate-y-2 duration-300">
              <h3 className="text-[#ff7a00] text-center text-[20px] md:text-[24px] font-black uppercase py-7 px-5 border-b">
                Project: Vale Malaysia Minerals SDN BHD
              </h3>
              <InfoTable
                rows={[
                  ["Type of Scaffold", "Independent Scaffold"],
                  ["Type of Material", "Tubular (Medium Duty)"],
                  ["Location", "Lumut Perak"],
                  ["Status of Work", "In Progress"],
                  ["Year", "2017"],
                ]}
              />
            </div>

            <ProjectImage src={SP2} h="h-[300px]" />
          </div>
        </div>
      </section>

      {/* PROJECT 2 */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <DarkTable
              title="Project: Vale Malaysia Minerals SDN BHD"
              rows={[
                ["Type of Scaffold", "Hanging Scaffold"],
                ["Type of Material", "Tubular (Heavy Duty)"],
                ["Location", "Lumut Perak"],
                ["Status of Work", "In Progress"],
                ["Year", "2017"],
              ]}
            />

            <div className="grid md:grid-cols-2 gap-8">
              <ProjectImage src={SP3} h="h-[330px]" noPadding />
              <div className="mt-0 md:mt-20">
                <ProjectImage src={SP4} h="h-[260px]" noPadding />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT 3 */}
      <section className="py-24 bg-black">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-3 gap-10 items-center">
            <BlackTable
              title="Project: Vale Malaysia Minerals SDN BHD"
              rows={[
                ["Type of Scaffold", "Suspended Scaffold"],
                ["Type of Material", "Tubular (Heavy Duty)"],
                ["Location", "Lumut Perak"],
                ["Status of Work", "In Progress"],
                ["Year", "2017"],
              ]}
            />

            <ProjectImage src={SP5} h="h-[620px]" noPadding />

            <div>
              <h2 className="text-white text-[34px] md:text-[38px] font-black leading-tight mb-10">
                VALE MALAYSIA <br />
                MINERALS SDN BHD
              </h2>

              <ProjectImage src={SP6} h="h-[330px]" noPadding />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT 4 */}
      <section className="py-24 bg-[#ff5a1f]">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-white font-bold uppercase tracking-[3px] mb-10">
                Project
              </p>

              <h2 className="text-white text-[36px] md:text-[38px] font-black leading-tight mb-12 uppercase">
                Tun Razak Project , D&apos;Scaff Engineering
              </h2>

              <div className="max-w-[520px] mx-auto lg:mx-0">
                <ProjectImage src={SP7} h="h-[300px]" noPadding />
              </div>
            </div>

            <div>
              <div className="max-w-[520px] mx-auto mb-10">
                <ProjectImage src={SP8} h="h-[220px]" noPadding />
              </div>

              <BlackTable
                title="Project: Tun Razak , D'Scaff Engineering"
                rows={[
                  [
                    "Type of Scaffold",
                    <>
                      Independent Scaffold <br /> ( Pedestrian Bridge)
                    </>,
                  ],
                  ["Type of Material", "Modular Scaffold"],
                  ["Location", "Bukit Bintang , Kuala Lumpur"],
                  ["Status of Work", "Completed"],
                  ["Year", "2017"],
                ]}
              />
            </div>
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
        alt="Project"
        className={`w-full ${h} object-cover rounded-[22px] hover:scale-[1.04] duration-300`}
      />
    </div>
  );
}

function InfoTable({ rows }) {
  return (
    <table className="w-full text-center text-[#081b3a] font-bold uppercase">
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td className="border px-4 py-6">{row[0]}</td>
            <td className="border px-4 py-6">{row[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function DarkTable({ title, rows }) {
  return (
    <div className="bg-[#4f4f4f] rounded-[28px] shadow-2xl overflow-hidden border border-[#c99b7a] hover:-translate-y-2 duration-300">
      <h3 className="text-[#ff7a00] bg-white text-center text-[20px] md:text-[24px] font-black uppercase py-7 px-5 border-b border-[#c99b7a]">
        {title}
      </h3>

      <table className="w-full text-center text-white font-bold uppercase">
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td className="border border-[#c99b7a] px-4 py-6">{row[0]}</td>
              <td className="border border-[#c99b7a] px-4 py-6">{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BlackTable({ title, rows }) {
  return (
    <div className="bg-black rounded-[24px] overflow-hidden border border-[#b8865b] shadow-2xl hover:-translate-y-2 duration-300">
      <h3 className="text-white text-center text-[16px] md:text-[24px] font-black uppercase py-6 px-5 border-b border-[#b8865b]">
        {title}
      </h3>

      <table className="w-full text-center text-white font-bold uppercase text-[14px] md:text-[18px]">
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td className="border border-[#b8865b] px-4 py-5">{row[0]}</td>
              <td className="border border-[#b8865b] px-4 py-5">{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ScaffoldingProjects;

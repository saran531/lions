import IP1 from "./images/IP1.png";
import IP2 from "./images/IP2.png";
import IP3 from "./images/IP3.png";
import IP4 from "./images/IP4.png";
import IP5 from "./images/IP5.png";
import IP6 from "./images/IP6.png";
import IP7 from "./images/IP7.png";

function InsulationProjects() {
  return (
    <div className="font-['Roboto'] bg-[#f5f7fb] overflow-x-hidden" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <section className="relative min-h-[320px] md:min-h-[500px] overflow-hidden flex items-center justify-center">
        <img
          src={IP2}
          alt="Insulation Projects Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-105 contrast-110 saturate-125"
        />
        <div className="absolute inset-0 bg-[#081b3a]/55" />

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="relative text-white text-[46px] md:text-[64px] font-black leading-tight">
              Insulation Projects
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
            Featured Insulation Works
          </h2>
        </div>
      </section>

      <section className="py-24 bg-[#ff5a1f]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <ProjectImage src={IP1} h="h-[310px]" />

            <GrayTable
              title="Project: Kencana HL (Sapura Kencana)"
              rows={[
                ["Type of Insulation", "Hot"],
                [
                  "Type of Material",
                  <>
                    SS316L/SS304 Cladding (0.5mm Thickness)
                    <br />
                    Rockwool Fibermesh/Slab 100kg/m3
                  </>,
                ],
                ["Size of Pipes", "10 Inch / 16 Inch / 18 Inch"],
                ["Status of Work", "Completed"],
                ["Year", "2015"],
                ["Location", "Lumat Perak"],
              ]}
            />

            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-3 gap-10 items-center">
            <ProjectImage src={IP2} h="h-[290px]" noPadding />

            <BlackTable
              title="Project: Kencana HL (Sapura Kencana)"
              rows={[
                ["Type of Insulation", "Personal Protection"],
                [
                  "Type of Material",
                  <>
                    Welded Mesh Cladding Material SS304
                    <br />
                    (0.5mm Thickness)
                  </>,
                ],
                ["Size of Pipes", "6 Inch / 8 Inch / 10 Inch"],
                ["Status of Work", "Completed"],
                ["Year", "2015"],
                ["Location", "Lumat Perak"],
              ]}
            />

            <ProjectImage src={IP3} h="h-[290px]" noPadding />
          </div>
        </div>
      </section>

      <section className="py-28 bg-black">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-16">
          <p className="text-white font-bold uppercase tracking-[3px] mb-14">
            Project
          </p>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <ProjectImage src={IP4} h="h-[360px]" noPadding />

            <WhiteTable
              title="Project: Kencana HL (Sapura Kencana)"
              rows={[
                ["Type of Insulation", "Personal Protection"],
                [
                  "Type of Material",
                  <>
                    Welded Mesh Cladding Material SS304
                    <br />
                    (0.5mm Thickness)
                  </>,
                ],
                ["Size of Pipes", "6 Inch / 8 Inch"],
                ["Status of Work", "Completed"],
                ["Year", "2015"],
                ["Location", "Lumat Perak"],
              ]}
            />

            <ProjectImage src={IP5} h="h-[360px]" noPadding />
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#ff5a1f]">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <ProjectImage src={IP6} h="h-[300px]" />

            <GrayTable
              title="Project: Kencana HL (Sapura Kencana)"
              rows={[
                ["Type of Insulation", "Hot"],
                [
                  "Type of Material",
                  <>
                    SS304 Corrugated Cladding (0.5mm Thickness)
                    <br />
                    Rockwool Fibermesh 80kg/m3
                  </>,
                ],
                ["Size of Pipes", "6 Inch / 8 Inch / 10 Inch"],
                ["Status of Work", "Completed"],
                ["Year", "2015"],
                ["Location", "Lumat Perak"],
              ]}
            />

            <ProjectImage src={IP7} h="h-[300px]" />
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
        alt="Insulation Project"
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

function BlackTable({ title, rows }) {
  return (
    <div className="bg-black rounded-[24px] overflow-hidden border border-[#b8865b] shadow-2xl hover:-translate-y-2 duration-300">
      <h3 className="text-white text-center text-[20px] font-black uppercase py-6 px-5 border-b border-[#b8865b]">
        {title}
      </h3>
      <ProjectTable
        rows={rows}
        textColor="text-white"
        borderColor="border-[#b8865b]"
        small
      />
    </div>
  );
}

function WhiteTable({ title, rows }) {
  return (
    <div className="bg-white rounded-[24px] overflow-hidden border border-[#c99b7a] shadow-2xl hover:-translate-y-2 duration-300">
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
        small ? "text-[13px] md:text-[14px]" : ""
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

export default InsulationProjects;

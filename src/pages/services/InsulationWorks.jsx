import { Check } from "lucide-react";
import InsulationBanner from "./images/insulation.png";

function InsulationWorks() {
  return (
    <div className="font-['Roboto'] bg-[#f5f7fb] overflow-x-hidden" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <section className="relative min-h-[320px] md:min-h-[500px] overflow-hidden flex items-center justify-center">
        <img
          src={InsulationBanner}
          alt="Insulation Works Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-105 contrast-110 saturate-125"
        />

        <div className="absolute inset-0 bg-[#081b3a]/55" />

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="relative text-white text-[46px] md:text-[64px] font-black leading-tight">
              Insulation Works
            </h1>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f5f7fb]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
          <div className="bg-white rounded-[36px] p-8 md:p-12 shadow-xl border-l-[8px] border-[#ff7a00]">
            <h2 className="text-[#ff7a00] text-[30px] md:text-[37px] font-black text-center leading-tight mb-4">
              Keeping you comfortable, whatever the weather
            </h2>

            <p className="text-[#5f6b7a] leading-[34px]">
              Insulation works are an essential part of any construction project,
              providing thermal and acoustic insulation to buildings and structures.
              This service involves the installation of insulation materials,
              such as foam, fiberglass, or cellulose, to reduce heat loss,
              minimize noise transmission, and improve energy efficiency.
            </p>

            <p className="text-[#081b3a] font-bold mt-10 mb-5">
              Our insulation works services provide several benefits, including:
            </p>

            <ol className="space-y-4 text-[#5f6b7a] leading-[30px] list-decimal pl-6">
              <li>
                <b className="text-[#081b3a]">Energy efficiency:</b> Proper
                insulation can significantly reduce energy costs by minimizing
                heat loss or gain, which helps maintain a comfortable indoor
                environment and reduces energy bills.
              </li>
              <li>
                <b className="text-[#081b3a]">Comfort:</b> Our insulation
                services help keep indoor temperatures consistent, providing a
                more comfortable environment for building occupants.
              </li>
              <li>
                <b className="text-[#081b3a]">Noise reduction:</b> Insulation
                helps reduce noise transmission, providing a more peaceful and
                quiet indoor environment.
              </li>
              <li>
                <b className="text-[#081b3a]">Environmental sustainability:</b>{" "}
                Insulation works contribute to reducing carbon footprint and
                energy consumption, making it an environmentally sustainable
                solution.
              </li>
              <li>
                <b className="text-[#081b3a]">Expertise:</b> Our team of
                experienced professionals has the expertise to recommend and
                install the appropriate insulation materials to meet your specific
                needs and requirements.
              </li>
              <li>
                <b className="text-[#081b3a]">Safety:</b> Our insulation
                materials are non-toxic, non-combustible, and meet all safety
                standards and regulations.
              </li>
            </ol>

            <p className="text-[#5f6b7a] leading-[34px] mt-10">
              Insulation being one of our field of expertise we were able to do
              hot insulation which is designed to control the heat loss for heat
              conservation and used to protect the personnel from hot surfaces
              while the Cold Insulation was done to avoid condensation and icing
              on exterior surfaces and personnel protection.
            </p>

            <p className="text-[#5f6b7a] leading-[34px] mt-8">
              Fiberglass which is the most common insulation used in modern times
              is effective due to weaving of fine strands of glass into an
              insulation material, fiberglass is able to minimize heat and cold
              transfer. In our 2 years project at Biocon (M) Sdn Bhd, we were
              entrusted the contract to perform insulation works.
            </p>

            <p className="text-[#5f6b7a] leading-[34px] mt-8">
              We also have done several other types of insulation as well such as
              Personal Protection (PP) insulation, corrugated, PVC and SS316L
              (stainless steel jacket). Our other clients for insulation work also
              include but not limited to Kencana HL Sdn Bhd (Sapura Kencana),
              Samsung Engineering and Con Sdn Bhd and Boiler Care Sdn Bhd.
            </p>

            <p className="text-[#5f6b7a] leading-[34px] mt-8">
              Overall, our insulation works services provide a cost-effective
              solution for improving energy efficiency, comfort, and safety in
              buildings and structures. Whether it’s for new construction or
              renovation projects, we can provide quality insulation works that
              meet your specific needs and budget.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f5f7fb]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <p className="text-[#ff7a00] uppercase tracking-[5px] font-bold mb-4">
              Types Of Insulation Services
            </p>

            <h2 className="text-[#081b3a] text-[40px] md:text-[38px] font-black">
              Complete Work Categories
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
            <TypeCard
              title="Supply Of Insulation Material"
              text="Quality insulation materials supplied for industrial and construction needs."
            />

            <TypeCard
              title="Installation Of Insulation Works – Hot & Cold"
              text="Professional hot and cold insulation installation for safe and efficient performance."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function TypeCard({ title, text }) {
  return (
    <div className="bg-white rounded-[28px] p-8 shadow-lg flex gap-5 items-start hover:-translate-y-2 duration-300">
      <span className="w-12 h-12 rounded-full bg-[#ff7a00] flex items-center justify-center shrink-0">
        <Check className="text-white w-6 h-6" />
      </span>

      <div>
        <h3 className="text-[#081b3a] text-[22px] font-black">{title}</h3>
        <p className="text-[#6b7280] mt-3 leading-[28px]">{text}</p>
      </div>
    </div>
  );
}

export default InsulationWorks;

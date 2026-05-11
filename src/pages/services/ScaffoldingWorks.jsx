import { Check } from "lucide-react";
import ScaffoldingBanner from "./images/scaffolding.png";

function ScaffoldingWorks() {
  return (
    <div className="font-['Roboto'] bg-[#f5f7fb] overflow-x-hidden" style={{ fontFamily: 'Roboto, sans-serif' }}>
      {/* HERO BANNER */}
      <section className="relative min-h-[320px] md:min-h-[500px] overflow-hidden flex items-center justify-center">
        <img
          src={ScaffoldingBanner}
          alt="Scaffolding Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-105 contrast-110 saturate-125"
        />

        <div className="absolute inset-0 bg-[#081b3a]/55" />

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-6">
          

            <h1 className="relative text-white text-[46px] md:text-[64px] font-black leading-tight">
              Scaffolding Works
            </h1>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 bg-[#f5f7fb]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
          <div className="bg-white rounded-[36px] p-8 md:p-12 shadow-xl border-l-[8px] border-[#ff7a00]">

            <h2 className="text-[#ff7a00] text-[30px] md:text-[37px] font-black text-center leading-tight mb-4">
              Elevating your projects to new heights
            </h2>
            
            <p className="text-[#5f6b7a] leading-[34px]">
              Scaffold works are an integral part of any construction project,
              providing safe and efficient access for workers to elevated work
              areas. This service involves the installation and dismantling of
              scaffolding systems, including frames, platforms, and guardrails,
              to ensure a secure working environment for workers.
            </p>

            <p className="text-[#081b3a] font-bold mt-10 mb-5">
              Our scaffold works services provide several benefits, including:
            </p>

            <ol className="space-y-4 text-[#5f6b7a] leading-[30px] list-decimal pl-6">
              <li>
                <b className="text-[#081b3a]">Safety:</b> Our scaffolding
                systems are designed and installed to meet all relevant safety
                regulations, ensuring a safe working environment for workers.
              </li>

              <li>
                <b className="text-[#081b3a]">Accessibility:</b> Scaffolding
                provides safe and efficient access to elevated work areas,
                allowing workers to perform their tasks effectively and
                efficiently.
              </li>

              <li>
                <b className="text-[#081b3a]">Flexibility:</b> We offer
                customized scaffolding solutions to meet the unique needs of
                each project, including design, installation, and dismantling
                services.
              </li>

              <li>
                <b className="text-[#081b3a]">Expertise:</b> Our team of
                experienced professionals has the expertise to recommend and
                install the appropriate scaffolding systems to meet your specific
                project requirements.
              </li>

              <li>
                <b className="text-[#081b3a]">Cost-effective:</b> Our scaffold
                works services provide a cost-effective solution for providing
                safe and efficient access to elevated work areas, helping to
                reduce project costs.
              </li>

              <li>
                <b className="text-[#081b3a]">Reliability:</b> Our scaffold
                works services are reliable and efficient, ensuring that your
                project is completed on time and within budget.
              </li>
            </ol>

            <p className="text-[#5f6b7a] leading-[34px] mt-10">
              Scaffolding is widely used in constructions and renovation
              activities. In its simplest form, a scaffold is any temporary
              elevated or suspended work surface used to support workers and/or
              materials. There are many types of scaffolds, independent,
              supported and suspended.
            </p>

            <p className="text-[#5f6b7a] leading-[34px] mt-8">
              We at Lions as a competent scaffold specialist take pride in
              providing our clients with the best scaffold experience in
              compliance with DOSH. We are able to design, supply and install
              multitudes of both temporary and permanent scaffold platforms.
            </p>

            <p className="text-[#5f6b7a] leading-[34px] mt-8">
              Overall, our scaffold works services provide a safe, efficient,
              and cost-effective solution for accessing elevated work areas in
              construction projects.
            </p>
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section className="py-24 bg-[#f5f7fb]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <p className="text-[#ff7a00] uppercase tracking-[5px] font-bold mb-4">
              Types Of Scaffolding Works
            </p>

            <h2 className="text-[#081b3a] text-[40px] md:text-[38px] font-black">
              Complete Work Categories
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TypeCard
              title="Erection & Dismantle"
              text="Safe setup and removal of scaffold structures."
            />
            <TypeCard
              title="Trading & Rental"
              text="Scaffold materials and equipment rental support."
            />
            <TypeCard
              title="Inspections"
              text="Regular inspection to maintain safety and stability."
            />
            <TypeCard
              title="PE Drawing"
              text="Professional engineering drawing support for projects."
            />
            <TypeCard
              title="Installation : Tubular / Modular / H-Frame"
              text="Multiple scaffold systems based on site needs."
            />
            <TypeCard
              title="Training Services"
              text="Workforce training for safe scaffold usage."
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

export default ScaffoldingWorks;

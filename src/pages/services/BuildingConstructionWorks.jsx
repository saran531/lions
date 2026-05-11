import { Check } from "lucide-react";
import BuildingBanner from "./images/Building.png";

function BuildingConstructionWorks() {
  return (
    <div className="font-['Roboto'] bg-[#f5f7fb] overflow-x-hidden" style={{ fontFamily: 'Roboto, sans-serif' }}>
      {/* HERO */}
      <section className="relative min-h-[320px] md:min-h-[500px] overflow-hidden flex items-center justify-center">
        <img
          src={BuildingBanner}
          alt="Building Construction Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-105 contrast-110 saturate-125"
        />

        <div className="absolute inset-0 bg-[#081b3a]/55" />

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="relative text-white text-[46px] md:text-[64px] font-black leading-tight">
              Building Construction Works
            </h1>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 bg-[#f5f7fb]">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-16">
          <div className="bg-white rounded-[36px] p-8 md:p-14 shadow-xl border-l-[8px] border-[#ff7a00]">
            <h2 className="text-[#ff7a00] text-[30px] md:text-[37px] font-black text-center leading-tight">
              Building your vision into reality with expert construction services
            </h2>

            <p className="text-[#5f6b7a] leading-[42px] text-[20px] mt-12">
              Building construction works encompass a wide range of services
              related to the construction of new buildings or the renovation of
              existing ones.
            </p>

            <p className="text-[#081b3a] font-bold text-[24px] mt-16 mb-10">
              The following are some of the primary services involved in building
              construction works:
            </p>

            <ol className="space-y-6 text-[#5f6b7a] leading-[38px] text-[20px] list-decimal pl-8">
              <li>
                <b className="text-[#081b3a]">Design and Planning:</b> This
                involves the conceptualization and planning of the building’s
                design, layout, and structure. It includes site analysis,
                feasibility studies, architectural design, and engineering design.
              </li>

              <li>
                <b className="text-[#081b3a]">Site Preparation:</b> This involves
                site clearance, grading, excavation, and preparation of the
                foundation.
              </li>

              <li>
                <b className="text-[#081b3a]">Structural Works:</b> This includes
                the construction of the building’s skeleton, including the columns,
                beams, and other load-bearing elements.
              </li>

              <li>
                <b className="text-[#081b3a]">Masonry Works:</b> This involves the
                laying of bricks or blocks, plastering, and other finishing works.
              </li>

              <li>
                <b className="text-[#081b3a]">Roofing:</b> This includes the
                installation of the roof structure, roofing materials, and other
                related works.
              </li>

              <li>
                <b className="text-[#081b3a]">Plumbing and Electrical Works:</b>{" "}
                This includes the installation of plumbing fixtures, wiring, and
                electrical fixtures, as well as heating, ventilation, and air
                conditioning (HVAC) systems.
              </li>

              <li>
                <b className="text-[#081b3a]">Finishing Works:</b> This involves
                the installation of finishes such as flooring, painting, and other
                decorative works.
              </li>

              <li>
                <b className="text-[#081b3a]">Landscaping and Site Development:</b>{" "}
                This includes the development of the surrounding area, including
                landscaping, paving, and other site improvements.
              </li>

              <li>
                <b className="text-[#081b3a]">Project Management:</b> This involves
                the coordination of all aspects of the building construction
                project, from the design and planning phase to the final completion
                and handover of the project.
              </li>
            </ol>

            <p className="text-[#5f6b7a] leading-[42px] text-[20px] mt-16">
              Building construction works are typically carried out by a team of
              professionals, including architects, engineers, contractors, and
              other skilled workers. These professionals work together to ensure
              that the building is constructed to the highest standards of safety,
              functionality, and aesthetic appeal.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-24 bg-[#f5f7fb]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <p className="text-[#ff7a00] uppercase tracking-[5px] font-bold mb-4">
              Construction Categories
            </p>

            <h2 className="text-[#081b3a] text-[40px] md:text-[38px] font-black">
              Categories of Construction Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <CategoryCard
              title="Material Supply"
              text="Supplying high-quality construction materials for all building and industrial projects."
            />

            <CategoryCard
              title="Man Power"
              text="Skilled and experienced manpower support for construction and industrial operations."
            />

            <CategoryCard
              title="Safety"
              text="Advanced safety systems and protective solutions for secure construction environments."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function CategoryCard({ title, text }) {
  return (
    <div className="bg-white rounded-[28px] p-10 shadow-lg hover:-translate-y-2 duration-300">
      <div className="w-16 h-16 rounded-full bg-[#ff7a00] flex items-center justify-center mb-8">
        <Check className="text-white w-8 h-8" />
      </div>

      <h3 className="text-[#081b3a] text-[28px] font-black">{title}</h3>

      <p className="text-[#6b7280] mt-5 leading-[32px]">{text}</p>
    </div>
  );
}

export default BuildingConstructionWorks;

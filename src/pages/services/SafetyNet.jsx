import SafetyBanner from "./images/safety.png";

function SafetyNet() {
  return (
    <div className="font-['Roboto'] bg-[#f5f7fb] overflow-x-hidden" style={{ fontFamily: 'Roboto, sans-serif' }}>
      {/* HERO */}
      <section className="relative min-h-[320px] md:min-h-[500px] overflow-hidden flex items-center justify-center">
        <img
          src={SafetyBanner}
          alt="Safety Net Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-105 contrast-110 saturate-125"
        />

        <div className="absolute inset-0 bg-[#081b3a]/55"></div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="relative text-white text-[46px] md:text-[64px] font-black leading-tight">
              Safety Net
            </h1>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 bg-[#f5f7fb]">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-16">
          <div className="bg-white rounded-[36px] p-8 md:p-14 shadow-xl border-l-[8px] border-[#ff7a00]">
            <h2 className="text-[#ff7a00] text-[30px] md:text-[37px] font-black text-center leading-tight">
              Protect your workers and public - trust our expert safety catch
              net services for reliable and effective protection
            </h2>

            <p className="text-[#5f6b7a] leading-[42px] text-[20px] mt-14">
              Safety catch net service refers to the installation of protective
              nets around construction sites or other work areas at height to
              prevent falling objects from causing harm to people or property
              below. The nets are designed to catch objects such as tools,
              debris, and materials that may fall from scaffolding or other
              elevated work areas, reducing the risk of injury or damage.
            </p>

            <p className="text-[#5f6b7a] leading-[42px] text-[20px] mt-20">
              The safety catch netting system consists of high-quality netting
              material and specialized fixtures and fastenings that are installed
              securely to the surrounding structures. The netting is designed to
              withstand heavy loads and provide a high level of protection for
              workers and the public below.
            </p>

            <p className="text-[#5f6b7a] leading-[42px] text-[20px] mt-20">
              The installation of safety catch nets requires specialized
              expertise and equipment to ensure that the nets are installed
              correctly and securely. Safety catch net services are typically
              provided by specialized companies that have the necessary
              expertise, equipment, and trained personnel to carry out the work
              safely and efficiently.
            </p>

            <p className="text-[#5f6b7a] leading-[42px] text-[20px] mt-20">
              The use of safety catch netting systems is essential for
              construction and maintenance projects that involve work at height.
              They provide a critical safety measure to prevent falling objects
              from causing harm to people or property below, reducing the risk
              of injury, liability, and downtime.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ QUESTIONS */}
      <section className="py-24 bg-[#f5f7fb]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
          <div className="bg-white rounded-[36px] p-8 md:p-12 shadow-xl border-l-[8px] border-[#ff7a00]">
            <h2 className="text-[#081b3a] text-[40px] md:text-[38px] font-black leading-tight mb-10">
              Frequently Asked Questions
            </h2>

            <div className="space-y-9">
              <FaqItem
                question="1. What are safety nets used for?"
                answer="Safety nets are designed to prevent falls, protect workers, and provide an additional layer of safety at construction sites, industrial facilities, and maintenance projects."
              />

              <FaqItem
                question="2. Where can safety nets be installed?"
                answer="Safety nets can be installed in construction buildings, warehouses, factories, bridges, event venues, and other elevated work areas requiring fall protection."
              />

              <FaqItem
                question="3. Do you provide customized safety net solutions?"
                answer="Yes. We assess your site requirements and provide customized safety net installations based on the project size, height, and safety needs."
              />

              <FaqItem
                question="4. Are your safety nets durable and compliant with safety standards?"
                answer="Yes. We use high-quality materials and follow industry safety standards to ensure reliable protection and long-term performance."
              />

              <FaqItem
                question="5. How can I get a quote for safety net installation?"
                answer="Simply contact us with your project details and site requirements. Our team will evaluate your needs and provide a customized quotation."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FaqItem({ question, answer }) {
  return (
    <div>
      <h3 className="text-[#081b3a] text-[22px] md:text-[24px] font-black leading-[34px]">
        {question}
      </h3>
      <p className="text-[#5f6b7a] text-[18px] md:text-[20px] leading-[32px] md:leading-[36px] mt-4">
        {answer}
      </p>
    </div>
  );
}

export default SafetyNet;

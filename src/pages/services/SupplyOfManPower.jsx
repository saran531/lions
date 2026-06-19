import { Check } from "lucide-react";
import ManPowerBanner from "./images/manpower.png";

function SupplyOfManPower() {
  return (
    <div className="font-['Roboto'] bg-[#f5f7fb] overflow-x-hidden" style={{ fontFamily: 'Roboto, sans-serif' }}>
      {/* HERO SECTION */}
      <section className="relative min-h-[320px] md:min-h-[500px] overflow-hidden flex items-center justify-center">
        <img
          src={ManPowerBanner}
          alt="Supply Of Man Power Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-105 contrast-110 saturate-125"
        />

        <div className="absolute inset-0 bg-[#081b3a]/55"></div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="relative text-white text-[46px] md:text-[64px] font-black leading-tight">
              Supply Of Man Power
            </h1>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 bg-[#f5f7fb]">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-16">
          <div className="bg-white rounded-[36px] p-8 md:p-14 shadow-xl border-l-[8px] border-[#ff7a00]">
            <h2 className="text-[#ff7a00] text-[30px] md:text-[37px] font-black text-center leading-tight">
              Empowering your workforce with skilled professionals
            </h2>

            <p className="text-[#5f6b7a] leading-[42px] text-[20px] mt-12">
              The supply of manpower services provides businesses and
              organizations with the flexibility to quickly and efficiently meet
              their workforce needs. This service involves the deployment of
              skilled and qualified professionals to meet specific job
              requirements, including temporary, permanent, or contract staffing
              solutions.
            </p>

            <p className="text-[#081b3a] font-bold text-[24px] mt-16 mb-10">
              Our supply of manpower services provides several benefits,
              including:
            </p>

            <ol className="space-y-6 text-[#5f6b7a] leading-[38px] text-[20px] list-decimal pl-8">
              <li>
                <b className="text-[#081b3a]">Skilled workforce:</b> Our team
                consists of skilled professionals who are carefully selected and
                trained to meet the specific requirements of our clients.
              </li>

              <li>
                <b className="text-[#081b3a]">Flexibility:</b> Our services are
                flexible and can be customized to meet the changing needs of our
                clients, including short-term or long-term staffing solutions.
              </li>

              <li>
                <b className="text-[#081b3a]">Cost-effective:</b> Our staffing
                solutions are cost-effective, allowing businesses to reduce
                their hiring and training costs while maintaining a high-quality
                workforce.
              </li>

              <li>
                <b className="text-[#081b3a]">Quick turnaround:</b> We have a
                vast database of skilled professionals, allowing us to provide
                quick turnaround times for our clients.
              </li>

              <li>
                <b className="text-[#081b3a]">Compliance:</b> We adhere to all
                relevant labor laws and regulations, ensuring that our services
                are fully compliant with industry standards.
              </li>
            </ol>

            <p className="text-[#5f6b7a] leading-[42px] text-[20px] mt-16">
              Overall, our supply of manpower services provides businesses with
              a reliable and effective solution for their workforce needs.
              Whether you require temporary, permanent, or contract staffing
              solutions, we can provide skilled professionals who will help you
              achieve your business objectives.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-24 bg-[#f5f7fb]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <p className="text-[#ff7a00] uppercase tracking-[5px] font-bold mb-4">
              Man Power Categories
            </p>

            <h2 className="text-[#081b3a] text-[40px] md:text-[38px] font-black">
              Categories of Man Power
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
            <CategoryCard
              title="Skilled"
              text="Experienced and professionally trained manpower for specialized industrial and construction operations."
            />

            <CategoryCard
              title="Unskilled"
              text="Reliable workforce support for general labor and site assistance across multiple projects."
            />
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
                question="1. What manpower supply services do you provide?"
                answer="We provide skilled, semi-skilled, and unskilled manpower for construction, industrial, commercial, maintenance, and facility management projects."
              />

              <FaqItem
                question="2. Can you supply manpower for short-term and long-term projects?"
                answer="Yes. We offer flexible manpower solutions for both temporary assignments and long-term workforce requirements."
              />

              <FaqItem
                question="3. How do you ensure the quality of the workforce provided?"
                answer="Our manpower is carefully screened, qualified, and assigned based on the specific skills and experience required for each project."
              />

              <FaqItem
                question="4. What industries do you serve?"
                answer="We support a wide range of industries, including construction, manufacturing, oil & gas, facilities management, logistics, and commercial sectors."
              />

              <FaqItem
                question="5. How can I request manpower for my project?"
                answer="Simply share your workforce requirements, project location, and duration with our team. We will provide suitable manpower solutions tailored to your needs."
              />
            </div>
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

export default SupplyOfManPower;

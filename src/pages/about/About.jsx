import Client1 from "./images/Client1.png";
import Client2 from "./images/Client2.png";
import Client3 from "./images/Client3.png";
import Client4 from "./images/Client4.png";
import Client5 from "./images/Client5.png";
import Client6 from "./images/Client6.png";
import Client7 from "./images/Client7.png";
import Client8 from "./images/Client8.png";
import Certificate1 from "./images/Certificate1.png";
import Certificate2 from "./images/Certificate2.png";
import Founder from "./images/Founder.png";
import AboutBanner from "./images/about.png";

function About() {
  const clients = [
    Client1,
    Client2,
    Client3,
    Client4,
    Client5,
    Client6,
    Client7,
    Client8,
  ];

  return (
    <div className="font-['Roboto'] bg-[#f6f8fc] overflow-x-hidden" style={{ fontFamily: 'Roboto, sans-serif' }}>
      {/* HERO */}
      <section className="relative min-h-[320px] md:min-h-[500px] overflow-hidden flex items-center justify-center">
        <img
          src={AboutBanner}
          alt=""
          className="absolute inset-0 w-full h-full object-cover brightness-105 contrast-110 saturate-125"
        />

        <div className="absolute inset-0 bg-[#081b3a]/55"></div>

         <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-6">
            

            <h1 className="relative text-white text-[46px] md:text-[64px] font-black leading-tight">
              About
            </h1>
          </div>
        </div>

        
      </section>

      {/* COMPANY INTRO */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="bg-[#081b3a] rounded-[40px] p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-[#ff7a00]/30 rounded-bl-full" />

              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=90&w=1600&auto=format&fit=crop"
                className="w-full h-[560px] object-cover rounded-[30px]"
                alt="Construction"
              />

              <div className="absolute bottom-12 left-12 bg-[#ff7a00] text-white rounded-[28px] px-8 py-6 shadow-2xl">
                <h2 className="text-[54px] font-black">18+</h2>
                <p className="font-bold text-[17px]">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
           <p className="text-[#ff7a00] uppercase tracking-[4px] font-semibold mb-5">
              Get To Know Lions
            </p>

            <h2 className="text-[#081b3a] text-[42px] md:text-[38px] font-black leading-tight">
              The Best Industry & Factory Business
            </h2>

            <p className="text-[#5f6b7a] text-[18px] leading-[34px] mt-7 max-w-[680px]">
              We Lions Global Services strive to be a trusted & responsible
              organization, in which we live & work. We recognized that customer
              trust & confidences are earned through safety, performance &
              involvement.
            </p>

            <p className="text-[#5f6b7a] text-[18px] leading-[34px] mt-6 max-w-[680px]">
              We are growing together with our customers by providing the
              competitive services in a sustainable market. We satisfy our
              customers’ needs and fulfil their requirements by ensuring that we
              complete our projects safely, on time, within budget. Our aim is to
              achieve the highest standard of customer satisfaction possible, by
              maintaining a continuous partnership with our customers and based on
              our competence and trust.
            </p>

            <button className="mt-10 bg-[#081b3a] hover:bg-[#12305f] duration-300 text-white px-8 py-4 rounded-full font-semibold">
              DISCOVER MORE
            </button>
          </div>
        </div>
      </section>

      {/* MISSION VISION STRATEGY */}
   <section className="py-24 bg-[#081b3a] relative overflow-hidden">
  <div className="absolute left-[-150px] top-[-150px] w-[400px] h-[400px] bg-[#ff7a00]/20 rounded-full blur-[90px]" />

  <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative">
    <div className="text-center mb-16">
      <p className="text-[#ff7a00] uppercase tracking-[8px] font-black mb-4">
        Our Direction
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-10">
      
      {/* CARD 1 */}
      <div className="bg-[#f3f3f3] rounded-[36px] p-12 min-h-[420px] shadow-2xl flex flex-col justify-start">
        <span
          className="text-[#ff7a00] font-black"
          style={{
            fontSize: "80px",
            lineHeight: "75px",
          }}
        >
          01
        </span>

        <h3 className="text-[#081b3a] text-[45px] font-black mt-10 leading-none">
          Mission
        </h3>

        <p className="text-[#5b6475] text-[22px] leading-[42px] mt-10 font-medium">
          Thrive to Exceed Our Customers Expectations & Satisfactions by Our
          Products & Services.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="bg-[#ff7a00] rounded-[36px] p-12 min-h-[420px] shadow-2xl flex flex-col justify-start lg:translate-y-10">
        <span
          className="text-white/35 font-black"
          style={{
            fontSize: "80px",
            lineHeight: "75px",
          }}
        >
          02
        </span>

        <h3 className="text-white text-[45px] font-black mt-10 leading-none">
          Vision
        </h3>

        <p className="text-white/95 text-[22px] leading-[42px] mt-10 font-medium">
          To Be Local Leader in Providing Quality & Excellent Services to
          Various Industries.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="bg-[#f3f3f3] rounded-[36px] p-12 min-h-[420px] shadow-2xl flex flex-col justify-start">
        <span
          className="text-[#ff7a00] font-black"
          style={{
            fontSize: "80px",
            lineHeight: "75px",
          }}
        >
          03
        </span>

        <h3 className="text-[#081b3a] text-[45px] font-black mt-10 leading-none">
          Strategy
        </h3>

        <p className="text-[#5b6475] text-[22px] leading-[42px] mt-10 font-medium">
          We are looking forward to capitalize on growth opportunities in the
          market to expand our business and customer base.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* FOUNDER */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <p className="text-[#ff7a00] uppercase tracking-[6px] font-bold mb-4">
              Leadership
            </p>
            <h2 className="text-[#081b3a] text-[42px] md:text-[38px] font-black">
             Founder of Lions Global Services ( Mr Anbuselvan )
            </h2>
          </div>

          <div className="flex justify-center">
            <div className="bg-[#f6f8fc] rounded-[40px] p-8 shadow-2xl max-w-[600px]">
              <img
                src={Founder}
                alt="Founder of LionGlobalServices"
                className="w-full h-auto rounded-[30px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      {/* PROCESS */}
      <section className="py-24 bg-[#f6f8fc]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#ff7a00] uppercase tracking-[5px] font-bold mb-4">
                How We Work
              </p>

              <h2 className="text-[#081b3a] text-[42px] md:text-[48px] font-black leading-tight">
                Simple Process. Strong Results.
              </h2>

              <p className="text-[#5f6b7a] text-[18px] leading-[34px] mt-7">
                Every project follows a clear workflow from planning to execution.
                This helps us control safety, quality, time, and cost with better
                coordination.
              </p>
            </div>

            <div className="space-y-6">
              <ProcessCard
                no="1"
                title="Site Study"
                text="Understand project requirements, location, manpower, and safety needs."
              />
              <ProcessCard
                no="2"
                title="Planning"
                text="Prepare materials, workforce schedule, tools, and execution method."
              />
              <ProcessCard
                no="3"
                title="Execution"
                text="Complete work with trained team, supervision, and regular safety checks."
              />
              <ProcessCard
                no="4"
                title="Quality Review"
                text="Final inspection, client feedback, and continuous service improvement."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-24 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-16">
          <div className="bg-[#f6f8fc] rounded-[46px] p-8 md:p-14 shadow-xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[260px] h-[260px] bg-[#ff7a00]/10 rounded-bl-full" />

            <p className="text-[#ff7a00] uppercase tracking-[5px] font-bold mb-4 relative">
              Our Clients
            </p>

            <h2 className="text-[#081b3a] text-[32px] md:text-[40px] font-black leading-tight relative">
              We Develop Good Relationships.
              <br />
              Start Working Together
            </h2>

            <a
              href="/contact"
              className="inline-block bg-[#ff7a00] text-white px-9 py-4 rounded-full font-bold mt-8 relative"
            >
              Contact With Us
            </a>

            <div className="mt-16 bg-white rounded-[36px] p-6 md:p-10 shadow-lg relative">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center">
               {clients.map((client, index) => (
  <div
    key={index}
    tabIndex={0}
    className="group h-[110px] md:h-[130px] bg-white rounded-2xl border border-gray-100 flex items-center justify-center p-4 hover:shadow-lg active:shadow-lg focus:shadow-lg transition cursor-pointer"
  >
    <img
      src={client}
      alt={`Client ${index + 1}`}
      className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 group-hover:scale-[1.05] group-active:grayscale-0 group-active:scale-[1.08] group-focus:grayscale-0 group-focus:scale-[1.08] transition duration-300"
    />
  </div>
))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATION */}
      <section className="py-24 bg-[#ff7a00]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="text-center mb-14">
            <p className="text-white uppercase tracking-[5px] font-bold mb-4">
              Trusted Quality
            </p>

            <h2 className="text-white text-[42px] md:text-[40px] font-black">
              Our Certification
            </h2>

            <p className="text-white/90 text-[18px] leading-[32px] mt-5 max-w-[800px] mx-auto">
              Our certifications reflect our commitment to safety, quality
              standards, and professional industrial service excellence.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <CertificateCard
              img={Certificate1}
              title="CIDB Malaysia Contractor Registration"
              text="Officially certified and registered under CIDB Malaysia for authorized construction and industrial services."
            />

            <CertificateCard
              img={Certificate2}
              title="Scaffolding Supervisor Registration Certificate"
              text="Certified and authorized to supervise scaffolding works in compliance with Malaysia safety regulations. "
            />

          </div>
        </div>
      </section>
    </div>
  );
}

function ProcessCard({ no, title, text }) {
  return (
    <div className="bg-white rounded-[26px] p-7 shadow-lg flex gap-6">
      <span className="w-[58px] h-[58px] bg-[#ff7a00] text-white rounded-2xl flex items-center justify-center font-black text-[22px] shrink-0">
        {no}
      </span>

      <div>
        <h3 className="text-[#081b3a] text-[23px] font-bold">{title}</h3>
        <p className="text-[#6b7280] mt-2 leading-[28px]">{text}</p>
      </div>
    </div>
  );
}

function CertificateCard({ img, title, text }) {
  return (
    <div className="w-full max-w-[420px] bg-white rounded-[32px] p-6 shadow-2xl">
      <div className="h-[320px] rounded-[24px] bg-[#f4f7fb] border-2 border-dashed border-[#ff7a00]/40 flex items-center justify-center overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-contain p-4"
        />
      </div>

      <h3 className="text-[#081b3a] text-[24px] font-black mt-6">{title}</h3>

      <p className="text-[#6b7280] leading-[28px] mt-3">{text}</p>
    </div>
  );
}

export default About;

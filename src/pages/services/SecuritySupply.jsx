import { ShieldCheck, Shield } from "lucide-react";
import SecurityBanner from "./images/security.png";

function SecuritySupply() {
  return (
    <div className="font-['Roboto'] bg-[#f5f7fb] overflow-x-hidden" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <section className="relative min-h-[320px] md:min-h-[500px] overflow-hidden flex items-center justify-center">
        <img
          src={SecurityBanner}
          alt="Security Supply Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-105 contrast-110 saturate-125"
        />

        <div className="absolute inset-0 bg-[#081b3a]/55" />

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="relative text-white text-[46px] md:text-[64px] font-black leading-tight">
              Security Supply
            </h1>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f5f7fb]">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-16">
          <div className="bg-white rounded-[36px] p-8 md:p-14 shadow-xl border-l-[8px] border-[#ff7a00]">
            <h2 className="text-[#ff7a00] text-[30px] md:text-[37px] font-black text-center leading-tight">
              Securing your peace of mind, every step of the way
            </h2>

            <p className="text-[#5f6b7a] leading-[42px] text-[20px] mt-12">
              Security supply services, including escort and static security,
              provide critical support to businesses and organizations by
              ensuring their assets and personnel are protected. Escort security
              involves the safe transportation of valuable assets, such as money
              or high-value equipment, from one location to another.
            </p>

            <p className="text-[#5f6b7a] leading-[42px] text-[20px] mt-8">
              This service is typically provided by trained security personnel
              who accompany the assets throughout the transportation process,
              ensuring their safety and security.
            </p>

            <p className="text-[#5f6b7a] leading-[42px] text-[20px] mt-8">
              Static security, on the other hand, involves providing on-site
              security at a particular location or event. This service involves
              the deployment of trained security personnel who monitor access
              points, deter unauthorized access, and respond to security
              incidents.
            </p>

            <p className="text-[#081b3a] font-bold text-[24px] mt-16 mb-10">
              Our security supply services provide several benefits, including:
            </p>

            <ol className="space-y-6 text-[#5f6b7a] leading-[38px] text-[20px] list-decimal pl-8">
              <li>
                <b className="text-[#081b3a]">Enhanced security:</b> Our trained
                security personnel are equipped to identify and respond to
                potential security threats, minimizing the risk of loss or damage
                to your assets.
              </li>

              <li>
                <b className="text-[#081b3a]">Professionalism:</b> Our security
                personnel are trained to act professionally and discreetly,
                ensuring that your operations remain uninterrupted while providing
                security.
              </li>

              <li>
                <b className="text-[#081b3a]">Flexibility:</b> We offer flexible
                security solutions tailored to meet the unique requirements of
                each client, including escort security, static security, or a
                combination of both.
              </li>

              <li>
                <b className="text-[#081b3a]">Peace of mind:</b> Our security
                supply services provide our clients with peace of mind, knowing
                that their assets and personnel are protected.
              </li>

              <li>
                <b className="text-[#081b3a]">Compliance:</b> We adhere to all
                relevant regulations and guidelines to ensure that our security
                services are fully compliant with industry standards.
              </li>
            </ol>

            <p className="text-[#5f6b7a] leading-[42px] text-[20px] mt-16">
              Overall, our security supply services provide a reliable and
              effective solution for businesses and organizations looking to
              enhance their security and protect their assets.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f5f7fb]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <p className="text-[#ff7a00] uppercase tracking-[5px] font-bold mb-4">
              Security Categories
            </p>

            <h2 className="text-[#081b3a] text-[40px] md:text-[38px] font-black">
              Security Service Types
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <SecurityCard
              icon={<ShieldCheck />}
              title="Escort Security"
              text="Professional escort security services for safe transportation of valuable assets and personnel."
            />

            <SecurityCard
              icon={<Shield />}
              title="Static Security"
              text="Reliable on-site static security solutions for industrial, commercial, and event locations."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function SecurityCard({ icon, title, text }) {
  return (
    <div className="bg-white rounded-[28px] p-10 shadow-lg hover:-translate-y-2 duration-300">
      <div className="w-16 h-16 rounded-full bg-[#ff7a00] flex items-center justify-center mb-8 text-white">
        {icon}
      </div>

      <h3 className="text-[#081b3a] text-[28px] font-black">{title}</h3>

      <p className="text-[#6b7280] mt-5 leading-[32px]">{text}</p>
    </div>
  );
}

export default SecuritySupply;

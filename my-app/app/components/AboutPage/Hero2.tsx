import Image from "next/image";

export default function Hero2() {
  return (
      <div>
    <section className="bg-[#ff9f0d] to-85% text-white pt-12 h-[300px] pb-14 ">
     
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">Team Member</h2>
        <p className="text-gray-200 max-w-lg mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue.
        </p>
      </div>

     
    </section>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto -mt-[130px] w-8/12">
       
       {teamMembers.map((member, index) => (
         <div
           key={index}
           className="bg-white text-black rounded-lg overflow-hidden shadow-lg"
         >
           <div className="relative">
             
             <Image
               src="/member.png"
               alt={member.name}
               width={300}
               height={400}
               className="w-full h-auto"
             />
             
           </div>

           
           <div className="text-center p-4">
             <h3 className="text-lg font-semibold">{member.name}</h3>
             <p className="text-gray-500">{member.role}</p>
           </div>
         </div>
       ))}
     </div>
    </div>
  );
}


const teamMembers = [
  { name: "Mark Henry", role: "Owner" },
  { name: "Lucky Helen", role: "Chef" },
  { name: "Moon Henry", role: "Founder" },
  { name: "Tom Monrow", role: "Specialist" },
];

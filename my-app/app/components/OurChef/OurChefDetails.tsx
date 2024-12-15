import Image from "next/image";

export default function OurChefDetails() {
  const teamMembers = [
    { name: "Tahmina Rumi", role: "Chef", image: "/chef.png" },
    { name: "Jorina Begum", role: "Chef", image: "/chef1.png" },
    { name: "M. Mohammad", role: "Chef", image: "/chef2.png" },
    { name: "Munna Kathy", role: "Chef", image: "/chef3.png" },
    { name: "Tahmina Rumi", role: "Chef", image: "/chef4.png" },
    { name: "Bisnu Devgon", role: "Chef", image: "/member.png" },
    { name: "Motin Molladf", role: "Chef", image: "/chef5.png" },
    { name: "William Rumi", role: "Chef", image: "/chef6.png" },
    { name: "Kets William Roy", role: "Chef", image: "/chef7.png" },
    { name: "Mahmud Kholil", role: "Chef", image: "/chef8.png" },
    { name: "Ataur Rahman", role: "Chef", image: "/chef9.png" },
    { name: "Monalisa Holly", role: "Chef", image: "/chef10.png" },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-4 lg:w-8/12 py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center shadow-lg rounded-lg pb-4">
            <Image
              src={member.image}
              alt={member.name}
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
            <h2 className="font-semibold mt-4 text-center">{member.name}</h2>
            <p className="text-gray-600 text-center">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


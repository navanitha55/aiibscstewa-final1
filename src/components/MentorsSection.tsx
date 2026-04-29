import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import presidentImg from "@/assets/members/president.jpg";
import generalSecretaryImg from "@/assets/members/general-secretary.jpg";
import treasurerImg from "@/assets/members/treasurer.jpg";
import patternGeometric from "@/assets/pattern-geometric-members.png";

// All members data with correct order - 3 main members first
const allMembers = [
  { id: 1, name: "Avinash Kumar", role: "President", zone: "IR Cell, Patna", image: presidentImg, featured: true },
  { id: 2, name: "K. Babu", role: "General Secretary", zone: "Chennai South", image: generalSecretaryImg, featured: true },
  { id: 3, name: "D. Nandakumar", role: "Treasurer", zone: "Chennai North", image: treasurerImg, featured: true },
  { id: 4, name: "Kuldeep Singh", role: "Working President", zone: "Kanpur", featured: false },
  { id: 5, name: "C Prabhakaran", role: "Vice President", zone: "Poonamallee", featured: false },
  { id: 6, name: "B B Rabha", role: "Vice President", zone: "Guwahati", featured: false },
  { id: 7, name: "Manoj Kumar Tigga", role: "Vice President", zone: "Ranchi", featured: false },
  { id: 8, name: "Kanagaselvan", role: "Dy. General Secretary", zone: "Chennai South", featured: false },
  { id: 9, name: "Santosh Kumar Patil", role: "Dy. General Secretary", zone: "Jabalpur", featured: false },
  { id: 10, name: "Satya Prakash Meena", role: "Organizing Secretary", zone: "Jaipur", featured: false },
  { id: 11, name: "Satyamurthy", role: "Asst. Treasurer", zone: "Chennai North", featured: false },
  { id: 12, name: "R. Selvakumar", role: "Joint Secretary", zone: "Chennai Central", featured: false },
  { id: 13, name: "M. Ramesh", role: "Executive Member", zone: "Hyderabad", featured: false },
  { id: 14, name: "P. Venkatesh", role: "Executive Member", zone: "Bangalore", featured: false },
  { id: 15, name: "S. Kumar", role: "Executive Member", zone: "Mumbai", featured: false },
];

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();
};

const MentorsSection = () => {
  // Duplicate members for seamless infinite scroll
  const duplicatedMembers = [...allMembers, ...allMembers];

  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Geometric Pattern Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${patternGeometric})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center right',
          backgroundSize: 'cover',
          opacity: 0.15,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-secondary font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Our Leaders
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mt-2">
            Our <span className="text-primary">Members</span>
          </h2>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Track */}
          <div className="flex animate-marquee hover:pause-animation">
            {duplicatedMembers.map((member, index) => (
              <div
                key={`${member.id}-${index}`}
                className="flex-shrink-0 w-32 sm:w-36 md:w-40 mx-2 sm:mx-3 text-center group cursor-pointer"
              >
                {/* Avatar Container */}
                <div 
                  className={`mx-auto mb-3 sm:mb-4 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden 
                    shadow-lg transition-all duration-300 ease-out
                    group-hover:scale-110 group-hover:shadow-xl
                    ${member.featured 
                      ? 'ring-3 ring-primary shadow-primary/30 shadow-lg' 
                      : 'ring-2 ring-border/50'
                    }`}
                >
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary/10 text-lg sm:text-xl md:text-2xl">
                      <span className="text-primary font-bold">
                        {getInitials(member.name)}
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Name */}
                <h3 className="font-heading font-bold text-foreground text-xs sm:text-sm md:text-base truncate px-1 transition-colors group-hover:text-primary">
                  {member.name}
                </h3>
                
                {/* Role */}
                <p className={`font-medium text-[10px] sm:text-xs truncate px-1 ${
                  member.featured ? 'text-primary' : 'text-muted-foreground'
                }`}>
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* See More Button */}
        <div className="text-center mt-8 sm:mt-10">
          <Link to="/committee">
            <Button size="lg" className="group text-sm sm:text-base">
              See All Members
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;

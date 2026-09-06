import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EngineSection from "@/components/sections/EngineSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import HackathonsSection from "@/components/sections/HackathonsSection";
import VolunteeringSection from "@/components/sections/VolunteeringSection";
import ResearchSection from "@/components/sections/ResearchSection";
import OtherActivitiesSection from "@/components/sections/OtherActivitiesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <EngineSection />
      <EducationSection />
      <SkillsSection />
      <AchievementsSection />
      <CertificationsSection />
      <HackathonsSection />
      <VolunteeringSection />
      <ResearchSection />
      <OtherActivitiesSection />
      <ContactSection />
    </main>
  );
}

import LearningCard from '../../components/LearningCard';

export default function Learning() {
  return (
    <div className="flex w-full flex-row flex-wrap mobile:justify-center tabletHori:justify-between mobile:gap-y-10 laptop:gap-y-20">
      <LearningCard
        title="Certification Prep"
        imageName="learning/certifications.png"
      />
      <LearningCard title="Cloud Fundamentals" imageName="learning/cloud.png" />
      <LearningCard
        title="Cybersecurity Essentials"
        imageName="learning/cybersecurity.png"
      />
      <LearningCard
        title="Data & Visualization"
        imageName="learning/visualization.png"
      />
      <LearningCard
        title="DevOps & Automation"
        imageName="learning/devops.png"
      />
      <LearningCard
        title="ML in Cybersecurity"
        imageName="learning/machine-learning.png"
      />
      <LearningCard
        title="Digital Forensics"
        imageName="learning/digital-forensics.png"
      />
      <LearningCard title="API Security & Dev" imageName="learning/api.png" />
      <LearningCard
        title="Governance & Compliance"
        imageName="learning/grc.png"
      />
    </div>
  );
}

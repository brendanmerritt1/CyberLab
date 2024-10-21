export default function AWSSuite() {
  return (
    <>
      <div className="flex flex-col items-center gap-5 mobile:px-[1rem] tabletVert:px-[2rem] tabletHori:px-[3rem] laptop:px-[8rem] desktop:px-[17rem]">
        <h3 className="underline mobile:text-xl tabletVert:text-2xl tabletHori:text-2xl laptop:text-2xl desktop:text-2xl">
          AWS in the CyberLab
        </h3>
        <span className="text-center text-lg">
          AWS powers the infrastructure behind the CyberLab, enabling interns to
          create, deploy, and manage cloud resources for various projects and
          labs. More likely than not, the majority of the work you'll do will be
          integrated with AWS. You'll be working with services like EC2 for
          compute resources, S3 for secure storage, Lambda for serverless
          functions, and CloudWatch for monitoring your applications. These
          tools provide a robust environment for learning about cloud
          technologies, security, and infrastructure management.
        </span>
      </div>
      <div className="flex flex-col items-center gap-5 tabletVert:px-[2rem] laptop:px-0 desktop:px-0 mobile:px-[2rem]">
        <h3 className="underline mobile:text-xl tabletVert:text-2xl tabletHori:text-2xl laptop:text-2xl desktop:text-2xl text-center">
          Guidelines for Using AWS
        </h3>
        <span className="text-center text-lg">
          Please be mindful of resource usage in AWS. To keep costs low:
        </span>
        <ul className="list-disc text-lg">
          <li>Always turn off EC2 instances when not in use.</li>
          <li>
            Avoid creating high-cost resources unless instructed by the labs.
          </li>
          <li>Ask if you're unsure!</li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-5 tabletVert:px-[2rem] laptop:px-0 desktop:px-0 mobile:px-[2rem]">
        <h3 className="underline mobile:text-xl tabletVert:text-2xl tabletHori:text-2xl laptop:text-2xl desktop:text-2xl text-center">
          AWS Learning Resources
        </h3>
        <span className="text-center text-lg">
          Need help getting started with AWS? Here are some resources to help:
        </span>
        <ul className="list-disc text-lg text-blue-400">
          <li className="hover:underline">
            <a
              href="https://learn.acloud.guru/search?cloudProviders%5B0%5D=AWS&learningTypes%5B0%5D=LEARNING_PATH"
              target="_blank"
            >
              ACloudGuru AWS Learning Paths
            </a>
          </li>
          <li className="hover:underline">
            <a
              href="https://www.udemy.com/topic/aws-certification/"
              target="_blank"
            >
              Udemy AWS Certification Courses
            </a>
          </li>
          <li className="hover:underline">
            <a href="https://docs.aws.amazon.com/" target="_blank">
              AWS Documentation
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

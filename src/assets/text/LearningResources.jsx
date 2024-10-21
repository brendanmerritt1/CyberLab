export default function LearningResources() {
  return (
    <>
      <div className="flex flex-col items-center gap-5 laptop:px-[9rem] desktop:px-[21rem] tabletHori:px-[4rem] tabletVert:px-[2rem] mobile:px-[2rem]">
        <h3 className="text-center underline mobile:text-xl tabletVert:text-2xl tabletHori:text-2xl laptop:text-2xl desktop:text-2xl">
          Recommended Learning Paths and Certifications
        </h3>
        <span className="text-center text-lg">
          To help you develop core skills in cloud computing, security, and
          networking, we recommend the following certifications. Each
          certification is selected to complement the tasks and projects you'll
          encounter in CyberLab, enhancing your technical knowledge and
          practical expertise. These certifications are great to put on your
          resume.
        </span>
        <ul className="list-disc space-y-5 text-lg">
          <li>
            <a
              href="https://aws.amazon.com/certification/certified-cloud-practitioner/"
              target="_blank"
            >
              <b className="text-blue-400 hover:underline">
                AWS Certified Cloud Practitioner:{' '}
              </b>
            </a>
            This is the foundational certification for understanding AWS
            services. It covers basic cloud concepts, security, and billing,
            providing a strong starting point for working with AWS in CyberLab
            projects.
          </li>
          <li>
            <a
              href="https://aws.amazon.com/certification/certified-ai-practitioner/"
              target="_blank"
            >
              <b className="text-blue-400 hover:underline">
                AWS Certified AI Practitioner:{' '}
              </b>
            </a>
            This certification is for those interested in exploring the
            intersection of AI and cloud technologies. It covers the essential
            AWS AI and ML services, helping you integrate AI into cloud
            solutions.
          </li>
          <li>
            <a
              href="https://aws.amazon.com/certification/certified-solutions-architect-associate/"
              target="_blank"
            >
              <b className="text-blue-400 hover:underline">
                AWS Certified Solutions Architect - Associate:{' '}
              </b>
            </a>
            For those ready to dive deeper into AWS architecture, this
            certification focuses on designing scalable, fault-tolerant, and
            efficient cloud solutions. Alternatively, you can explore other
            associate-level certifications, depending on your area of focus.
          </li>
          <li>
            <a
              href="https://www.comptia.org/certifications/network"
              target="_blank"
            >
              <b className="text-blue-400 hover:underline">
                CompTIA Network+:{' '}
              </b>
            </a>
            This certification is ideal for those wanting to strengthen their
            networking knowledge. Understanding network fundamentals, security,
            and troubleshooting is incredibly valuable for cloud and security
            projects.
          </li>
          <li>
            <a
              href="https://www.comptia.org/certifications/security"
              target="_blank"
            >
              <b className="text-blue-400 hover:underline">
                CompTIA Security+:{' '}
              </b>
            </a>
            A highly recommended certification for anyone working in security.
            It covers essential security principles, such as risk management,
            network security, and threat analysis, making it a must-have for
            security-related projects within the CyberLab.
          </li>
          <li>
            <a href="https://university.tenable.com/" target="_blank">
              <b className="text-blue-400 hover:underline">
                Tenable.io Vulnerability Management Certification (Tenable
                University):{' '}
              </b>
            </a>
            Recommended for those working with vulnerability management. It
            helps you develop expertise in using Tenable's products to assess,
            prioritize, and mitigate vulnerabilities in cloud and on-premise
            environments.
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-5 laptop:px-[10rem] desktop:px-[28rem] tabletHori:px-[3rem] tabletVert:px-[2rem] mobile:px-[2rem]">
        <h3 className="text-center underline mobile:text-xl tabletVert:text-2xl tabletHori:text-2xl laptop:text-2xl desktop:text-2xl">
          Start Learning Cloud Technologies
        </h3>
        <span className="text-center text-lg">
          Cloud technologies are a fundamental part of the CyberLab environment,
          and building a strong foundation in this area will significantly
          enhance your skills.
        </span>
        <ul className="list-disc space-y-5 text-lg">
          <li>
            <b>AWS Fundamentals:</b> Start with the basics of AWS, such as
            understanding EC2, S3, Lambda, and CloudWatch. These services form
            the backbone of the infrastructure you'll be working with in
            CyberLab projects. ACloudGuru offers an excellent AWS fundamentals
            courses to get you started, and the Interns Planner Board is great
            for hands-on learning.
          </li>
          <li>
            <b>Cloud Security:</b> Learning how to secure AWS resources is just
            as important as knowing how to use them. ACloudGuru, Udemy, and
            Tenable University all offer cloud security learning paths that
            cover topics like identity and access management (IAM), encryption,
            and security best practices for cloud environments.
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-5 laptop:px-[10rem] desktop:px-[17rem] tabletHori:px-[3rem] tabletVert:px-[2rem] mobile:px-[2rem]">
        <h3 className="text-center underline mobile:text-xl tabletVert:text-2xl tabletHori:text-2xl laptop:text-2xl desktop:text-2xl">
          Master Security Tools
        </h3>
        <ul className="list-disc space-y-5 text-lg">
          <li>
            <a href="https://falcon.us-2.crowdstrike.com/" target="_blank">
              <b className="text-blue-400 hover:underline">
                CrowdStrike Falcon:{' '}
              </b>
            </a>
            CrowdStrike Falcon is the platform you'll use for endpoint security
            and threat detection. Begin by familiarizing yourself with its
            capabilities, such as monitoring systems for indicators of
            compromise (IOCs) and analyzing threats that were detected on the
            systems in the CyberLab.
          </li>
          <li>
            <a href="https://splunksiem.bluewave-redbird.com/" target="_blank">
              <b className="text-blue-400 hover:underline">Splunk: </b>
            </a>
            Splunk is the go-to tool for log management, SIEM (Security
            Information and Event Management), and data analytics. Learning how
            to navigate the Splunk interface, query data, and create dashboards
            are helpful resources to know in the field of security.
          </li>
        </ul>
      </div>
    </>
  );
}

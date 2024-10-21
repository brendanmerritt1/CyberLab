export default function Tenable() {
  return (
    <>
      <div className="flex flex-col items-center gap-5 desktop:px-[16rem] laptop:px-[5rem] tabletHori:px-[4rem] tabletVert:px-[2rem] mobile:px-[1rem]">
        <h3 className="text-center underline mobile:text-xl tabletVert:text-2xl tabletHori:text-2xl laptop:text-2xl desktop:text-2xl">What is Tenable?</h3>
        <span className="text-center text-lg">
          Tenable is a cybersecurity company that specializes in vulnerability
          management and continuous network monitoring. It helps organizations
          identify, assess, and remediate vulnerabilities in their IT
          environments. With a focus on proactive security measures, Tenable
          provides tools and insights that enable organizations to strengthen
          security in their environments and protect against potential threats.
        </span>
      </div>
      <div className="flex flex-col items-center gap-5 desktop:px-[20rem] laptop:px-[8rem] tabletHori:px-[4rem] tabletVert:px-[2rem] mobile:px-[2rem]">
        <h3 className="text-center underline mobile:text-xl tabletVert:text-2xl tabletHori:text-2xl laptop:text-2xl desktop:text-2xl">Key Features of Tenable</h3>
        <ul className="list-disc space-y-5 text-lg">
          <li>
            <b>Vulnerability Scanning:</b> Comprehensive scanning capabilities
            that identify vulnerabilities across a wide range of IT assets,
            including servers, devices, and applications.
          </li>
          <li>
            <b>Continuous Monitoring:</b> Real-time visibility into
            vulnerabilities and threats across the network, allowing for prompt
            detection and response.
          </li>
          <li>
            <b>Risk Assessment:</b> Tools to prioritize vulnerabilities based on
            potential impact and likelihood, helping teams focus on critical
            issues.
          </li>
          <li>
            <b>Compliance Management:</b> Support for regulatory compliance with
            industry standards such as PCI-DSS, HIPAA, and GDPR.
          </li>
          <li>
            <b>Reporting and Dashboards:</b> User-friendly reporting tools that
            provide insights into the organization's security posture, including
            trends and remediation progress.
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-5 desktop:px-[20rem] laptop:px-[10rem] tabletHori:px-[4rem] tabletVert:px-[2rem] mobile:px-[2rem]">
        <h3 className="text-center underline mobile:text-xl tabletVert:text-2xl tabletHori:text-2xl laptop:text-2xl desktop:text-2xl">Learning Resources and Support</h3>
        <ul className="list-disc space-y-5 text-lg">
          <li>
            <a href="https://university.tenable.com/" target="_blank">
              <b className="text-blue-400 hover:underline">
                Tenable University:{' '}
              </b>
            </a>
            A beginner-friendly course designed to provide a solid understanding
            of cloud computing principles, specific to AWS.
          </li>
          <li>
            <a href="https://docs.tenable.com/" target="_blank">
              <b className="text-blue-400 hover:underline">
                Tenable Documentation:{' '}
              </b>
            </a>
            Free online courses and certifications designed to help users get
            the most out of Tenable's products.
          </li>
        </ul>
      </div>
    </>
  );
}

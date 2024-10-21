export default function CrowdStrike() {
  return (
    <>
      <div className="flex flex-col items-center gap-5 laptop:px-[13rem] desktop:px-[23rem] tabletHori:px-[5rem] tabletVert:px-[2rem] mobile:px-[1rem]">
        <h3 className="underline mobile:text-xl tabletVert:text-2xl tabletHori:text-2xl laptop:text-2xl desktop:text-2xl text-center">
          What is CrowdStrike Falcon?
        </h3>
        <span className="text-center text-lg">
          CrowdStrike Falcon is a leading cloud-native endpoint protection
          platform designed to prevent, detect, and respond to cyber threats in
          real time. By utilizing advanced AI and machine learning algorithms,
          Falcon provides robust security measures against malware, ransomware,
          and other sophisticated attacks targeting endpoints.
        </span>
        <span className="text-center text-lg">
          The platform offers a centralized console that allows security teams
          to monitor their environments, analyze threat data, see an overview of
          malicious processes, and respond swiftly to incidents.
        </span>
      </div>
      <div className="flex flex-col items-center gap-5 laptop:px-[10rem] desktop:px-[15rem] tabletHori:px-[5rem] tabletVert:px-[2rem] mobile:px-[2rem]">
        <h3 className="underline mobile:text-xl tabletVert:text-2xl tabletHori:text-2xl laptop:text-2xl desktop:text-2xl text-center">
          Key Features of CrowdStrike Falcon
        </h3>
        <ul className="list-decimal space-y-5 text-lg">
          <li>
            <b>Endpoint Detection and Response (EDR):</b> Provides real-time
            visibility into endpoint activity, allowing for quick detection and
            response to threats.
          </li>
          <li>
            <b>Threat Intelligence:</b> Delivers contextual threat intelligence
            to inform security decisions and incident response actions.
          </li>
          <li>
            <b>Malware Detection:</b> Utilizes behavioral analysis to identify
            and block malware, including zero-day threats.
          </li>
          <li>
            <b>Real-time Monitoring:</b> Continuous monitoring of endpoints for
            suspicious activities, providing alerts and actionable insights.
          </li>
          <li>
            <b>Cloud-Native Architecture:</b> Enables seamless updates and
            scalability without requiring on-premises infrastructure.
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-5 laptop:px-[8rem] desktop:px-[20rem] tabletHori:px-[5rem] tabletVert:px-[2rem] mobile:px-[2rem]">
        <h3 className="underline mobile:text-xl tabletVert:text-2xl tabletHori:text-2xl laptop:text-2xl desktop:text-2xl text-center">
          Learning Resources for CrowdStrike Falcon
        </h3>
        <ul className="list-disc space-y-5 text-lg">
          <li>
            <a
              href="https://falcon.us-2.crowdstrike.com/documentation/"
              target="_blank"
            >
              <b className="text-blue-400 hover:underline">
                CrowdStrike Documentation:{' '}
              </b>
            </a>
            Comprehensive documentation covering all aspects of the platform
            (login to Falcon to access).
          </li>
          <li>
            <a
              href="https://planner.cloud.microsoft/trianglecyber.net/en-US/Home/Planner/#/plantaskboard?groupId=bb177445-4270-4fb3-96cb-5609c6850937&planId=-jQmrjue0EChZyVihxB8Q2UAChSM"
              target="_blank"
            >
              <b className="text-blue-400 hover:underline">
                Labs and Projects:{' '}
              </b>
            </a>
            The Intern Planner Board has multiple labs and projects that offer
            hands-on experience with CrowdStrike Falcon, using it to monitor
            endpoints and analyze malware.
          </li>
        </ul>
      </div>
    </>
  );
}

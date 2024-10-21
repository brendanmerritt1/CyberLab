export default function LabsProjectBoard() {
  return (
    <>
      <div className="flex flex-col items-center gap-5 laptop:px-[8rem] desktop:px-[17rem] tabletHori:px-[3rem] tabletVert:px-[2rem] mobile:px-[2rem]">
        <h3 className="text-center underline mobile:text-xl tabletVert:text-2xl tabletHori:text-2xl laptop:text-2xl desktop:text-2xl">
          Intern Labs and Projects Overview
        </h3>
        <span className="text-center text-lg">
          This board is designed to provide interns with a structured approach
          to their learning journey, encompassing hands-on labs and independent
          projects in various areas of cloud technology and cybersecurity. The
          objective is to develop foundational skills, understand cloud security
          practices, and gain practical experience in incident response and
          threat hunting.
        </span>
        <ul className="list-disc space-y-3 text-lg">
          <li>
            <b>Skill Development:</b> Equip interns with practical skills needed
            for cloud technologies, focusing on AWS services and security
            practices.
          </li>
          <li>
            <b>Hands-on Experience:</b> Provide opportunities to apply
            theoretical knowledge in practical settings through labs and
            projects.
          </li>
          <li>
            <b>Collaboration and Communication:</b> Foster teamwork and
            collaboration among peers through working together!
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-5 laptop:px-[6rem] desktop:px-[17rem] tabletHori:px-[5rem] tabletVert:px-[2rem] mobile:px-[2rem]">
        <h3 className="text-center underline mobile:text-xl tabletVert:text-2xl tabletHori:text-2xl laptop:text-2xl desktop:text-2xl">
          How to Use the Planner Board
        </h3>
        <ul className="list-disc space-y-5 text-lg">
          <li>
            Please don't change, mark complete, or delete anything on this
            board! It's a reference for all interns!
          </li>
          <li>
            Select the "Board" tab on the top bar, to the right of the
            "Internship Labs/Projects" title. This is the easiest and best way
            to visualize all of the projects. In the top right of your screen,
            you should select "Group by Bucket", which keeps the board
            organized.
          </li>
          <li>
            You can scroll the board left and right to view all of the
            categories.
          </li>
          <li>
            If you're just starting out, I suggest you start with the
            Foundational Skills category, or any card that has a label of
            "Beginner" (see above for filtering by label). If you find those too
            easy, move on to the "Intermediate" or "Advanced" cards.
          </li>
          <li>
            You may work on as many labs/projects as you'd like, of course, but
            we suggest to study for & complete at least one certification during
            your internship for valuable resume experience. A good one to begin
            with is AWS Certified Cloud Practitioner.
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-5 laptop:px-0 desktop:px-0 tabletHori:px-[5rem] tabletVert:px-[2rem] mobile:px-[1rem]">
        <h3 className="text-center underline mobile:text-xl tabletVert:text-2xl tabletHori:text-2xl laptop:text-2xl desktop:text-2xl">
          Where Do I Start?
        </h3>
        <span className="text-center text-lg laptop:px-[8rem] desktop:px-[27rem]">
          Try starting under the Foundational Skills column, with the lab
          "Create a Personal EC2 Instance". You'll be using your EC2 instance
          frequently throughout the internship.
        </span>
        <span className="text-center text-lg laptop:px-[5rem] desktop:px-[24rem]">
          We also recommend completing the "CrowdStrike Falcon Installation" and
          "Splunk Forwarder Installation" exercises under that column, as they
          will be useful for other labs you complete in the future.
        </span>
        <span className="text-center text-lg laptop:px-[8rem] desktop:px-[18rem]">
          If the rest of the labs under the Foundational Skills are too easy for
          you, try branching out to the Cloud Security, Incident Response and
          Threat Hunting, or API Security columns. Or, of course, you could
          always start with what piques your interest the most!
        </span>
      </div>
    </>
  );
}

export default function ACloudGuru() {
  return (
    <>
      <div className="flex flex-col items-center gap-5 tabletVert:px-[2rem] tabletHori:px-[4rem] laptop:px-[6rem] desktop:px-[21rem] mobile:px-[1rem]">
        <h3 className="underline mobile:text-xl tabletVert:text-2xl tabletHori:text-2xl laptop:text-2xl desktop:text-2xl">
          What is ACloudGuru?
        </h3>
        <span className="text-center text-lg">
          ACloudGuru is an online learning platform dedicated to cloud computing
          education. It offers a variety of courses designed to help individuals
          gain the skills needed to excel in cloud technologies, with a strong
          emphasis on AWS and other cloud service providers. Triangle Cyber has
          an ACloudGuru business license that allows you to complete any course
          for free. The Certification Paths are especially useful, as they are a
          great resource for studying for your desired certifications.
        </span>
      </div>
      <div className="flex flex-col items-center gap-5 tabletVert:px-[2rem] tabletHori:px-[4rem] laptop:px-[4rem] desktop:px-[13rem] mobile:px-[2rem]">
        <h3 className="underline mobile:text-xl tabletVert:text-2xl tabletHori:text-2xl laptop:text-2xl desktop:text-2xl text-center">
          Key Features of ACloudGuru
        </h3>
        <ul className="list-decimal space-y-5 text-lg">
          <li>
            <b>Course Library:</b> A vast collection of courses covering various
            cloud topics, from beginner to advanced levels.
          </li>
          <li>
            <b>Hands-On Labs:</b> Practical labs that provide real-world
            experience with cloud technologies, allowing you to apply your
            learning.
          </li>
          <li>
            <b>Certification Paths:</b> Structured learning paths designed to
            guide you towards achieving specific cloud certifications, ensuring
            a focused study approach.
          </li>
          <li>
            <b>Quizzes and Assessments:</b> Interactive quizzes and assessments
            to test knowledge retention and readiness for certification exams.
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-5 tabletVert:px-[2rem] tabletHori:px-[4rem] laptop:px-[6rem] desktop:px-[20rem] mobile:px-[2rem]">
        <h3 className="underline mobile:text-xl tabletVert:text-2xl tabletHori:text-2xl laptop:text-2xl desktop:text-2xl text-center">
          Recommended Places to Start
        </h3>
        <ul className="list-disc space-y-5 text-lg">
          <li>
            <a
              href="https://learn.acloud.guru/course/cloud-computing-foundations/overview"
              target="_blank"
            >
              <b className="text-blue-400 hover:underline">
                Cloud Computing Foundations:{' '}
              </b>
            </a>
            An overview course that introduces the fundamental principles of
            cloud computing.
          </li>
          <li>
            <a
              href="https://learn.acloud.guru/course/1ab914a9-23d2-4776-9862-e2ab3cd24807/overview"
              target="_blank"
            >
              <b className="text-blue-400 hover:underline">
                AWS Certified Cloud Practitioner (CLF-C02):{' '}
              </b>
            </a>
            A beginner-friendly course that covers the basics of AWS and cloud
            concepts. Very useful for studying for the AWS Cloud Practitioner
            Certification Exam.
          </li>
        </ul>
      </div>
    </>
  );
}

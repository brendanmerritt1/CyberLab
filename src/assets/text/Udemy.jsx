export default function Udemy() {
  return (
    <>
      <div className="flex flex-col items-center gap-5 desktop:px-[21rem] laptop:px-[8rem] tabletHori:px-[4rem] tabletVert:px-[2rem] mobile:px-[1rem]">
        <h3 className="text-center underline mobile:text-xl tabletVert:text-2xl tabletHori:text-2xl laptop:text-2xl desktop:text-2xl">What is Udemy?</h3>
        <span className="text-center text-lg">
          Udemy is an online learning platform that offers a vast array of
          courses on various subjects, including cloud technologies,
          cybersecurity, programming, and more. Udemy enables learners to
          acquire new skills at their own pace, making it an excellent resource
          for interns looking to enhance their knowledge and expertise in cloud
          computing and other fields. Triangle Cyber has an Udemy business
          license that allows you to complete a wide variety of courses for
          free.
        </span>
      </div>
      <div className="flex flex-col items-center gap-5 desktop:px-[11rem] laptop:px-[8rem] tabletHori:px-[4rem] tabletVert:px-[2rem] mobile:px-[2rem]">
        <h3 className="text-center underline mobile:text-xl tabletVert:text-2xl tabletHori:text-2xl laptop:text-2xl desktop:text-2xl">Key Features of Udemy</h3>
        <ul className="list-decimal space-y-5 text-lg">
          <li>
            <b>Extensive Course Library:</b> Access to thousands of courses
            across various topics and skill levels, catering to a diverse
            audience.
          </li>
          <li>
            <b>Hands-On Projects</b> Many courses include practical projects
            that help interns apply learned concepts in real-world scenarios.
          </li>
          <li>
            <b>Certificates of Completion:</b> Earn certificates upon finishing
            courses, which can be showcased on resumes and LinkedIn profiles to
            demonstrate acquired skills.
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-5 desktop:px-[20rem] laptop:px-[8rem] tabletHori:px-[4rem] tabletVert:px-[2rem] mobile:px-[2rem]">
        <h3 className="text-center underline mobile:text-xl tabletVert:text-2xl tabletHori:text-2xl laptop:text-2xl desktop:text-2xl">Recommended Places to Start</h3>
        <ul className="list-disc space-y-5 text-lg">
          <li>
            <a
              href="https://trianglecyber.udemy.com/course/introduction-to-cloud-computing/"
              target="_blank"
            >
              <b className="text-blue-400 hover:underline">
                Introduction to Cloud Computing:{' '}
              </b>
            </a>
            A beginner-friendly course designed to provide a solid understanding
            of cloud computing principles.
          </li>
          <li>
            <a
              href="https://trianglecyber.udemy.com/course/introduction-to-cloud-computing-on-amazon-aws-for-beginners/"
              target="_blank"
            >
              <b className="text-blue-400 hover:underline">
                Introduction to Cloud Computing on AWS for Beginners:{' '}
              </b>
            </a>
            A beginner-friendly course designed to provide a solid understanding
            of cloud computing principles, specific to AWS.
          </li>
          <li>
            <a
              href="https://trianglecyber.udemy.com/course/the-absolute-beginners-guide-to-information-cyber-security/"
              target="_blank"
            >
              <b className="text-blue-400 hover:underline">
                The Absolute Beginners Guide to Cyber Security:{' '}
              </b>
            </a>
            An overview course that introduces essential concepts in
            cybersecurity and best practices.
          </li>
          <li>
            <a
              href="https://trianglecyber.udemy.com/course/complete-python-bootcamp/"
              target="_blank"
            >
              <b className="text-blue-400 hover:underline">
                The Complete Python Bootcamp From Zero to Hero in Python:{' '}
              </b>
            </a>
            A beginner-friendly course for learning Python in a general sense.
          </li>
          <li>
            <a
              href="https://trianglecyber.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/"
              target="_blank"
            >
              <b className="text-blue-400 hover:underline">
                Python for Data Science and Machine Learning Bootcamp:{' '}
              </b>
            </a>
            A beginner-friendly course for learning Python to be used with data
            science and machine learning.
          </li>
        </ul>
      </div>
    </>
  );
}

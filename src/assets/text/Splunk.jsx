export default function Splunk() {
  return (
    <>
      <div className="flex flex-col items-center gap-5 desktop:px-[23rem] laptop:px-[9rem] tabletHori:px-[4rem] tabletVert:px-[2rem] mobile:px-[1rem]">
        <h3 className="text-center underline mobile:text-xl tabletVert:text-2xl tabletHori:text-2xl laptop:text-2xl desktop:text-2xl">What is Splunk?</h3>
        <span className="text-center text-lg">
          Splunk is a powerful platform designed for searching, monitoring, and
          analyzing machine-generated big data through a web-style interface. It
          enables users to gain insights from their data, allowing organizations
          to monitor applications and infrastructure, troubleshoot issues, and
          make data-driven decisions. Splunk's robust capabilities make it an
          essential tool for cybersecurity, IT operations, and business
          analytics.
        </span>
      </div>
      <div className="flex flex-col items-center gap-5 desktop:px-[15rem] laptop:px-[10rem] tabletHori:px-[4rem] tabletVert:px-[2rem] mobile:px-[2rem]">
        <h3 className="text-center underline mobile:text-xl tabletVert:text-2xl tabletHori:text-2xl laptop:text-2xl desktop:text-2xl">Key Features of Splunk</h3>
        <ul className="list-decimal space-y-5 text-lg">
          <li>
            <b>Data Ingestion:</b> Supports various data inputs, including logs,
            metrics, and real-time data streams, allowing for comprehensive data
            analysis.
          </li>
          <li>
            <b>Search and Investigation:</b> Powerful search capabilities enable
            users to query data using the Splunk Search Processing Language
            (SPL) to derive insights.
          </li>
          <li>
            <b>Dashboards and Visualizations:</b> Create interactive dashboards
            and visualizations to present data trends and insights visually.
          </li>
          <li>
            <b>Alerts and Reporting:</b> Set up alerts based on specific
            conditions and generate reports to share findings with others.
          </li>
          <li>
            <b>Machine Learning:</b> Offers machine learning capabilities for
            predictive analytics, helping identify trends and anomalies in data.
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-5 desktop:px-[20rem] laptop:px-[6rem] tabletHori:px-[4rem] tabletVert:px-[2rem] mobile:px-[2rem]">
        <h3 className="text-center underline mobile:text-xl tabletVert:text-2xl tabletHori:text-2xl laptop:text-2xl desktop:text-2xl">Learning Resources for Splunk</h3>
        <ul className="list-disc space-y-5 text-lg">
          <li>
            <a
              href="https://www.splunk.com/en_us/training.html"
              target="_blank"
            >
              <b className="text-blue-400 hover:underline">
                Splunk Education:{' '}
              </b>
            </a>
            Courses to get started with using Splunk for SIEM and data
            analytics.
          </li>
          <li>
            <a
              href="https://docs.splunk.com/Documentation/Splunk"
              target="_blank"
            >
              <b className="text-blue-400 hover:underline">
                Splunk Documentation:{' '}
              </b>
            </a>
            Comprehensive documentation covering all aspects of the platform.
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
            hands-on experience with Splunk, using it to ingest logs, analyze
            data, and create visualizations.
          </li>
        </ul>
      </div>
    </>
  );
}

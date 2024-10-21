export default function LocalEvents() {
  return (
    <>
      <div className="flex flex-col items-center gap-5 laptop:px-[10rem] desktop:px-[21rem] tabletHori:px-[4rem] tabletVert:px-[2rem] mobile:px-[2rem]">
        <h3 className="text-center underline mobile:text-xl tabletVert:text-2xl tabletHori:text-2xl laptop:text-2xl desktop:text-2xl">
          Raleigh ISSA (Information Systems Security Association) Chapter
        </h3>
        <span className="text-center text-lg">
          The
          <a
            href="https://raleigh.issa.org/"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            {' '}
            Raleigh ISSA chapter{' '}
          </a>
          is one of the most active cybersecurity communities in the area. It
          offers regular meetings, workshop events, professional development
          opportunities, and networking with local experts in information
          security.
        </span>
        <ul className="list-disc space-y-5 text-lg">
          <li>
            <b>Meetings and Events:</b> Monthly meetings often feature speakers
            on cybersecurity trends, case studies, and technical deep dives.
            Workshop events include hands-on learning exercises for beginners to
            strengthen their knowledge with various information security tools
            and platforms.
          </li>
          <li>
            <b>How to Get Involved:</b> The Raleigh ISSA offers membership
            options for students at $30/year, or for general members at
            $95/year. The majority of Triangle Cyber's employees, as well as
            some of its interns, participate in the Raleigh ISSA conferences and
            events.
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-5 laptop:px-[6rem] desktop:px-[26rem] tabletHori:px-[4rem] tabletVert:px-[2rem] mobile:px-[2rem]">
        <h3 className="text-center underline mobile:text-xl tabletVert:text-2xl tabletHori:text-2xl laptop:text-2xl desktop:text-2xl">
          Raleigh ISSA InfoSeCon Annual Conference
        </h3>
        <span className="text-center text-lg">
          The InfoSeCon conference is a large annual event hosted by the Raleigh
          ISSA, drawing professionals from across the Southeast to discuss the
          latest developments in cybersecurity.
        </span>
        <span className="text-center text-lg">
          The next annual InfoSeCon conference is on Friday November 8th, 2024.
        </span>
        <ul className="list-disc space-y-5 text-lg">
          <li>
            <b>Keynote Speakers:</b> Industry leaders and thought influencers
            from major cybersecurity organizations and government agencies.
          </li>
          <li>
            <b>Workshops & Hands-on Labs:</b> Focused sessions on areas like
            ethical hacking, incident response, security tools, and cloud
            security.
          </li>
          <li>
            <b>Exhibitors & Sponsors:</b> Opportunities to explore new security
            products and meet with vendors.
          </li>
          <li>
            <b>Networking:</b> Great chance to connect with professionals from
            around the region.
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-5 laptop:px-[10rem] desktop:px-[14rem] tabletHori:px-[4rem] tabletVert:px-[2rem] mobile:px-[2rem]">
        <h3 className="text-center underline mobile:text-xl tabletVert:text-2xl tabletHori:text-2xl laptop:text-2xl desktop:text-2xl">
          Triangle InfoSec Community Events
        </h3>
        <ul className="list-disc space-y-5 text-lg">
          <li>
            <a
              href="https://owasp.org/www-chapter-triangle-nc/"
              target="_blank"
            >
              <b className="text-blue-400 hover:underline">
                Raleigh/Durham OWASP Chapter:{' '}
              </b>
            </a>
            Focused on web application security. Monthly meetups and hands-on
            labs.
          </li>
          <li>
            <a href="https://bsidesrdu.org/" target="_blank">
              <b className="text-blue-400 hover:underline">BSides Raleigh: </b>
            </a>
            A community-driven event offering technical presentations,
            workshops, and networking opportunities with cybersecurity experts.
          </li>
        </ul>
      </div>
    </>
  );
}

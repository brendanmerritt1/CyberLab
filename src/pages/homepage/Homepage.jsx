import Navbar from '../../layout/Navbar.jsx';
import Card from '../../components/Card.jsx';
import aws from "../../assets/images/AWS-logo.png"
import splunk from "../../assets/images/Splunk-logo.png"
import tenable from "../../assets/images/tenable-logo.png"
import planner from "../../assets/images/Microsoft-Planner-logo.png"
import acg from "../../assets/images/acloudguru-logo.png"
import crowdstrike from "../../assets/images/crowdstrike-logo.png"
import udemy from "../../assets/images/udemy-logo.png"
import learning from "../../assets/images/learning-resources-logo.png"
import events from "../../assets/images/local-events-icon.png"

export default function Homepage() {
  return (
    <>
      <Navbar />
      <div className="mb-20 mt-20 flex w-full justify-end pr-20">
        <div className="flex w-[80rem] flex-row justify-between">
          <div className="flex w-96 flex-col gap-16">
            <Card
              title="AWS Suite"
              image={aws}
              alt="AWS logo"
              width="w-64"
              button="CyberLab"
              gap="gap-14"
              url="https://d-90679dbee6.awsapps.com/start/"
              info={true}
            />
            <Card
              title="Splunk"
              image={splunk}
              alt="Splunk Enterprise logo"
              width="w-72"
              button="Splunk SIEM"
              gap="gap-10"
              url="https://splunksiem.bluewave-redbird.com/"
              info={true}
            />
            <Card
              title="Tenable"
              image={tenable}
              alt="Tenable logo"
              width="w-64"
              button="Dashboard"
              gap="gap-12"
              url="https://partners.tenable.com/"
              info={true}
            />
          </div>
          <div className="flex w-96 flex-col gap-16">
            <Card
              title="Labs / Projects Board"
              image={planner}
              alt="Microsoft Planner logo"
              width="w-28"
              button="Planner Board"
              gap="gap-9"
              url="https://planner.cloud.microsoft/trianglecyber.net/en-US/Home/Planner/#/plantaskboard?groupId=bb177445-4270-4fb3-96cb-5609c6850937&planId=-jQmrjue0EChZyVihxB8Q2UAChSM"
              info={true}
            />
            <Card
              title="A Cloud Guru"
              image={acg}
              alt="A Cloud Guru logo"
              width="w-44"
              button="Courses"
              gap="gap-16"
              url="https://learn.acloud.guru/home"
              info={true}
            />
            <Card
              title="Learning Resources"
              image={learning}
              alt="Learning Resources logo"
              width="w-52"
              button="Resources"
              gap="gap-14"
            />
          </div>
          <div className="flex w-96 flex-col gap-16">
            <Card
              title="CrowdStrike Falcon"
              image={crowdstrike}
              alt="CrowdStrike Falcon logo"
              width="w-44"
              button="Dashboard"
              gap="gap-12"
              url="https://falcon.us-2.crowdstrike.com/"
              info={true}
            />
            <Card
              title="Udemy"
              image={udemy}
              alt="Udemy logo"
              width="w-48"
              button="Courses"
              gap="gap-16"
              url="https://trianglecyber.udemy.com/"
              info={true}
            />
            <Card
              title="Local Events"
              image={events}
              alt="Local events logo"
              width="w-44"
              button="Events"
              gap="gap-16"
            />
          </div>
        </div>
      </div>
    </>
  );
}

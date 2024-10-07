import Navbar from '../../layout/Navbar.jsx';
import Card from '../../components/Card.jsx';

export default function Homepage() {
  return (
    <>
      <Navbar />
      <div className="mb-20 mt-20 flex w-full justify-end pr-20">
        <div className="flex w-[80rem] flex-row justify-between">
          <div className="flex w-96 flex-col gap-16">
            <Card
              title="AWS Suite"
              image="/AWS-logo.png"
              alt="AWS Logo"
              width="w-64"
              button="CyberLab"
              gap="gap-14"
              url="https://d-90679dbee6.awsapps.com/start/"
            />
            <Card
              title="Splunk"
              image="/Splunk-logo.png"
              alt="Splunk Enterprise Logo"
              width="w-72"
              button="Splunk SIEM"
              gap="gap-10"
              url="https://splunksiem.bluewave-redbird.com/"
            />
            <Card
              title="Tenable"
              image="/Splunk-logo.png"
              alt="Splunk Enterprise Logo"
              width="w-72"
              button="Splunk SIEM"
              gap="gap-10"
              url="https://splunksiem.bluewave-redbird.com/"
            />
          </div>
          <div className="flex w-96 flex-col gap-16">
            <Card
              title="Labs / Projects Board"
              image="/Microsoft-Planner-logo.png"
              alt="Microsoft Planner logo"
              width="w-28"
              button="Planner Board"
              gap="gap-9"
              url="https://planner.cloud.microsoft/trianglecyber.net/en-US/Home/Planner/#/plantaskboard?groupId=bb177445-4270-4fb3-96cb-5609c6850937&planId=-jQmrjue0EChZyVihxB8Q2UAChSM"
            />
            <Card
              title="A Cloud Guru"
              image="/acloudguru-logo.png"
              alt="A Cloud Guru logo"
              width="w-44"
              button="Courses"
              gap="gap-16"
              url="https://learn.acloud.guru/home"
            />
            <Card
              title="A Cloud Guru"
              image="/acloudguru-logo.png"
              alt="A Cloud Guru logo"
              width="w-44"
              button="Courses"
              gap="gap-16"
              url="https://learn.acloud.guru/home"
            />
          </div>
          <div className="flex w-96 flex-col gap-16">
            <Card
              title="CrowdStrike Falcon"
              image="/crowdstrike-logo.png"
              alt="CrowdStrike Falcon logo"
              width="w-44"
              button="Dashboard"
              gap="gap-12"
              url="https://falcon.us-2.crowdstrike.com/"
            />
            <Card
              title="Udemy"
              image="/udemy-logo.png"
              alt="Udemy logo"
              width="w-48"
              button="Courses"
              gap="gap-16"
              url="https://trianglecyber.udemy.com/"
            />
            <Card
              title="Udemy"
              image="/udemy-logo.png"
              alt="Udemy logo"
              width="w-48"
              button="Courses"
              gap="gap-16"
              url="https://trianglecyber.udemy.com/"
            />
          </div>
        </div>
      </div>
    </>
  );
}

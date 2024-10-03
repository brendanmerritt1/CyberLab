import Navbar from '../../layout/Navbar.jsx';
import Card from '../../components/Card.jsx';

export default function Homepage() {
  return (
    <>
      <Navbar />
      <div class="mt-20 flex w-full justify-center mb-20">
        <div class="flex w-[80rem] flex-row justify-between">
          <div class="w-96 flex flex-col gap-16">
            <Card
              title="AWS Suite"
              image="/src/assets/images/AWS-logo.png"
              alt="AWS Logo"
              width="w-72"
              button="CyberLab"
              gap="gap-14"
            />
            <Card
              title="Splunk"
              image="/src/assets/images/Splunk-logo.png"
              alt="Splunk Enterprise Logo"
              width="w-72"
              button="Splunk SIEM"
              gap="gap-10"
            />
          </div>
          <div class="w-96 flex flex-col gap-16">
            <Card
              title="Labs / Projects Board"
              image="/src/assets/images/Microsoft-Planner-logo.png"
              alt="Microsoft Planner logo"
              width="w-36"
              button="Planner Board"
              gap="gap-9"
            />
            <Card
              title="A Cloud Guru"
              image="/src/assets/images/acloudguru-logo.png"
              alt="A Cloud Guru logo"
              width="w-52"
              button="Courses"
              gap="gap-16"
            />
          </div>
          <div class="w-96 flex flex-col gap-16">
            <Card
              title="CrowdStrike Falcon"
              image="/src/assets/images/crowdstrike-logo.png"
              alt="CrowdStrike Falcon logo"
              width="w-52"
              button="Dashboard"
              gap="gap-12"
            />
            <Card
              title="Udemy"
              image="/src/assets/images/udemy-logo.png"
              alt="Udemy logo"
              width="w-52"
              button="Courses"
              gap="gap-16"
            />
          </div>
        </div>
      </div>
    </>
  );
}

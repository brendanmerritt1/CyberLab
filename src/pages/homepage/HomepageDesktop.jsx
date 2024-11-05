import { useState, useEffect } from 'react';
import Navbar from '../../layout/Navbar.jsx';
import Card from '../../components/Card.jsx';
import Leaderboard from '../leaderboard/Leaderboard.jsx';
import Learning from '../learning-tracks/Learning.jsx';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import { MdOutlineLeaderboard } from 'react-icons/md';
import { GiRibbonMedal } from 'react-icons/gi';

export default function HomepageDesktop() {
  const [activeTab, setActiveTab] = useState('resources');

  useEffect(() => {
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab) {
      setActiveTab(savedTab);
    }
  }, []);

  const switchTab = (tab) => {
    setActiveTab(tab);
    localStorage.setItem('activeTab', tab);
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-t from-[#13172D] via-[#353D66] to-[#5966a0]">
      <Navbar />
      <div className="relative mb-20 mt-20 flex w-[100rem] flex-col items-center rounded-[3rem] bg-gradient-to-b from-[#4b558b] via-[#374069] to-[#1F2545] py-10 shadow-2xl">
        <div className="relative z-10 flex h-32 w-full flex-row gap-36 pl-28">
          <div
            className={`relative z-20 -translate-x-1 rounded-tl-3xl rounded-tr-3xl border-l-2 border-r-2 border-t-2 border-[#5865a5] p-6 ${activeTab !== 'resources' && 'h-24 rounded-bl-3xl rounded-br-3xl border-b-2'}`}
            onClick={() => switchTab('resources')}
          >
            <HiOutlineSquares2X2
              size={'3rem'}
              color={activeTab === 'resources' ? '#f0f3ff' : '#8892bf'}
              className="cursor-pointer duration-300 hover:scale-125"
            />
          </div>
          <div
            className={`relative h-24 rounded-3xl border-2 border-[#5865a5] p-6 ${activeTab === 'learning' && 'rounded-b-none border-b-0'}`}
            onClick={() => switchTab('learning')}
          >
            <GiRibbonMedal
              size={'3rem'}
              color={activeTab === 'learning' ? '#f0f3ff' : '#8892bf'}
              className="cursor-pointer duration-300 hover:scale-125"
            />
          </div>
          <div
            className={`relative h-24 rounded-3xl border-2 border-[#5865a5] p-6 ${activeTab === 'leaderboard' && 'rounded-b-none border-b-0'}`}
            onClick={() => switchTab('leaderboard')}
          >
            <MdOutlineLeaderboard
              size={'3rem'}
              color={activeTab === 'leaderboard' ? '#f0f3ff' : '#8892bf'}
              className="cursor-pointer duration-300 hover:scale-125"
            />
          </div>
        </div>

        {activeTab === 'resources' && (
          <div className="absolute bottom-10 left-28 top-10 z-0 w-28 -translate-x-1 rounded-bl-3xl rounded-tl-3xl border-b-2 border-l-2 border-[#5865a5]" />
        )}

        {activeTab === 'learning' && (
          <>
            <div className="absolute bottom-10 left-[22.5rem] top-10 z-0 h-32 w-[6.25rem] -translate-x-1 rounded-tl-3xl rounded-tr-3xl border-l-2 border-r-2 border-[#5865a5]" />
            <div className="absolute bottom-10 left-28 top-[10.5rem] z-0 w-28 -translate-x-1 rounded-bl-3xl rounded-tl-3xl border-b-2 border-l-2 border-t-2 border-[#5865a5]" />
            {/* <div className="absolute left-[22.4rem] top-[10.5rem] z-20 w-24 border-2 border-[#484f7f]"></div> */}
          </>
        )}

        {activeTab === 'leaderboard' && (
          <>
            <div className="absolute bottom-10 left-[37.5rem] top-10 z-0 h-32 w-[6.25rem] rounded-tl-3xl rounded-tr-3xl border-l-2 border-r-2 border-[#5865a5]" />
            <div className="absolute bottom-10 left-28 top-[10.5rem] z-0 w-28 -translate-x-1 rounded-bl-3xl rounded-tl-3xl border-b-2 border-l-2 border-t-2 border-[#5865a5]" />
            {/* <div className="absolute left-[37.65rem] top-[10.5rem] z-20 w-24 border-2 border-[#485286]"></div> */}
          </>
        )}

        <div
          className={`z-10 ml-24 flex w-[80rem] flex-row justify-between rounded-br-3xl rounded-tr-3xl border-b-2 border-r-2 border-t-2 border-[#5865a5] py-10 pr-10`}
        >
          {activeTab === 'resources' && (
            <>
              <div className="flex w-96 flex-col gap-16">
                <Card
                  title="AWS Suite"
                  imageName="logos/AWS-logo.png"
                  alt="AWS logo"
                  width="w-64"
                  button="CyberLab"
                  gap="gap-14"
                  url="https://d-90679dbee6.awsapps.com/start/"
                  info={true}
                />
                <Card
                  title="Splunk"
                  imageName="logos/Splunk-logo.png"
                  alt="Splunk Enterprise logo"
                  width="w-72"
                  button="Splunk SIEM"
                  gap="gap-10"
                  url="https://splunksiem.bluewave-redbird.com/"
                  info={true}
                />
                <Card
                  title="Tenable"
                  imageName="logos/tenable-logo.png"
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
                  imageName="logos/Microsoft-Planner-logo.png"
                  alt="Microsoft Planner logo"
                  width="w-28"
                  button="Planner Board"
                  gap="gap-9"
                  url="https://planner.cloud.microsoft/trianglecyber.net/en-US/Home/Planner/#/plantaskboard?groupId=bb177445-4270-4fb3-96cb-5609c6850937&planId=-jQmrjue0EChZyVihxB8Q2UAChSM"
                  info={true}
                />
                <Card
                  title="A Cloud Guru"
                  imageName="logos/acloudguru-logo.png"
                  alt="A Cloud Guru logo"
                  width="w-44"
                  button="Courses"
                  gap="gap-16"
                  url="https://learn.acloud.guru/home"
                  info={true}
                />
                <Card
                  title="Learning Resources"
                  imageName="logos/learning-resources-logo.png"
                  alt="Learning Resources logo"
                  width="w-52"
                  button="Resources"
                  gap="gap-14"
                />
              </div>
              <div className="flex w-96 flex-col gap-16">
                <Card
                  title="CrowdStrike Falcon"
                  imageName="logos/crowdstrike-logo.png"
                  alt="CrowdStrike Falcon logo"
                  width="w-44"
                  button="Dashboard"
                  gap="gap-12"
                  url="https://falcon.us-2.crowdstrike.com/"
                  info={true}
                />
                <Card
                  title="Udemy"
                  imageName="logos/udemy-logo.png"
                  alt="Udemy logo"
                  width="w-48"
                  button="Courses"
                  gap="gap-16"
                  url="https://trianglecyber.udemy.com/"
                  info={true}
                />
                <Card
                  title="Local Events"
                  imageName="logos/local-events-icon.png"
                  alt="Local events logo"
                  width="w-44"
                  button="Events"
                  gap="gap-16"
                />
              </div>
            </>
          )}
          {activeTab === 'learning' && <Learning />}
          {activeTab === 'leaderboard' && <Leaderboard />}
        </div>
      </div>
    </div>
  );
}

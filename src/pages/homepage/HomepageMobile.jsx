import { useState, useEffect } from 'react';
import Navbar from '../../layout/Navbar.jsx';
import Card from '../../components/Card.jsx';
import Leaderboard from '../leaderboard/Leaderboard.jsx';
import Learning from '../learning-tracks/Learning.jsx';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import { MdOutlineLeaderboard } from 'react-icons/md';
import { GiRibbonMedal } from 'react-icons/gi';

export default function HomepageMobile() {
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
      <div className="relative mb-28 mt-20 flex w-[19rem] flex-col items-center rounded-[3rem] bg-gradient-to-b from-[#4b558b] via-[#374069] to-[#1F2545] py-10 shadow-2xl">
        <div className="relative z-10 flex h-24 w-full flex-row gap-9 pl-4">
          <div
            className={`relative z-20 -translate-x-1 rounded-tl-3xl rounded-tr-3xl border-l-2 border-r-2 border-t-2 border-[#5865a5] p-4 ${activeTab !== 'resources' && 'h-16 rounded-bl-3xl rounded-br-3xl border-b-2'}`}
            onClick={() => switchTab('resources')}
          >
            <HiOutlineSquares2X2
              size={'2rem'}
              color={activeTab === 'resources' ? '#f0f3ff' : '#8892bf'}
              className="cursor-pointer duration-300 hover:scale-125"
            />
          </div>
          <div
            className={`relative h-16 rounded-3xl border-2 border-[#5865a5] p-4 ${activeTab === 'learning' && 'rounded-b-none border-b-0'}`}
            onClick={() => switchTab('learning')}
          >
            <GiRibbonMedal
              size={'2rem'}
              color={activeTab === 'learning' ? '#f0f3ff' : '#8892bf'}
              className="cursor-pointer duration-300 hover:scale-125"
            />
          </div>
          <div
            className={`relative h-16 rounded-3xl border-2 border-[#5865a5] p-4 ${activeTab === 'leaderboard' && 'rounded-b-none border-b-0'}`}
            onClick={() => switchTab('leaderboard')}
          >
            <MdOutlineLeaderboard
              size={'2rem'}
              color={activeTab === 'leaderboard' ? '#f0f3ff' : '#8892bf'}
              className="cursor-pointer duration-300 hover:scale-125"
            />
          </div>
        </div>

        {activeTab === 'resources' && (
          <div className="absolute bottom-10 left-4 top-10 z-0 w-28 -translate-x-1 rounded-bl-3xl rounded-tl-3xl border-b-2 border-l-2 border-[#5865a5]" />
        )}

        {activeTab === 'learning' && (
          <>
            <div className="absolute bottom-10 left-[7.5rem] top-10 z-0 h-24 w-[4.25rem] rounded-tl-3xl rounded-tr-3xl border-l-2 border-r-2 border-[#5865a5]" />
            <div className="absolute bottom-10 left-5 top-[8.5rem] z-0 w-28 -translate-x-1 rounded-bl-3xl rounded-tl-3xl border-b-2 border-l-2 border-t-2 border-[#5865a5]" />
            {/* <div className="absolute left-[7.6rem] top-[8.5rem] z-20 w-16 border-2 border-[#424b7c]"></div> */}
          </>
        )}

        {activeTab === 'leaderboard' && (
          <>
            <div className="absolute bottom-10 left-[14rem] top-10 z-0 h-24 w-[4.25rem] rounded-tl-3xl rounded-tr-3xl border-l-2 border-r-2 border-[#5865a5]" />
            <div className="absolute bottom-10 left-5 top-[8.5rem] z-0 w-28 -translate-x-1 rounded-bl-3xl rounded-tl-3xl border-b-2 border-l-2 border-t-2 border-[#5865a5]" />
            {/* <div className="absolute left-[14.1rem] top-[8.5rem] z-20 h-[1.2rem] w-16 rounded-tr-3xl border-8 border-[#485286]"></div> */}
            <div className="absolute bottom-10 left-[11.5rem] top-10 z-0 w-28 -translate-x-1 rounded-br-3xl rounded-tr-3xl border-b-2 border-r-2 border-[#5865a5]" />
          </>
        )}

        <div
          className={`z-10 ${activeTab === 'resources' ? 'ml-[4.1rem] w-[13.35rem] pr-10' : 'ml-[1.8rem] w-[15.65rem] pr-5'} rounded-br-3xl rounded-tr-3xl border-b-2 border-r-2 border-t-2 border-[#5865a5] py-10`}
        >
          {activeTab === 'resources' && (
            <>
              <div className="-ml-3 flex w-44 flex-col gap-12">
                <Card
                  title="AWS Suite"
                  imageName="logos/AWS-logo.png"
                  alt="AWS logo"
                  width="w-36"
                  button="CyberLab"
                  gap="gap-5"
                  url="https://d-90679dbee6.awsapps.com/start/"
                  info={true}
                />
                <Card
                  title="Labs / Projects Board"
                  imageName="logos/Microsoft-Planner-logo.png"
                  alt="Microsoft Planner logo"
                  width="w-16"
                  button="Planner Board"
                  gap="gap-2"
                  url="https://planner.cloud.microsoft/trianglecyber.net/en-US/Home/Planner/#/plantaskboard?groupId=bb177445-4270-4fb3-96cb-5609c6850937&planId=-jQmrjue0EChZyVihxB8Q2UAChSM"
                  info={true}
                />
                <Card
                  title="Splunk"
                  imageName="logos/Splunk-logo.png"
                  alt="Splunk Enterprise logo"
                  width="w-36"
                  button="Splunk SIEM"
                  gap="gap-3"
                  url="https://splunksiem.bluewave-redbird.com/"
                  info={true}
                />
                <Card
                  title="CrowdStrike Falcon"
                  imageName="logos/crowdstrike-logo.png"
                  alt="CrowdStrike Falcon logo"
                  width="w-24"
                  button="Dashboard"
                  gap="gap-4"
                  url="https://falcon.us-2.crowdstrike.com/"
                  info={true}
                />
                <Card
                  title="Tenable"
                  imageName="logos/tenable-logo.png"
                  alt="Tenable logo"
                  width="w-36"
                  button="Dashboard"
                  gap="gap-4"
                  url="https://partners.tenable.com/"
                  info={true}
                />
                <Card
                  title="A Cloud Guru"
                  imageName="logos/acloudguru-logo.png"
                  alt="A Cloud Guru logo"
                  width="w-24"
                  button="Courses"
                  gap="gap-6"
                  url="https://learn.acloud.guru/home"
                  info={true}
                />
                <Card
                  title="Udemy"
                  imageName="logos/udemy-logo.png"
                  alt="Udemy logo"
                  width="w-28"
                  button="Courses"
                  gap="gap-6"
                  url="https://trianglecyber.udemy.com/"
                  info={true}
                />
                <Card
                  title="Learning Resources"
                  imageName="logos/learning-resources-logo.png"
                  alt="Learning Resources logo"
                  width="w-32"
                  button="Resources"
                  gap="gap-4"
                />
                <Card
                  title="Local Events"
                  imageName="logos/local-events-icon.png"
                  alt="Local events logo"
                  width="w-28"
                  button="Events"
                  gap="gap-7"
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

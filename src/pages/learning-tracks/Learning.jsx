import LearningCard from '../../components/LearningCard';
import { useState, useEffect } from 'react';
import {
  getUser,
  fetchCompletedModules,
} from '../../utils/LearningTrackUtils.js';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Learning() {
  const [currentUser, setCurrentUser] = useState(null);
  const [completedModules, setCompletedModules] = useState([
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]);

  useEffect(() => {
    const fetchUser = async () => {
      const loggedInUser = await getUser();
      if (loggedInUser === null) {
        setCurrentUser(null);
        toast.warn('Please log in to view learning track progress!', {
          position: 'top-center',
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
      }
      setCurrentUser(loggedInUser);
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const fetchModules = async () => {
      if (currentUser !== null) {
        const modules = await fetchCompletedModules(currentUser);
        setCompletedModules(modules);
      }
    };

    fetchModules();
  }, [currentUser]);

  const updateModule = (index, value) => {
    setCompletedModules((prev) => {
      const updatedModules = [...prev];
      updatedModules[index] = [...updatedModules[index], value];
      return updatedModules;
    });
  };

  return (
    <div className="flex w-full flex-row flex-wrap mobile:justify-center mobile:gap-y-10 tabletHori:justify-between laptop:gap-y-20">
      <LearningCard
        title="Certification Prep"
        imageName="learning/certifications.png"
        user={currentUser}
        modules={completedModules[0]}
        updateModule={updateModule}
      />
      <LearningCard
        title="Cloud Fundamentals"
        imageName="learning/cloud.png"
        user={currentUser}
        modules={completedModules[1]}
        updateModule={updateModule}
      />
      <LearningCard
        title="Cybersecurity Essentials"
        imageName="learning/cybersecurity.png"
        user={currentUser}
        modules={completedModules[2]}
        updateModule={updateModule}
      />
      <LearningCard
        title="Data & Visualization"
        imageName="learning/visualization.png"
        user={currentUser}
        modules={completedModules[3]}
        updateModule={updateModule}
      />
      <LearningCard
        title="DevOps & Automation"
        imageName="learning/devops.png"
        user={currentUser}
        modules={completedModules[4]}
        updateModule={updateModule}
      />
      <LearningCard
        title="ML in Cybersecurity"
        imageName="learning/machine-learning.png"
        user={currentUser}
        modules={completedModules[5]}
        updateModule={updateModule}
      />
      <LearningCard
        title="Digital Forensics"
        imageName="learning/digital-forensics.png"
        user={currentUser}
        modules={completedModules[6]}
        updateModule={updateModule}
      />
      <LearningCard
        title="API Security & Dev"
        imageName="learning/api.png"
        user={currentUser}
        modules={completedModules[7]}
        updateModule={updateModule}
      />
      <LearningCard
        title="Governance & Compliance"
        imageName="learning/grc.png"
        user={currentUser}
        modules={completedModules[8]}
        updateModule={updateModule}
      />
    </div>
  );
}

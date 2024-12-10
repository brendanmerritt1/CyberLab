import { useEffect, useState } from 'react';
import { updateTrack } from '../../utils/LearningTrackUtils';
import { Spinner } from '@chakra-ui/spinner';
import { toast, Bounce } from 'react-toastify';

export default function Cloud(props) {
  const [modules, setModules] = useState();
  const [loading, setLoading] = useState(true);

  const allModules = [
    { moduleName: 'AWS Cloud Fundamentals (Udemy)', points: 15 },
    { moduleName: 'Personal AWS EC2 Instance (Lab)', points: 10 },
    { moduleName: 'Basic Networking Concepts (Lab)', points: 15 },
    { moduleName: 'Encrypted File Transfer (Lab)', points: 15 },
    { moduleName: 'Quiz: Networking Concepts', points: 10 },
    { moduleName: 'Serverless Concepts (Udemy)', points: 15 },
    { moduleName: 'Serverless Security (Lab)', points: 15 },
    { moduleName: 'Cloud Security Automation (Lab)', points: 15 },
    { moduleName: 'Quiz: Serverless Cloud Environments', points: 10 },
    { moduleName: 'Final Project: Cloud Architecture Design', points: 30 },
    { moduleName: 'Track Complete', points: 190 },
  ];

  useEffect(() => {
    const updatedModules = allModules.map((module) => {
      const isCompleted = props.modules.includes(module.moduleName);
      return {
        ...module,
        completed: isCompleted,
      };
    });

    setModules(updatedModules);
    setLoading(false);
  }, [props.modules]);

  const handleCompleted = async (moduleName, pointsEarned) => {
    const isCompleted = modules.some(
      (module) => module.moduleName === moduleName && module.completed
    );
    if (!isCompleted) {
      if (props.user == null) {
        toast.error('Please log in to track progress.', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
        return;
      }
      await updateTrack(props.user, props.trackName, moduleName, pointsEarned);
      props.updateModule(1, moduleName);
      toast.success(`${moduleName} is marked complete!`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
    } else {
      toast.info(`${moduleName} is already completed.`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="learning-plan w-[64.5rem] tracking-wider">
          <a
            className="module module-left flex flex-col items-center"
            style={{ gridRow: 1 }}
            href="https://trianglecyber.udemy.com/course/aws-essentials-z/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={`flex h-[6rem] w-[28rem] flex-row items-center rounded-2xl bg-[#505d96] text-center ${modules[0].completed ? 'opacity-40' : ''} `}
            >
              <span className="p-5">{modules[0].moduleName}</span>
              <span className="p-5 text-yellow-400">
                {modules[0].points} Points
              </span>
              <span
                className="z-20 mr-5 rounded-2xl border-2 border-green-400 p-2 text-green-400 hover:bg-gray-600"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleCompleted(modules[0].moduleName, modules[0].points);
                }}
              >
                {modules[0].completed ? 'Already Completed' : 'Mark Completed'}
              </span>
            </div>
          </a>
          <div className="line" style={{ gridRow: 2 }}></div>
          <div className="curved-connector-tr" style={{ gridRow: 2 }}></div>
          <div className="curved-connector-bl" style={{ gridRow: 2 }}></div>
          <div className="curved-connector-tl" style={{ gridRow: 2 }}></div>
          <a
            className="module module-right flex flex-col items-center"
            style={{ gridRow: 3 }}
            href="https://docs.google.com/document/d/1ixIJMKwJxCMHaN0hsoeoFHVbkpG0WS7f8OJ52FRCbRw/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={`flex h-[6rem] w-[28rem] flex-row items-center rounded-2xl bg-[#505d96] text-center ${modules[1].completed ? 'opacity-40' : ''}`}
            >
              <span className="p-5">{modules[1].moduleName}</span>
              <span className="p-5 text-yellow-400">
                {modules[1].points} Points
              </span>
              <span
                className="mr-5 rounded-2xl border-2 border-green-400 p-2 text-green-400 hover:bg-gray-600"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleCompleted(modules[1].moduleName, modules[1].points);
                }}
              >
                {modules[1].completed ? 'Already Completed' : 'Mark Completed'}
              </span>
            </div>
          </a>
          <div className="line" style={{ gridRow: 4 }}></div>
          <div className="curved-connector-br" style={{ gridRow: 4 }}></div>
          <div className="curved-connector-tr" style={{ gridRow: 6 }}></div>
          <a
            className="module module-left flex flex-col items-center"
            style={{ gridRow: 5 }}
            href="https://docs.google.com/document/d/1X67wmYWq_awR3hy-5vubTmHdVAYNgvrltu2rDfvEMj8/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={`flex h-[6rem] w-[28rem] flex-row items-center rounded-2xl bg-[#505d96] text-center ${modules[2].completed ? 'opacity-40' : ''}`}
            >
              <span className="p-5">{modules[2].moduleName}</span>
              <span className="p-5 text-yellow-400">
                {modules[2].points} Points
              </span>
              <span
                className="mr-5 rounded-2xl border-2 border-green-400 p-2 text-green-400 hover:bg-gray-600"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleCompleted(modules[2].moduleName, modules[2].points);
                }}
              >
                {modules[2].completed ? 'Already Completed' : 'Mark Completed'}
              </span>
            </div>
          </a>
          <div className="line" style={{ gridRow: 6 }}></div>
          <div className="curved-connector-bl" style={{ gridRow: 6 }}></div>
          <div className="curved-connector-tl" style={{ gridRow: 6 }}></div>
          <a
            className="module module-right flex flex-col items-center"
            style={{ gridRow: 7 }}
            href="https://docs.google.com/document/d/1aMN9rU7PBlK6jVziNKoZSBo8n92O_j01z6n16yrkpOE/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={`flex h-[6rem] w-[28rem] flex-row items-center rounded-2xl bg-[#505d96] text-center ${modules[3].completed ? 'opacity-40' : ''}`}
            >
              <span className="p-5">{modules[3].moduleName}</span>
              <span className="p-5 text-yellow-400">
                {modules[3].points} Points
              </span>
              <span
                className="mr-5 rounded-2xl border-2 border-green-400 p-2 text-green-400 hover:bg-gray-600"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleCompleted(modules[3].moduleName, modules[3].points);
                }}
              >
                {modules[3].completed ? 'Already Completed' : 'Mark Completed'}
              </span>
            </div>
          </a>
          <div className="line" style={{ gridRow: 8 }}></div>
          <div className="curved-connector-br" style={{ gridRow: 8 }}></div>
          <a
            className="module module-left flex flex-col items-center"
            style={{ gridRow: 9 }}
            href="https://forms.office.com/r/dgMBReTJJm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={`flex h-[6rem] w-[28rem] flex-row items-center rounded-2xl bg-[#505d96] text-center ${modules[4].completed ? 'opacity-40' : ''}`}
            >
              <span className="p-5">{modules[4].moduleName}</span>
              <span className="p-5 text-yellow-400">
                {modules[4].points} Points
              </span>
              <span
                className="mr-5 rounded-2xl border-2 border-green-400 p-2 text-green-400 hover:bg-gray-600"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleCompleted(modules[4].moduleName, modules[4].points);
                }}
              >
                {modules[4].completed ? 'Already Completed' : 'Mark Completed'}
              </span>
            </div>
          </a>
          <div className="line" style={{ gridRow: 10 }}></div>
          <div className="curved-connector-bl" style={{ gridRow: 10 }}></div>
          <div className="curved-connector-tr" style={{ gridRow: 10 }}></div>
          <a
            className="module module-right flex flex-col items-center"
            style={{ gridRow: 11 }}
            href="https://trianglecyber.udemy.com/course/lambdaintro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={`flex h-[6rem] w-[28rem] flex-row items-center rounded-2xl bg-[#505d96] text-center ${modules[5].completed ? 'opacity-40' : ''}`}
            >
              <span className="p-5">{modules[5].moduleName}</span>
              <span className="p-5 text-yellow-400">
                {modules[5].points} Points
              </span>
              <span
                className="mr-5 rounded-2xl border-2 border-green-400 p-2 text-green-400 hover:bg-gray-600"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleCompleted(modules[5].moduleName, modules[5].points);
                }}
              >
                {modules[5].completed ? 'Already Completed' : 'Mark Completed'}
              </span>
            </div>
          </a>
          <div className="line" style={{ gridRow: 12 }}></div>
          <div className="curved-connector-br" style={{ gridRow: 12 }}></div>
          <div className="curved-connector-tl" style={{ gridRow: 10 }}></div>
          <a
            className="module module-left flex flex-col items-center"
            style={{ gridRow: 13 }}
            href="https://docs.google.com/document/d/1b238gR1sNIaTjxf0B39Qrytt0HMlzJ7wlDv_hOakZ10/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={`flex h-[6rem] w-[28rem] flex-row items-center rounded-2xl bg-[#505d96] text-center ${modules[6].completed ? 'opacity-40' : ''}`}
            >
              <span className="p-5">{modules[6].moduleName}</span>
              <span className="p-5 text-yellow-400">
                {modules[6].points} Points
              </span>
              <span
                className="mr-5 rounded-2xl border-2 border-green-400 p-2 text-green-400 hover:bg-gray-600"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleCompleted(modules[6].moduleName, modules[6].points);
                }}
              >
                {modules[6].completed ? 'Already Completed' : 'Mark Completed'}
              </span>
            </div>
          </a>
          <div className="line" style={{ gridRow: 14 }}></div>
          <div className="curved-connector-bl" style={{ gridRow: 14 }}></div>
          <div className="curved-connector-tr" style={{ gridRow: 14 }}></div>
          <a
            className="module module-right flex flex-col items-center"
            style={{ gridRow: 15 }}
            href="https://docs.google.com/document/d/1q9gUNAZboih4uHXWOd9sMSf9R3nHZ25gtero-bn3V6w/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={`flex h-[6rem] w-[28rem] flex-row items-center rounded-2xl bg-[#505d96] text-center ${modules[7].completed ? 'opacity-40' : ''}`}
            >
              <span className="p-5">{modules[7].moduleName}</span>
              <span className="p-5 text-yellow-400">
                {modules[7].points} Points
              </span>
              <span
                className="mr-5 rounded-2xl border-2 border-green-400 p-2 text-green-400 hover:bg-gray-600"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleCompleted(modules[7].moduleName, modules[7].points);
                }}
              >
                {modules[7].completed ? 'Already Completed' : 'Mark Completed'}
              </span>
            </div>
          </a>
          <div className="line" style={{ gridRow: 16 }}></div>
          <div className="curved-connector-br" style={{ gridRow: 16 }}></div>
          <div className="curved-connector-tl" style={{ gridRow: 14 }}></div>
          <a
            className="module module-left flex flex-col items-center"
            style={{ gridRow: 17 }}
            href="about:blank"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={`flex h-[6rem] w-[28rem] flex-row items-center rounded-2xl bg-[#505d96] text-center ${modules[8].completed ? 'opacity-40' : ''}`}
            >
              <span className="p-5">{modules[8].moduleName}</span>
              <span className="p-5 text-yellow-400">
                {modules[8].points} Points
              </span>
              <span
                className="mr-5 rounded-2xl border-2 border-green-400 p-2 text-green-400 hover:bg-gray-600"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleCompleted(modules[8].moduleName, modules[8].points);
                }}
              >
                {modules[8].completed ? 'Already Completed' : 'Mark Completed'}
              </span>
            </div>
          </a>
          <div className="line" style={{ gridRow: 18 }}></div>
          <div className="curved-connector-bl" style={{ gridRow: 18 }}></div>
          <div className="curved-connector-tr" style={{ gridRow: 18 }}></div>
          <a
            className="module module-right flex flex-col items-center"
            style={{ gridRow: 19 }}
            href="about:blank"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={`flex h-[6rem] w-[28rem] flex-row items-center rounded-2xl bg-[#505d96] text-center ${modules[9].completed ? 'opacity-40' : ''}`}
            >
              <span className="p-5">{modules[9].moduleName}</span>
              <span className="p-5 text-yellow-400">
                {modules[9].points} Points
              </span>
              <span
                className="mr-5 rounded-2xl border-2 border-green-400 p-2 text-green-400 hover:bg-gray-600"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleCompleted(modules[9].moduleName, modules[9].points);
                }}
              >
                {modules[9].completed ? 'Already Completed' : 'Mark Completed'}
              </span>
            </div>
          </a>
          <div className="line" style={{ gridRow: 20 }}></div>
          <div className="curved-connector-br" style={{ gridRow: 20 }}></div>
          <div className="curved-connector-tl" style={{ gridRow: 18 }}></div>
          <div
            className="module module-left flex flex-col items-center"
            style={{ gridRow: 21 }}
          >
            <div
              className={`flex h-[6rem] w-[28rem] flex-row items-center rounded-2xl bg-[#505d96] text-center ${modules[10].completed ? 'opacity-40' : ''}`}
            >
              <span className="p-5">{modules[10].moduleName}</span>
              <span className="p-5 text-yellow-400">
                {modules[10].points} Points
              </span>
              <span
                className="mr-5 cursor-pointer rounded-2xl border-2 border-green-400 p-2 text-green-400 hover:bg-gray-600"
                onClick={() =>
                  handleCompleted(modules[10].moduleName, modules[10].points)
                }
              >
                {modules[10].completed ? 'Already Completed' : 'Mark Completed'}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
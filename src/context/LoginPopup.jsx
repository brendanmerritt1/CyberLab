import { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';
import '@aws-amplify/ui-react/styles.css';
import { Authenticator } from '@aws-amplify/ui-react';
import { signUp } from 'aws-amplify/auth';
import * as leaderboardUtils from '../utils/LeaderboardUtils.js';
import * as trackUtils from '../utils/LearningTrackUtils.js';
import { toast, Bounce } from 'react-toastify';

export default function LoginPopup(props) {
  const [error, setError] = useState(null);

  useEffect(() => {
    if (props.isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [props.isOpen]);

  if (!props.isOpen) return null;

  const services = {
    async handleSignUp(input) {
      const { username, password, options } = input;

      if (!username.endsWith('@trianglecyber.net')) {
        setError('Only Triangle Cyber email addresses can create an account.');
        return;
      }

      const username_short = username?.split('@')[0];

      try {
        const signUpResult = await signUp({
          username: username,
          password: password,
          options: {
            userAttributes: {
              email: username,
            },
          },
        });

        if (signUpResult) {
          await leaderboardUtils.addEntry(username_short);
          await trackUtils.initAllTracks(
            username_short,
            trackUtils.trackDetails
          );
          toast.success('Account creation successful! Please sign in.', {
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

        return signUpResult;
      } catch (err) {
        setError(err.message);
      }
    },
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-80">
      <motion.div
        className="inset-auto z-30 flex max-h-screen flex-col items-center gap-16 overflow-y-auto rounded-3xl bg-[#161D49] px-10 pb-10 pt-3"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: 70,
          damping: 20,
          duration: 0.1,
        }}
      >
        <div className="flex w-full flex-row pt-2">
          <div className="w-1/6" />
          <div className="w-2/3 text-center text-3xl">
            <span>Login Page</span>
          </div>
          <div className="flex w-1/6 items-start justify-end">
            <button onClick={props.togglePopup}>
              <IoMdClose className="size-[2rem] duration-300 hover:scale-125 tabletVert:size-[2rem] tabletHori:size-[2.5rem]" />
            </button>
          </div>
        </div>
        <div className="w-auto rounded-3xl bg-white p-6">
          <Authenticator services={services}>
            {({ signOut, user }) => (
              <div className="flex flex-col items-center gap-5 text-black">
                {error && <span className="text-red-500">{error}</span>}
                <span>You are signed in as:</span>
                <span>{user.signInDetails.loginId}</span>
                <button
                  onClick={signOut}
                  className="rounded-3xl bg-[#016478] px-5 py-2 text-white"
                >
                  Sign out
                </button>
              </div>
            )}
          </Authenticator>
        </div>
      </motion.div>
    </div>
  );
}

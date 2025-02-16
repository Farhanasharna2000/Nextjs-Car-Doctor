import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa6';

const SocialLogin = () => {
    return (
        <div className="flex justify-center gap-8">
        <p
        //   onClick={() => handleSocialLogin("google")}
          className="bg-slate-200 rounded-full p-3"
        >
          <FaGoogle type="button" />
        </p>
        <p
        //   onClick={() => handleSocialLogin("github")}
          className="bg-slate-200 rounded-full p-3"
        >
          <FaGithub type="button" />
        </p>
      </div>
    );
};

export default SocialLogin;
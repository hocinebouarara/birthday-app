import React, { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const RomanticMessage: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
      transition={{ duration: 2 }}
      className="text-center mb-4"
    >
      <h1 className="display-4 text-primary">Happy Birthday, Touha!</h1>
      <p className="lead">
        My love, you light up my life like no one else. Every day with you is a
        dream come true, and today we celebrate the amazing person you are. You
        are my heart, my happiness, and my forever. I love you more than words
        can say.
      </p>
    </motion.div>
  );
};

const AgeCounter: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const [age, setAge] = useState(0);

  React.useEffect(() => {
    if (isVisible) {
      let currentAge = 0;
      const interval = setInterval(() => {
        if (currentAge < 19) {
          currentAge++;
          setAge(currentAge);
        } else {
          clearInterval(interval);
        }
      }, 100);
    }
  }, [isVisible]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
      transition={{ duration: 1 }}
      className="text-center mb-4"
    >
      <h2 className="text-danger">{age} Years Old</h2>
    </motion.div>
  );
};

const App: React.FC = () => {
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  const handleButtonClick = () => {
    setShowMessage(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 10000); // Show confetti for 5 seconds
  };

  return (
    <div className="container text-center">
      <motion.button
        className="btn btn-primary my-4"
        onClick={handleButtonClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Celebrate Touha's Birthday!
      </motion.button>

      {showConfetti && <Confetti />}
      <RomanticMessage isVisible={showMessage} />
      <AgeCounter isVisible={showMessage} />
    </div>
  );
};

export default App;

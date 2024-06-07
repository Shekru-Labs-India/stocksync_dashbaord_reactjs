import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import SubHeader from '../component/SubHeader';
import Profile from './Profile';

const Home = () => {
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    const fetchTeacherHome = async () => {
      try {
        const response = await fetch("http://192.46.212.210/api/teacher/teacher_home", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setApiResponse(data.msg);
        } else {
          console.error("Failed to fetch teacher home data", response.statusText);
        }
      } catch (error) {
        console.error("An error occurred while fetching teacher home data", error);
      }
    };

    fetchTeacherHome();
  }, []);

  return (
    <div>
      <Header />
      <SubHeader />
      <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
        <div className="layout-container">
          <div className="container-xxl flex-grow-1 container-p-y">
            {apiResponse && (
              <div className="alert " role="alert">
                {apiResponse}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

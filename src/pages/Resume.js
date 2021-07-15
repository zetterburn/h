import React, { useState, useEffect } from "react";
import axios from 'axios';
import TrackVisibility from "react-on-screen";
import Sectiontitle from "../components/Sectiontitle";
import Smalltitle from '../components/Smalltitle';
import Layout from "../components/Layout";
import Progress from "../components/Progress";
import Resume from "../components/Resume";

function Resumes(){
  const [languages, setLanguages] = useState([]);
  const [software, setSoftware] = useState([]);
  const [systems, setSystems] = useState([]);
  const [langMax, setLang] = useState([]);
  const [softMax, setSoft] = useState([]);
  const [systMax, setSyst] = useState([]);
  const [workingExperience, setWorkingExperience] = useState([]);
  const [educationExperience, setEducationExperience] = useState([]);
  useEffect(() =>{
    axios.get('/api/skills')
      .then(response =>{
        setLanguages(response.data.languages);
        setSoftware(response.data.software);
        setSystems(response.data.systems);
        setLang(response.data.languages.reduce((a,b)=>a.value>b.value?a:b).value);
        setSoft(response.data.software.reduce((a,b)=>a.value>b.value?a:b).value);
        setSyst(response.data.systems.reduce((a,b)=>a.value>b.value?a:b).value);
      })
    axios.get('/api/experience')
      .then(response =>{
        setWorkingExperience(response.data.workingExperience);
        setEducationExperience(response.data.educationExperience);
      })
  }, [])
  return (
    <Layout>
      <div className="mi-skills-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Languages" />
          <div className="mi-skills">
            <div className="row mt-30-reverse">
              {languages.map(skill => (
                <TrackVisibility once className="col-lg-6 mt-30" key={skill.title}>
                  <Progress title={skill.title} percentage={skill.value} max={langMax}/>
                </TrackVisibility>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mi-skills-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Software" />
          <div className="mi-skills">
            <div className="row mt-30-reverse">
              {software.map(skill => (
                <TrackVisibility once className="col-lg-6 mt-30" key={skill.title}>
                  <Progress title={skill.title} percentage={skill.value} max={softMax}/>
                </TrackVisibility>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mi-skills-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Operating Systems" />
          <div className="mi-skills">
            <div className="row mt-30-reverse">
              {systems.map(skill => (
                <TrackVisibility once className="col-lg-6 mt-30" key={skill.title}>
                  <Progress title={skill.title} percentage={skill.value} max={systMax}/>
                </TrackVisibility>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Resume" />
          <Smalltitle title="Work Experience" icon="briefcase" />
          <div className="mi-resume-wrapper">
            {workingExperience.map(workingExp => (
              <Resume key={workingExp.id} resumeData={workingExp} />
            ))}
          </div>
          <div className="mt-30"></div>
          <Smalltitle title="Education" icon="book" />
          <div className="mi-resume-wrapper">
            {educationExperience.map(educatonExp => (
              <Resume key={educatonExp.id} resumeData={educatonExp}/>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Resumes;

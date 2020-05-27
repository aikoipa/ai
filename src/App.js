import React, { useEffect } from 'react';
import WOW from 'wow.js';
import './App.css';
import LayoutDownArrow from './compontents/LayoutDownArrow';

function App() {

  useEffect(() => {
    new WOW().init();
  }, [])

  return (
    <div className="App">

      <div className="section2">
        {/* <div className="round-top" /> */}
         <img src="/images/poster.png" alt="poster" className="poster"/>
        {/* <div className="round-bottom" /> */}
      </div>
      <LayoutDownArrow color="#25AAA1"/>

      <div className="section3">
        <h2 className="wow animate__animated animate__pulse">과정소개</h2>

        <p className="course-desc wow animate__animated animate__bounceInLeft">
          본 과정은 인공지능 큐레이터 양성과정으로, 다양한 산업분야에서 각광 받고 있는 인공지능 기술을 응용하고 융합할 수 있는 인재를 양성합니다.
          6개월(960시간) 동안의 "Python의 기초부터, 최신 딥러닝 트렌드까지 양질의 이론 및 실습강의"가 제공되고,
          이와 같이 기업의 전문 개발자와 함께 프로젝트를 수행하여, 산업과 기업에서 원하는 핵심인재로 성장 할 수 있습니다.
        </p>
        <div className="row">
          <div className="col-md-6">
              <div className="single-guarantee mb-30 wow animate__animated animate__fadeIn">
                  <div className="guarantee-content">
                      <h4>기초-심화</h4>
                      <p>인공지능의 기초를 위한 Python부터, 기계학습<br/>딥러닝, 미니프로젝트까지 양질 교육제공</p>
                  </div>
              </div>
          </div>
          <div className="col-md-6">
              <div className="single-guarantee mb-30 wow animate__animated animate__fadeIn">
                  <div className="guarantee-content">
                      <h4>네트워크</h4>
                      <p>협력기관과 국내 대기업, 중소기업, 강소기업과의<br/>네트워크를 활용한, 교육 및 인턴쉽제공</p>
                  </div>
              </div>
          </div>
          <div className="col-md-6">
              <div className="single-guarantee mb-30 wow animate__animated animate__fadeIn">
                  <div className="guarantee-content">
                      <h4>멘토진</h4>
                      <p>글로벌 인공지능 오픈소스 프로젝트 전문개발자<br/> AI기업 현업 개발자 멘토진 구성</p>
                  </div>
              </div>
          </div>
          <div className="col-md-6">
              <div className="single-guarantee mb-30 wow animate__animated animate__fadeIn">
                  <div className="guarantee-content">
                      <h4>실전형 프로젝트</h4>
                      <p>AI기업에서 원하는 교육생이 원하는 실전형 프로그램 제공<br/><br/></p>
                  </div>
              </div>
          </div>
        </div>
      </div>
    
      <div className="section-green">
        <h2 className="wow animate__animated animate__pulse">I. 인공지능을 위한 Python</h2>

        <table className="course-table" align="center">
          <tbody>
            <tr>
              <th rowSpan={4}>1. Python 기초</th><td>Python 개요</td>
            </tr>
            <tr>
              <td>Python Type</td>
            </tr>
            <tr>
              <td>Python Operator & Statement & Expression</td>
            </tr>
            <tr>
              <td>기본 Function</td>
            </tr>
            <tr>
              <th rowSpan={3}>2. Python<br/>Multi-Paradigm</th><td>Functional Programming</td>
            </tr>
            <tr>
              <td>Object-Oriented Programming</td>
            </tr>
            <tr>
              <td>Modular Programming</td>
            </tr>
          </tbody>
        </table>
      </div>
      <LayoutDownArrow color="#06beb6"/>
      <div className="section-white">
        <h2 className="wow animate__animated animate__pulse">II. Python 기반의 데이터 처리</h2>

        <table className="course-table" align="center">
            <tbody>
            <tr>
              <th rowSpan={2}>1. Numeric<br />Programming</th><td>Numpy</td>
            </tr>
            <tr>
              <td>SciPy</td>
            </tr>
            <tr>
              <th rowSpan={2}>2. Pandas</th><td>Data preprocessing</td>
            </tr>
            <tr>
              <td>EDA(Exploratory Data Analaysis</td>
            </tr>
            <tr>
              <th>3. Visualization</th><td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <LayoutDownArrow color="#fff"/>
      <div className="section-green">
        <h2 className="wow animate__animated animate__pulse">III. 인공지능과 기계학습</h2>

        <table className="course-table" align="center">
          <tbody>
          <tr>
            <th>1. 전통적인 인공지능기법</th><td></td>
          </tr>
          <tr>
            <th rowSpan={8}>
              2. Scikit-Learn / State Model을 활용한
              Machine Learning
            </th>
            <td>기계학습 소개 및 개요</td>
          </tr>
          <tr>
            <td>기계학습을 위한 전처리 기법</td>
          </tr>
          <tr>
            <td>기본 기계학습 알고리즘</td>
          </tr>
          <tr>
            <td>Ensemble Model</td>
          </tr>
          <tr>
            <td>시계열 모델</td>
          </tr>
          <tr>
            <td>비지도 학습</td>
          </tr>
          <tr>
            <td>모델 평가</td>
          </tr>
          <tr>
            <td>Scikit-Learn Customizing Model & Tuning</td>
          </tr>
          <tr>
            <th>3. Visualization</th><td></td>
          </tr>
          </tbody>
        </table>
      </div>
      <LayoutDownArrow color="#06beb6"/>
      <div className="section-white">
        <h2 className="wow animate__animated animate__pulse">IV. 딥러닝(Deep Learning)</h2>

        <table className="course-table" align="center">
          <tbody>
          <tr>
            <th rowSpan={3}>
              1. 딥러닝 기초
            </th>
            <td>딥러닝 개요 및 역사</td>
          </tr>
          <tr>
            <td>Percetion & Neural Network 이해</td>
          </tr>
          <tr>
            <td>딥러닝 모델 overfitting 문제해결, 최적화</td>
          </tr>
          <tr>
            <th rowSpan={8}>
              2. 영상처리 & CNN 자연어처리 & RNN
            </th>
            <td>영상처리 기법</td>
          </tr>
          <tr>
            <td>CNN 개요</td>
          </tr>
          <tr>
            <td>CNN 심화 이론</td>
          </tr>
          <tr>
            <td>자연어 처리 개요</td>
          </tr>
          <tr>
            <td>RNN 개요</td>
          </tr>
          <tr>
            <td>RNN 심화 이론</td>
          </tr>
          <tr>
            <td>Custom Recurrent Nerual Network 구현</td>
          </tr>
          <tr>
            <td>Auto Encoder & GAN</td>
          </tr>
          <tr>
            <th>3. 최신 딥러닝 기법</th><td></td>
          </tr>
          </tbody>
        </table>
      </div>
      <div className="section-white">
        <h2 className="wow animate__animated animate__pulse">국 내·외 유명기업<br/>현직 특강강사</h2>
        <img src="/images/teachers.png" alt="teachers" className="teachers" />
        <h2 className="wow animate__animated animate__pulse">AI 관련 프로젝트<br/>협업 기업</h2>
        <img src="/images/partners.png" alt="partners" className="partners" />
      </div>
      <div className="section1">
        <div className="text-section">
          <h1>
            프로젝트 기반 문제 해결형<br/>
            인공지능 큐레이터 양성 과정
          </h1>
          <a href="https://forms.gle/cjnpLkB6wCsocN689">
            접수신청 바로가기
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

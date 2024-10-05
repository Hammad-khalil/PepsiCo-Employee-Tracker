// import React from 'react'
import StockReport from './components/StockReport'
import MeetingReport from "./components/MeetingReport"
import Title from './components/Title'
import DotIndicates from './components/DotIndicates'
import StockAndMeetingSummary from './components/StockAndMeetingSummary'
import KPOHighPerformance from './components/KPOHighPerformance'
import KPOLowPerformance from './components/KPOLowPerformance'

const App = () => {
  return (
<div>      
  <Title/>
  <DotIndicates/>
  <StockReport/>
  <MeetingReport/>
  <StockAndMeetingSummary/>
  <KPOHighPerformance/>
  <KPOLowPerformance/>
</div>

  )
}

export default App

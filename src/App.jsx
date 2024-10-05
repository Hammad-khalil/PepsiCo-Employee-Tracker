// import React from 'react'
import StockReport from './components/StockReport'
import MeetingReport from "./components/MeetingReport"
import Title from './components/Title'
import DotIndicates from './components/DotIndicates'
import StockAndMeetingSummary from './components/StockAndMeetingSummary'
import KPOPerformanceComparison from './components/KPOPerformanceComparison'

const App = () => {
  return (
<div>      
  <Title/>
  <DotIndicates/>
  <StockReport/>
  <MeetingReport/>
  <StockAndMeetingSummary/>
  <KPOPerformanceComparison/>
</div>

  )
}

export default App

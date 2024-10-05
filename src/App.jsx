// import React from 'react'
import StockReport from './components/StockReport'
import MeetingReport from "./components/MeetingReport"
import Title from './components/Title'
import DotIndicates from './components/DotIndicates'
import StockAndMeetingSummary from './components/StockAndMeetingSummary'

const App = () => {
  return (
<div>      
  <Title/>
  <DotIndicates/>
  <StockReport/>
  <MeetingReport/>
  <StockAndMeetingSummary/>
</div>

  )
}

export default App

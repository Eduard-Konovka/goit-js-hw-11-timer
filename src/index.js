import './css/styles.scss'
import CountdownTimer from './js/countdown-timer.js'

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Sep 30, 2021'),
})

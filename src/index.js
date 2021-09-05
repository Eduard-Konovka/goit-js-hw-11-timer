import './css/styles.scss'
import './images/new-year.jpg'
import CountdownTimer from './js/countdown-timer.js'

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 1, 2022'),
})

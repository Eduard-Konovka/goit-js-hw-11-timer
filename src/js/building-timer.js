import CountdownTimer from './countdown-timer-plagin.js'
import { actualYear } from './settings.js'

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date(`Jan 1, ${actualYear}`),
  errorTitle: `С Новым ${actualYear} годом!`,
})
